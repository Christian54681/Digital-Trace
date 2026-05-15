// src/apps/Terminal.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import type { FileSystemNode } from '../types';

interface TerminalProps {
    fileSystem: FileSystemNode[];
}

const Terminal: React.FC<TerminalProps> = ({ fileSystem }) => {
    const { currentUser } = useGame();
    const [input, setInput] = useState('');

    // ESTADO DE NAVEGACIÓN
    // currentDir representa dónde está parado el usuario en el árbol
    const [currentDir, setCurrentDir] = useState<FileSystemNode[]>(fileSystem);
    const [pathStack, setPathStack] = useState<string[]>(['root']);
    const [pendingFolder, setPendingFolder] = useState<FileSystemNode | null>(null);

    const [history, setHistory] = useState<string[]>([
        'DLS_Kernel v4.4.0-x86_64-release',
        'Iniciando sesión segura...',
        `Authenticated as ${currentUser || 'guest'}`,
        'Escribe "help" para ver comandos.',
        ''
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    // LÓGICA DE NAVEGACIÓN

    const getPrompt = () => `${currentUser || 'guest'}@dls:${pathStack.join('/') === 'root' ? '/' : '~/' + pathStack.slice(1).join('/')}$ `;

    const processCommand = (cmd: string) => {
        const parts = cmd.trim().split(/\s+/);
        const action = parts[0].toLowerCase();
        const arg = parts[1];

        let response = '';

        switch (action) {
            case 'help':
                response = 'Comandos:\n - ls: Listar archivos\n - cd [dir]: Cambiar directorio\n - cat [file]: Leer contenido\n - pwd: Ruta actual\n - analyze [img]: Metadatos EXIF\n - clear: Limpiar pantalla\n - whoami: Información del usuario actual';
                break;

            case 'pwd':
                response = '/' + pathStack.join('/');
                break;

            case 'ls':
                if (currentDir.length === 0) {
                    response = '(Directorio vacío)';
                } else {
                    response = currentDir.map(node => {
                        const color = node.type === 'folder' ? '[DIR] ' : '      ';
                        return `${color}${node.name}`;
                    }).join('\n');
                }
                break;

            case 'cd':
                if (!arg || arg === '/') {
                    setCurrentDir(fileSystem);
                    setPathStack(['root']);
                } else if (arg === '..') {
                    // Lógica de retroceso
                    setCurrentDir(fileSystem);
                    setPathStack(['root']);
                } else {
                    const target = currentDir.find(n => n.name.toLowerCase() === arg.toLowerCase() && n.type === 'folder');

                    if (target) {
                        // VERIFICACIÓN DE BLOQUEO
                        if (target.isLocked) {
                            setPendingFolder(target);
                            response = `[!] ACCESO RESTRINGIDO: El directorio "${target.name}" está cifrado.\nIntroduzca la clave de descifrado:`;
                        } else if (target.children) {
                            setCurrentDir(target.children);
                            setPathStack([...pathStack, target.name]);
                        }
                    } else {
                        response = `cd: no existe el directorio: ${arg}`;
                    }
                }
                break;

            case 'cat':
                if (!arg) {
                    response = 'cat: falta un argumento';
                } else {
                    const file = currentDir.find(n => n.name.toLowerCase() === arg.toLowerCase());
                    if (file) {
                        if (file.type === 'folder') {
                            response = `cat: ${arg}: Es un directorio`;
                        } else if (file.isLocked) {
                            response = `[!] ERROR: Archivo cifrado. Se requiere permiso root o llave de descifrado.`;
                        } else {
                            response = file.content || '(Archivo vacío)';
                        }
                    } else {
                        response = `cat: ${arg}: No existe el archivo`;
                    }
                }
                break;

            case 'analyze':
                const img = currentDir.find(n => n.name.toLowerCase() === (arg || '').toLowerCase());
                if (img && img.type === 'image' && img.metadata) {
                    response = `Analizando metadatos de ${arg}...\n`;
                    Object.entries(img.metadata).forEach(([key, value]) => {
                        response += `[+] ${key.padEnd(12)} : ${value}\n`;
                    });
                } else {
                    response = `analyze: ${arg || 'archivo'} no es una imagen válida o no tiene metadatos.`;
                }
                break;

            case 'clear':
                setHistory([]);
                return;

            case 'whoami':
                response = 'user: alex_dls\nstatus: authorized_access\nrole: system_operator\nlast_login: 2026-05-1 08:42:17';
                break;

            default:
                response = `sh: comando no encontrado: ${action}`;
        }

        setHistory(prev => [...prev, `PROMPT${cmd}`, response, '']);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // SI ESTAMOS ESPERANDO UNA CONTRASEÑA
        if (pendingFolder) {
            const pass = input.trim();
            if (pass === pendingFolder.password) {
                // ÉXITO: Desbloqueamos y entramos
                const folderToOpen = pendingFolder;
                setPendingFolder(null); 

                if (folderToOpen.children) {
                    setCurrentDir(folderToOpen.children);
                    setPathStack([...pathStack, folderToOpen.name]);
                    setHistory(prev => [...prev, `> **********`, `[OK] Cifrado removido. Accediendo a ${folderToOpen.name}...`, '']);
                }
            } else {
                // ERROR: Contraseña incorrecta
                setHistory(prev => [...prev, `> **********`, `[!] ERROR: Clave de descifrado incorrecta. Acceso denegado.`, '']);
                setPendingFolder(null);
            }
            setInput('');
            return;
        }

        processCommand(input);
        setInput('');
    };

    return (
        <div
            ref={scrollRef}
            onClick={() => document.getElementById('term-input')?.focus()}
            className="bg-black/95 text-green-500 font-mono p-4 h-full overflow-y-auto custom-scrollbar selection:bg-green-500 selection:text-black text-sm"
        >
            {history.map((line, i) => {
                if (line.startsWith('PROMPT')) {
                    return (
                        <div key={i} className="flex gap-2">
                            <span className="text-blue-400 font-bold">{getPrompt().split('$')[0]}</span>
                            <span className="text-white">$ {line.replace('PROMPT', '')}</span>
                        </div>
                    );
                }
                return (
                    <div key={i} className="whitespace-pre-wrap mb-1 opacity-90">
                        {line}
                    </div>
                );
            })}

            <form onSubmit={handleSubmit} className="flex gap-2">
                <span className="text-blue-400 font-bold">{getPrompt().split('$')[0]}</span>
                <span className="text-white">$</span>
                <input
                    id="term-input"
                    // Si hay una carpeta pendiente, ocultamos lo que escribe
                    type={pendingFolder ? "password" : "text"}
                    autoFocus
                    autoComplete="off"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-transparent outline-none flex-1 text-white border-none p-0 focus:ring-0"
                />
            </form>
        </div>
    );
};

export default Terminal;
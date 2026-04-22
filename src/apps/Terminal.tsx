// src/apps/Terminal.tsx
import React, { useState, useEffect, useRef } from 'react';
import type { FileSystemNode } from '../types';

interface TerminalProps {
    fileSystem: FileSystemNode[];
}

const Terminal: React.FC<TerminalProps> = ({ fileSystem }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([
        'OSINT Terminal v1.0.4 - System Ready',
        'Escribe "help" para ver los comandos disponibles.',
        ''
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll al final cuando hay nuevos mensajes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const findFileRecursively = (nodes: FileSystemNode[], fileName: string): FileSystemNode | null => {
        for (const node of nodes) {
            if (node.name.toLowerCase() === fileName.toLowerCase()) return node;
            if (node.children) {
                const found = findFileRecursively(node.children, fileName);
                if (found) return found;
            }
        }
        return null;
    };

    const processCommand = (cmd: string) => {
        const parts = cmd.trim().split(' ');
        const action = parts[0].toLowerCase();
        const arg = parts[1];

        let response = '';

        switch (action) {
            case 'help':
                response = 'Comandos disponibles:\n - help: Muestra este mensaje\n - clear: Limpia la pantalla\n - analyze [archivo]: Extrae metadatos EXIF de imágenes\n - whoami: Información del usuario actual';
                break;

            case 'clear':
                setHistory([]);
                return;

            case 'whoami':
                response = 'user: alex_dls\nstatus: unauthorized_access_detected';
                break;

            case 'analyze':
                if (!arg) {
                    response = 'Error: Debes especificar un archivo.';
                } else {
                    const file = findFileRecursively(fileSystem, arg);

                    if (file && file.type === 'image' && file.metadata) {
                        // Iniciamos el proceso de escaneo visual
                        response = `Iniciando escaneo de metadatos para: ${arg}...\n`;
                        response += `Extraído de los sectores de memoria: OK\n`;
                        response += `------------------------------------------\n`;

                        // Recorremos dinámicamente cualquier dato que hayas puesto en el objeto metadata
                        Object.entries(file.metadata).forEach(([key, value]) => {
                            response += `[+] ${key.padEnd(12)} : ${value}\n`;
                        });

                        response += `------------------------------------------\n`;
                        response += `[!] Análisis completado. Datos guardados en sesión temporaria.`;
                    }
                    else if (file && file.type === 'image' && !file.metadata) {
                        response = `Analizando ${arg}...\n[!] Error: No se encontraron metadatos EXIF legibles en este archivo.`;
                    }
                    else if (file) {
                        response = `Error: El archivo "${arg}" no es una imagen. No se puede realizar análisis forense.`;
                    } else {
                        response = `Error: Archivo "${arg}" no encontrado. Verifique el nombre y la extensión.`;
                    }
                }
                break;

            default:
                response = `Comando no reconocido: ${action}. Escribe "help" para ayuda.`;
        }

        setHistory(prev => [...prev, `> ${cmd}`, response, '']);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            processCommand(input);
            setInput('');
        }
    };

    return (

        <div ref={scrollRef}
            onClick={() => document.getElementById('term-input')?.focus()} className="bg-black/90 text-green-500 font-mono p-4 h-full overflow-y-auto selection:bg-green-500 selection:text-black">

            {history.map((line, i) => {
                // Si la línea empieza con "> ", es un comando del usuario
                const isCommand = line.startsWith('> ');

                if (isCommand) {
                    return (
                        <div key={i} className="flex gap-2 mb-1">
                            <span className="select-none opacity-70">root@dls:~$</span>
                            <span className="flex-1 select-text text-white">
                                {line.replace('> ', '')}
                            </span>
                        </div>
                    );
                }

                return (
                    <div
                        key={i}
                        className="whitespace-pre-wrap break-all mb-2 select-text"
                    >
                        {line}
                    </div>
                );
            })}

            {/* Línea de input actual */}
            <form onSubmit={handleSubmit} className="flex gap-2">
                <span className="select-none opacity-70 font-bold tracking-wider">
                    root@dls:~$
                </span>
                <input
                    id="term-input"
                    type="text"
                    autoFocus
                    autoComplete="off"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-transparent outline-none flex-1 text-green-400 select-text"
                />
            </form>
        </div>

    );
};

export default Terminal;
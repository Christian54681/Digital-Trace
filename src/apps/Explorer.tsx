// src/apps/Explorer.tsx
import React, { useState } from 'react';
import Icon from '../components/Icon';
import type { FileSystemNode } from '../types';
import { useGame } from '../context/GameContext';

interface ExplorerProps {
    initialData: FileSystemNode[];
    node?: FileSystemNode;
}

const Explorer: React.FC<ExplorerProps> = ({ initialData, node }) => {

    const { unlockNode, openApp } = useGame(); // Extrae la función
    // Historial de navegación para poder volver atrás
    const [history, setHistory] = useState<FileSystemNode[][]>([initialData]);
    const [currentPath, setCurrentPath] = useState<string[]>(['Inicio']);
    const [passwordInput, setPasswordInput] = useState('');
    const [lockedFolder, setLockedFolder] = useState<FileSystemNode | null>(node?.isLocked ? node : null);

    const currentFiles = history[history.length - 1];

    const handleGoBack = () => {
        if (history.length > 1) {
            setHistory(history.slice(0, -1));
            setCurrentPath(currentPath.slice(0, -1));
        }
    };

    const unlockFolder = () => {
        if (lockedFolder && passwordInput === lockedFolder.password) {
            const children = lockedFolder.children || [];

            unlockNode(lockedFolder.id);

            setHistory(prev => [...prev, children]);
            setCurrentPath(prev => [...prev, lockedFolder.name]);

            setLockedFolder(null);
            setPasswordInput('');
        } else {
            alert("Contraseña incorrecta");
        }
    };

    const handleItemDoubleClick = (clickedNode: FileSystemNode) => {
        if (clickedNode.type === 'folder') {
            // LÓGICA DE NAVEGACIÓN
            if (clickedNode.isLocked) {
                setLockedFolder(clickedNode);
                return;
            }

            if (clickedNode.children) {
                setHistory([...history, clickedNode.children]);
                setCurrentPath([...currentPath, clickedNode.name]);
            }
        } else {
            // LÓGICA DE APERTURA (Para imágenes, archivos, etc.)
            // Esto abrirá la ventana correspondiente (ImageViewer, etc.)
            openApp(clickedNode);
        }
    };

    return (
        <div className="flex flex-col h-full text-white font-sans">
            {/* Barra de Navegación superior */}
            <div className="flex items-center gap-4 mb-6 bg-white/5 p-3 rounded-lg border border-white/10">
                <button
                    onClick={handleGoBack}
                    disabled={history.length === 1}
                    className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition-colors"
                >
                    <img src="public\assets\volver.png" alt="volver" className='w-5 h-5' />
                </button>
                <div className="flex gap-2 text-sm opacity-60 italic">
                    {currentPath.join(' / ')}
                </div>
            </div>

            {/* Vista de Archivos */}
            {lockedFolder ? (
                // Pantalla de Bloqueo de Carpeta
                <div className="flex-1 flex flex-col items-center justify-center space-y-4 bg-black/40 rounded-xl">
                    <div className="text-6xl mb-2">🔐</div>
                    <h2 className="text-xl font-bold">Carpeta Encriptada</h2>
                    <p className="text-sm text-white/50">Introduce la contraseña para acceder</p>
                    <input
                        type="password"
                        autoFocus
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && unlockFolder()}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={unlockFolder}
                        className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-bold transition-all"
                    >
                        Desbloquear
                    </button>
                </div>
            ) : (
                // Grid de Archivos
                <div className="flex-1 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6 content-start m-6 ">
                    {currentFiles.map((file) => (
                        <div
                            key={file.id}
                            className="cursor-pointer"
                        >
                            <Icon
                                node={file}
                                size={file.type === 'image' ? 'large' : 'medium'}
                                onDoubleClick={() => handleItemDoubleClick(file)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Explorer;
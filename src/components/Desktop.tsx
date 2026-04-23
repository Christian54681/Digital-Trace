// src/components/Desktop.tsx
import React, { useEffect, useMemo } from 'react';
import { useGame } from '../context/GameContext';
import { initialFileSystem } from '../data/filesystem';
import Icon from './Icon';
import Taskbar from './Taskbar';
import Window from './Window';
import Explorer from '../apps/Explorer';
import Terminal from '../apps/Terminal';
import ImageViewer from '../apps/ImageViewer';
import Browser from '../apps/Browser/Browser';
import FilePasswordScanner from './FilePasswordScanner';
import type { FileSystemNode } from '../types';
import NotificationCenter from './NotificationCenter';
import AmbientPlayer from '../components/AmbientPlayer';

const Desktop: React.FC = () => {
    const { openWindows, currentUser } = useGame();

    useEffect(() => {
        if (!localStorage.getItem('os_user')) {
            localStorage.setItem('os_user', 'Alex Ramírez');
        }
    }, []);

    const desktopFiles = useMemo(() => {
        return (initialFileSystem as FileSystemNode[]).filter((node) => {
            if (!node.owner) return true;

            if ((node.owner as string) === 'all') return true;

            // logica para Alex: puede ver todo lo que es suyo o compartido
            if (currentUser === 'alex') {
                return node.owner === 'alex' || (node.owner as string) === 'all';
            }

            // logica para Guest: solo ve lo que es de invitado o compartido
            if (currentUser === 'guest') {
                return node.owner === 'guest' || (node.owner as string) === 'all';
            }

            return false;
        });
    }, [currentUser]);

    return (
        <div
            className="fixed inset-0 overflow-hidden bg-black bg-center bg-cover flex flex-col transition-all duration-1000"
            style={{
                // Cambiamos ligeramente la opacidad o el matiz según el usuario para dar feedback visual
                backgroundImage: 'url("/assets/desktop-bg.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: currentUser === 'alex' ? 'brightness(0.8) contrast(1.1)' : 'brightness(1)'
            }}
        >
            {/* SOLO si el usuario es 'invitado' se reproduce la musica*/}
            {(currentUser === 'guest') && (
                <AmbientPlayer />
            )}

            {/* Overlay de color dinámico según la sesión */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${currentUser === 'alex' ? 'bg-red-900/5 opacity-100' : 'bg-blue-900/5 opacity-100'
                }`} />

            {/* Área de Iconos (Grid) */}
            <div
                className="flex-1 p-6 grid grid-flow-col gap-6 justify-start content-start z-10"
                style={{
                    gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))'
                }}
            >
                {desktopFiles.map((node) => (
                    <Icon key={node.id} node={node} size="medium" />
                ))}
            </div>

            {/* Renderizado de Ventanas Abiertas */}
            {openWindows.map((win) => (
                <Window key={win.id} id={win.id} title={win.title} node={win.node}>
                    {win.id === 'app-browser' && <Browser />}

                    {win.type === 'folder' && (
                        <div className="h-full w-full">
                            {win.node?.isLocked ? (
                                <FilePasswordScanner node={win.node} />
                            ) : <Explorer initialData={win.node?.children || []} node={win.node} />}
                        </div>
                    )}

                    {/* Seguridad: Solo Alex puede ejecutar la Terminal */}
                    {win.type === 'app' && win.id === 'app-terminal' && currentUser === 'alex' && (
                        <Terminal fileSystem={initialFileSystem} />
                    )}

                    {win.type === 'image' && win.node?.imageUrl && (
                        <div className="h-full w-full">
                            {win.node?.isLocked ? (
                                <FilePasswordScanner node={win.node} />
                            ) : (
                                <ImageViewer imageUrl={win.node.imageUrl} name={win.node.name} />
                            )}
                        </div>
                    )}

                    {win.type === 'file' && (
                        <div className="h-full w-full">
                            {win.node?.isLocked ? (
                                <FilePasswordScanner node={win.node} />
                            ) : (
                                <div className="text-white/90 whitespace-pre-wrap font-mono p-6 bg-black/40 h-full text-sm leading-relaxed">
                                    {win.node?.content || "Archivo vacío."}
                                </div>
                            )}
                        </div>
                    )}
                </Window>
            ))}

            {/* Barra de Tareas */}
            <Taskbar />

            <NotificationCenter />

            {/* Indicador de Sesión (Opcional, para aumentar inmersión) */}
            <div className="absolute top-2 right-4 pointer-events-none opacity-20 font-mono text-[10px] text-white">
                USER_STATUS: {currentUser?.toUpperCase()}_CONNECTED
            </div>
        </div>
    );
};

export default Desktop;
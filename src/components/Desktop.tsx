// src/components/Desktop.tsx
import React from 'react';
import { useGame } from '../context/GameContext';
import { initialFileSystem } from '../data/filesystem';
import Icon from './Icon';
import Taskbar from './Taskbar';
import Window from './Window';
import Explorer from '../apps/Explorer';
import Terminal from '../apps/Terminal';
import ImageViewer from '../apps/ImageViewer';
import Browser from '../apps/Browser';
import FilePasswordScanner from './FilePasswordScanner';

const Desktop: React.FC = () => {
    const { openWindows } = useGame();

    return (
        <div
            className="fixed inset-0 overflow-hidden bg-black bg-center bg-cover flex flex-col"
            style={{
                backgroundImage: 'url("/assets/desktop-bg.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            {/* Área de Iconos (Grid) */}
            <div
                className="flex-1 p-4 grid grid-flow-col gap-4 justify-start content-start"
                style={{
                    gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))'
                }}
            >
                {initialFileSystem.map((node) => (
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

                    {win.type === 'app' && win.id === 'app-terminal' && (
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
                                <div className="text-white/90 whitespace-pre-wrap font-mono p-4 bg-black/20 h-full text-sm">
                                    {win.node?.content || "Archivo vacío."}
                                </div>
                            )}
                        </div>
                    )}
                </Window>
            ))}

            {/* Barra de Tareas */}
            <Taskbar />
        </div>
    );
};

export default Desktop;
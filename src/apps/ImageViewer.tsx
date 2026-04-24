// src/apps/ImageViewer.tsx
import React from 'react';
import { useGame } from '../context/GameContext';

interface ImageViewerProps {
    imageUrl: string;
    name: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, name }) => {
    const { currentUser } = useGame();
    const user  = currentUser === 'guest' ? 'invitado' : 'alex';
    return (
        <div className="flex flex-col h-full w-full bg-black/90 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            {/* Barra de estado interna - Estilo más forense */}
            <div className="h-8 bg-zinc-900 flex items-center justify-between px-4 border-b border-white/10 select-none">
                <span className="text-[10px] text-white/70 font-mono uppercase tracking-[0.2em]">{name}</span>
                <div className="flex gap-4 items-center">
                    <span className="text-[10px] text-green-500/60 font-mono animate-pulse">● ANALYZING</span>
                    <span className="text-[10px] text-white/40 font-mono">FIT_TO_SCREEN</span>
                </div>
            </div>

            <div className="flex-1 min-h-0 w-full flex items-center justify-center p-4 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px]">
                <img
                    src={imageUrl}
                    alt={`Visualización forense de ${name}`}
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out"
                />
            </div>

            {/* Footer opcional para darle ese toque de "investigación" */}
            <div className="h-6 bg-zinc-900 border-t border-white/5 flex items-center px-4">
                <p className="text-[9px] text-white/30 font-mono uppercase">Source: Local_FS / Users / {user} /</p>
            </div>
        </div>
    );
};

export default ImageViewer;
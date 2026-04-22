// src/apps/ImageViewer.tsx
import React from 'react';

interface ImageViewerProps {
    imageUrl: string;
    name: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, name }) => {
    return (
        <div className="flex flex-col h-full w-full bg-black/50 rounded-lg overflow-hidden border border-white/5">
            {/* Barra de estado interna*/}
            <div className="h-8 bg-black/80 flex items-center justify-between px-4 border-b border-white/10">
                <span className="text-s text-white/60 font-mono tracking-wider">{name}</span>
                <span className="text-s text-white/40">100%</span>
            </div>

            {/* Contenedor de la imagen */}
            <div className="flex-1 flex items-center justify-center p-0">
                <img
                    src={imageUrl}
                    alt={`Visualización forense de ${name}`}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm"
                />
            </div>
        </div>
    );
};

export default ImageViewer;
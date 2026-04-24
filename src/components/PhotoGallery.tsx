// src/components/PhotoGallery.tsx
import React from 'react';

interface PhotoProps {
    file: {
        name: string;
        imageUrl: string;
        metadata?: Record<string, string>;
    };
    onClose: () => void;
}

const PhotoGallery: React.FC<PhotoProps> = ({ file, onClose }) => {
    return (
        <div className="flex h-full bg-black text-white font-sans animate-in fade-in">
            {/* Área de la imagen */}
            <div className="flex-1 flex flex-col relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all"
                >
                    ✕ Cerrar
                </button>
                <div className="flex-1 flex items-center justify-center p-8">
                    <img
                        src={file.imageUrl}
                        alt={file.name}
                        className="max-h-full max-w-full object-contain shadow-2xl"
                    />
                </div>
                <div className="bg-black/60 backdrop-blur-md p-4 text-center">
                    <p className="text-sm font-medium">{file.name}</p>
                </div>
            </div>

            {/* Panel de Información Lateral */}
            <div className="w-80 bg-[#1a1a1a] border-l border-white/10 p-6 overflow-y-auto">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <span>ℹ️</span> Detalles
                </h3>

                {file.metadata ? (
                    <div className="space-y-6">
                        {Object.entries(file.metadata).map(([key, value]) => (
                            <div key={key}>
                                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{key}</p>
                                <p className="text-sm text-gray-200 leading-relaxed">{value}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 italic text-sm">No hay metadatos disponibles.</p>
                )}

                <div className="mt-12 pt-6 border-t border-white/5">
                    <p className="text-[10px] text-gray-600 uppercase font-bold">Ubicación del archivo</p>
                    <p className="text-[11px] text-gray-400 mt-1">C:/Users/Alex/Photos/{file.name}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
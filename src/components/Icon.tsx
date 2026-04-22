// src/components/Icon.tsx
import React from 'react';
import { useGame } from '../context/GameContext';
import type { FileSystemNode } from '../types';

interface IconProps {
    node: FileSystemNode;
    size?: 'medium' | 'large';
}

const Icon: React.FC<IconProps> = ({ node, size = 'large' }) => {
    const { openApp } = useGame();

    // Definimos los tamaños basados en la prop
const containerSize = size === 'large' ? 'w-28 h-28' : 'w-24 h-24';
    const imageSize = size === 'large' ? 'w-16 h-16' : 'w-12 h-12';
    const textSize = size === 'large' ? 'text-sm' : 'text-xs';

    const handleDoubleClick = () => {
        openApp(node);
    };

    // Función para determinar qué imagen usar
    const getIconPath = () => {
        if (node.type === 'image' && node.imageUrl) return node.imageUrl;
        if (node.id === 'file-trash') return '/assets/papelera.png';


        if (node.type === 'folder') return '/assets/folder.png';
        if (node.type === 'app') {
            if (node.id.includes('browser')) return '/assets/chrome.png';
            if (node.id.includes('terminal')) return '/assets/terminal.png';
            return '/assets/app-default.png';
        }
        if (node.type === 'image') return '/assets/image-icon.png';

        // Por defecto para archivos .txt o desconocidos
        return '/assets/file.png';
    };

    return (
        <div
            className={`${containerSize} flex flex-col items-center justify-center rounded-2xl hover:bg-white/10 cursor-pointer transition-all group p-1 active:scale-95`}
            onDoubleClick={() => handleDoubleClick()}
        >
            <div className={`${imageSize} mb-2 flex items-center justify-center relative`}>
                <img
                    src={getIconPath()}
                    alt={node.name}
                    className={`w-full h-full transition-transform duration-200 drop-shadow-xl
                        ${node.type === 'image' ? 'object-cover rounded-lg' : 'object-contain'}`}
                />

                {node.isLocked && (
                    <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-1 shadow-lg">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}
            </div>

            <span className={`${textSize} text-center text-white drop-shadow-lg font-medium truncate w-full px-1`}>
                {node.name}
            </span>
        </div>
    );
};

export default Icon;
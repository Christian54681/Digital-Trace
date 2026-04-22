// src/components/FilePasswordScanner.tsx
import React, { useState } from 'react';
import type { FileSystemNode } from '../types';
import { useGame } from '../context/GameContext';

interface Props {
    node: FileSystemNode;
}

const FilePasswordScanner: React.FC<Props> = ({ node }) => {
    const [pass, setPass] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const { unlockNode } = useGame();

    const checkPass = () => {
        if (pass === node.password) {
            unlockNode(node.id);
            setIsUnlocked(true);
            node.isLocked = false;
        } else {
            alert("ERROR: Clave de desencriptación incorrecta.");
        }
    };

    if (isUnlocked) {
        // Si se desbloquea, mostramos el contenido según el tipo
        if (node.type === 'image') return <img src={node.imageUrl} className="max-w-full h-full object-contain" />;
        return <div className="p-6 font-mono text-green-400">{node.content}</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-full bg-slate-900 p-8 text-center">
            <div className="text-4xl mb-4"> <img src="/assets/bloquear.png" alt="Lock" className='w-30 h-30' /></div>
            <h3 className="text-red-500 font-mono text-[24px] mb-2">ARCHIVO ENCRIPTADO: {node.name}</h3>
            <p className="text-[18px] text-gray-500 mb-6">Se requiere decodificador de 128 bits</p>

            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkPass()}
                className="bg-black border border-green-900/50 text-green-500 p-4 font-mono text-m outline-none focus:border-green-500 mb-4 w-88 text-center"
                placeholder="PASSWORD"
            />

            <button
                onClick={checkPass}
                className="text-[20px] text-green-500 border border-green-500 px-8 py-1 hover:bg-green-500 hover:text-black transition-all my-4 "
            >
                EJECUTAR DECRIPCIÓN
            </button>
        </div>
    );
};

export default FilePasswordScanner;
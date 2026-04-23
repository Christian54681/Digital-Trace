// src/apps/Browser/views/FacebookHeader.tsx
import React, { useState } from 'react';
import { socialResults } from '../../../data/webData';

interface FacebookHeaderProps {
    onNavigateMessages: () => void;
    onNavigateProfile: (id: string) => void;
    onNavigateHome: () => void;
}

const FacebookHeader: React.FC<FacebookHeaderProps> = ({
    onNavigateMessages,
    onNavigateProfile,
    onNavigateHome
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchMatches = searchTerm.length > 2
        ? socialResults.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : [];

    return (
        <div className="sticky top-0 bg-white shadow-sm h-14 flex items-center justify-between px-4 z-50 border-b border-gray-200">
            <div className="flex items-center gap-2 flex-1">
                {/* LOGO */}
                <img src="assets/facebook.png" alt="Facebook Logo" className="h-8 cursor-pointer" onClick={onNavigateHome} />

                {/* BUSCADOR INTERNO */}
                <div className="relative w-full max-w-[240px] ml-2">
                    <div className="absolute left-3 top-2.5 opacity-30 text-[10px]"><img src="assets/lupa.png" alt="lupa" className='h-4 mt-0.5 mr-2' /></div>
                    <input
                        type="text"
                        placeholder="Buscar en Facebook"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-[#f0f2f5] rounded-full py-2 pl-8 pr-4 text-[13px] w-full outline-none focus:bg-white focus:ring-1 focus:ring-blue-300 transition-all text-black"
                    />

                    {/* DROP DOWN DE RESULTADOS */}
                    {searchMatches.length > 0 && (
                        <div className="absolute top-11 left-0 w-full bg-white shadow-2xl rounded-lg border border-gray-200 p-2 z-[60] animate-in fade-in zoom-in-95">
                            <p className="text-[10px] font-bold text-gray-400 px-2 mb-1">PERSONAS</p>
                            {searchMatches.map(p => (
                                <div
                                    key={p.id}
                                    className="p-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center gap-3"
                                    onClick={() => {
                                        onNavigateProfile(p.id);
                                        setSearchTerm('');
                                    }}
                                >
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">
                                        {p.name[0]}
                                    </div>
                                    <div className="text-black">
                                        <p className="text-sm font-semibold leading-none">{p.name}</p>
                                        <p className="text-[10px] text-gray-500">{p.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* BOTONES DERECHA */}
            <div className="flex gap-2">
                <button
                    onClick={onNavigateMessages}
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                >
                    <span role="img" aria-label="messages"><img src="assets/messenger.png" alt="messenger" className='h-6 cursor-pointer' /></span>
                </button>
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                    <span role="img" aria-label="notifications"><img src="assets/notificacion.png" alt="notificacion" className='h-6 cursor-pointer' /></span>
                </button>
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    onClick={onNavigateProfile.bind(null, 'alex-martinez')}>
                    <span role="img" aria-label="usuario"><img src="assets/usuario.png" alt="usuario" className='h-6 cursor-pointer' /></span>
                </button>
            </div>
        </div>
    );
};

export default FacebookHeader;
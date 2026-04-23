// src/apps/Browser/views/Google.tsx
import React, { useState } from 'react';

const GoogleView: React.FC<{ onSearch: (q: string) => void }> = ({ onSearch }) => {
    const [q, setQ] = useState('');
    return (
        <div className="flex flex-col items-center justify-center h-full bg-white animate-in fade-in">
            <h1 className="text-6xl font-bold mb-8 select-none">
                <span className="text-blue-500">G</span><span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span><span className="text-blue-500">g</span>
                <span className="text-green-500">l</span><span className="text-red-500">e</span>
            </h1>
            <form onSubmit={(e) => { e.preventDefault(); onSearch(q); }} className="w-full max-w-md px-4">
                <div className="flex items-center gap-3 px-5 py-3 border border-gray-200 rounded-full hover:shadow-md focus-within:shadow-md transition-all">
                    <img src="/assets/lupa.png" className="w-4 h-4 opacity-40" />
                    <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} className="flex-1 outline-none text-sm text-black bg-transparent" placeholder="Buscar en Google..." />
                </div>
            </form>
        </div>
    );
};
export default GoogleView;
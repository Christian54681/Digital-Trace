// src/apps/Browser.tsx
import React, { useState } from 'react';

const Browser: React.FC = () => {
    const [url, setUrl] = useState('https://google.com');
    const [inputUrl, setInputUrl] = useState('https://google.com');

    // Diccionario de "Páginas Web" del juego
    const renderContent = () => {
        const cleanUrl = url.toLowerCase().trim();

        if (cleanUrl.includes('google.com')) {
            return (
                <div className="flex flex-col items-center justify-center h-full bg-white text-gray-800">
                    <h1 className="text-6xl font-bold mb-8">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                    </h1>
                    <div className="w-full max-w-md px-4 py-3 rounded-full border border-gray-200 shadow-sm flex items-center gap-3">
                        <span className="text-gray-400"><img src="/assets/lupa.png" alt="Search" className="w-5 h-5" /> </span>
                        <input type="text" placeholder="Buscar en la red..." className="flex-1 outline-none text-sm" />
                    </div>
                </div>
            );
        }

        if (cleanUrl.includes('social-detective.com/alex-ramirez')) {
            return (
                <div className="h-full bg-slate-100 overflow-y-auto font-sans">
                    <div className="bg-blue-600 h-32 w-full"></div>
                    <div className="max-w-xl mx-auto -mt-16 p-4">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white -mt-12 overflow-hidden">
                                <img src="/assets/avatar.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-2xl font-bold mt-4 text-black">Alex Ramirez</h2>
                            <p className="text-gray-500">"Buscando la verdad, cueste lo que cueste."</p>
                            <hr className="my-4" />
                            <div className="space-y-4">
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="text-xs text-blue-500 font-bold uppercase">Publicado hace 2 días</p>
                                    <p className="text-sm text-gray-700">He visto un coche negro merodeando el almacén de la calle 5. No es paranoia.</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="text-xs text-blue-500 font-bold uppercase">Publicado hace 1 semana</p>
                                    <p className="text-sm text-gray-700">Si alguien lee esto, la clave está en el origen. #OSINT #Investigation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        // Página de error 404 simulada
        return (
            <div className="flex flex-col items-center justify-center h-full bg-white text-gray-400 p-10 text-center">
                <span className="text-6xl mb-4"><img src="/assets/prohibido.png" alt="Error 404" className="w-16 h-16" /> </span>
                <h2 className="text-2xl font-bold text-gray-800">No se puede acceder a este sitio</h2>
                <p className="mt-2 text-sm">La dirección <b>{url}</b> no respondió a la solicitud de conexión.</p>
            </div>
        );
    };

    const handleNavigate = (e: React.FormEvent) => {
        e.preventDefault();
        let target = inputUrl;
        if (!target.startsWith('http')) target = 'https://' + target;
        setUrl(target);
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#f1f3f4] rounded-b-lg overflow-hidden">
            {/* Toolbar del Navegador */}
            <div className="h-12 bg-white border-b border-gray-300 flex items-center px-4 gap-4">
                <div className="flex gap-2 text-gray-500">
                    <button className="hover:bg-gray-100 p-1 rounded"> <img src="/assets/flecha-R.png" alt="Back" className="w-5 h-5" /> </button>
                    <button className="hover:bg-gray-100 p-1 rounded"> <img src="/assets/flecha-A.png" alt="Forward" className="w-5 h-5" /> </button>
                    <button onClick={() => setUrl('https://google.com')} className="hover:bg-gray-100 p-1 rounded"><img src="/assets/home.png" alt="Home" className="w-5 h-5" /></button>
                </div>
                
                <form onSubmit={handleNavigate} className="flex-1">
                    <input 
                        type="text"
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        className="w-full bg-[#f1f3f4] px-4 py-1 rounded-full text-sm border border-transparent focus:bg-white focus:border-blue-400 outline-none transition-all text-gray-700"
                    />
                </form>

                <div className="flex gap-2 text-gray-400">
                    <span className="text-xs">🔒 Secure</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden bg-white">
                {renderContent()}
            </div>
        </div>
    );
};

export default Browser;
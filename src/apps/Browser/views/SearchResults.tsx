// src/apps/Browser/views/SearchResults.tsx
import React from 'react';
import { socialResults } from '../../../data/webData';
import type { BrowserView } from '../Browser';

interface Props {
    query: string;
    onNavigate: (url: string, view: BrowserView, q?: string) => void;
    onNavigateProfile: (id: string) => void;
}

const SearchResults: React.FC<Props> = ({ query, onNavigateProfile, onNavigate }) => {
    const q = query.toLowerCase().trim();

    // 1. Lógica para detectar si busca "Facebook" (Sitio Web)
    const isSearchingFacebook = q.includes('facebook') || q.includes('face') || q.includes('red social') || q.includes('social') || q.includes('fb');

    // 2. Filtrar personas de webData
    const filteredPeople = socialResults.filter(person =>
        person.name.toLowerCase().includes(q)
    );

    const isFacebookLoggedIn = localStorage.getItem('fb_session') === 'active';

    const handleProfileClick = (personId: string) => {
        if (isFacebookLoggedIn) {
            onNavigateProfile(personId);
        } else {
            onNavigate('https://facebook.com/login', 'FB_LOGIN'); // Navega a la página de login
        }
    };

    return (
        <div className="p-8 bg-white h-full animate-in fade-in overflow-y-auto font-sans">
            <p className="text-[13px] text-gray-500 mb-6">
                Aproximadamente {filteredPeople.length + (isSearchingFacebook ? 1 : 0)} resultados para <b className="text-black">"{query}"</b>
            </p>

            <div className="space-y-8">
                {/* --- SECCIÓN: RESULTADOS DE SITIOS WEB (PÁGINAS OFICIALES) --- */}
                {isSearchingFacebook && (
                    <div className="max-w-2xl group">
                        <div className="flex items-center text-[12px] text-gray-700 mb-1 gap-1">
                            <span>https://www.facebook.com</span>
                            <span className="text-[10px] opacity-40">▼</span>
                        </div>
                        <h3
                            onClick={() => onNavigate('https://facebook.com/login', 'FB_LOGIN')}
                            className="text-[20px] text-blue-800 font-medium hover:underline cursor-pointer leading-tight mb-1"
                        >
                            Facebook - Inicia sesión o regístrate
                        </h3>
                        <p className="text-[14px] text-gray-600 leading-relaxed">
                            Crea una cuenta o inicia sesión en Facebook. Conéctate con amigos, familiares y otras personas que conozcas. Comparte fotos y videos...
                        </p>
                        <div className="mt-2 flex gap-4 text-blue-700 text-[13px]">
                            <span onClick={() => onNavigate('https://facebook.com/login', 'FB_LOGIN')} className="hover:underline cursor-pointer ml-4">· Iniciar sesión</span>
                            <span className="hover:underline cursor-pointer">· Buscar personas</span>
                        </div>
                    </div>
                )}

                {/* --- SECCIÓN: RESULTADOS DE PERSONAS (TU WEBDATA) --- */}
                {filteredPeople.length > 0 ? (
                    filteredPeople.map(person => (
                        <div key={person.id} className="max-w-2xl group">
                            <div className="flex items-center text-[12px] text-green-700 mb-1 gap-1">
                                <span>https://facebook.com/{person.name}</span>
                            </div>
                            <h3
                                onClick={() => handleProfileClick(person.id)}
                                className="text-[20px] text-blue-800 font-medium hover:underline cursor-pointer leading-tight mb-1"
                            >
                                {person.name} | Perfil en Facebook
                            </h3>
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                {person.location} — {person.bio}
                            </p>
                        </div>
                    ))
                ) : (
                    !isSearchingFacebook && (
                        <div className="py-20 text-center text-gray-400">
                            <p>No se han encontrado resultados para tu búsqueda.</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default SearchResults;
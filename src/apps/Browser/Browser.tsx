// src/apps/Browser/Browser.tsx
import React, { useState, useEffect } from 'react';

import GoogleView from './views/Google';
import FacebookLogin from './views/FacebookLogin';
import SearchResults from './views/SearchResults';
import FacebookMessages from './views/FacebookMessages';
import FacebookFeed from './views/FacebookFeed'; // Asegúrate de crear este archivo
import FacebookProfile from './views/FacebookProfile';

// Añadimos FB_FEED a los tipos
export type BrowserView = 'GOOGLE' | 'FB_LOGIN' | 'FB_FEED' | 'SEARCH' | 'FB_MESSAGES' | 'FB_PROFILE' | 'ERROR';

const Browser: React.FC = () => {
    const [view, setView] = useState<BrowserView>('GOOGLE');
    const [url, setUrl] = useState('https://google.com');
    const [inputUrl, setInputUrl] = useState('https://google.com');
    const [query, setQuery] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

    const onNavigateProfile = (id: string) => {
        setSelectedProfileId(id);
        navigate(`https://facebook.com/${id}`, 'FB_PROFILE');
    };

    const onNavigateHome = () => {
        navigate('https://facebook.com/feed', 'FB_FEED');
    };

    // Cargar sesión al iniciar
    useEffect(() => {
        const session = localStorage.getItem('fb_session');
        if (session === 'active') {
            setIsLoggedIn(true);
        }
    }, []);

    // Sincronizar la barra de URL con la vista actual
    useEffect(() => {
        setInputUrl(url);
    }, [url]);

    const navigate = (newUrl: string, targetView: BrowserView, searchQ: string = '') => {
        // Lógica especial para Facebook: si está logueado y va a login, mandarlo al feed
        if (targetView === 'FB_LOGIN' && isLoggedIn) {
            setUrl('https://facebook.com/feed');
            setView('FB_FEED');
        } else {
            setUrl(newUrl);
            setView(targetView);
        }
        setQuery(searchQ);
    };

    const handleLoginSuccess = () => {
        localStorage.setItem('fb_session', 'active');
        setIsLoggedIn(true);
        navigate('https://facebook.com/feed', 'FB_FEED');
    };

    const handleLogout = () => {
        localStorage.removeItem('fb_session');
        setIsLoggedIn(false);
        navigate('https://facebook.com/login', 'FB_LOGIN');
    };

    const handleUrlSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const val = inputUrl.toLowerCase().trim();

        if (val.includes('facebook.com')) {
            // Si ya está logueado, va al feed, si no, al login
            isLoggedIn
                ? navigate('https://facebook.com/feed', 'FB_FEED')
                : navigate('https://facebook.com/login', 'FB_LOGIN');
        }
        else if (val.includes('google.com')) {
            navigate('https://google.com', 'GOOGLE');
        }
        else {
            navigate(inputUrl, 'SEARCH', val);
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-white rounded-b-lg overflow-hidden border border-gray-300 shadow-xl font-sans">
            {/* TOOLBAR */}
            <div className="h-12 bg-[#f1f3f4] border-b border-gray-300 flex items-center px-4 gap-4">
                <div className="flex gap-2">
                    <button onClick={() => navigate('https://google.com', 'GOOGLE')} className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                        <img src="/assets/flecha-R.png" className="w-4 h-4 opacity-60" alt="back" />
                    </button>
                    <button className="p-1.5 opacity-20 cursor-not-allowed">
                        <img src="/assets/flecha-A.png" className="w-4 h-4" alt="forward" />
                    </button>
                    <button onClick={() => navigate('https://google.com', 'GOOGLE')} className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                        <img src="/assets/home.png" className="w-4 h-4 opacity-60" alt="home" />
                    </button>
                </div>

                <form onSubmit={handleUrlSubmit} className="flex-1">
                    <div className="relative flex items-center">
                        <span className="absolute left-3 text-[10px] opacity-50"><img src="assets/bloquear-black.png" alt="bloquear" className='h-3' /></span>
                        <input
                            type="text"
                            value={inputUrl}
                            onChange={(e) => setInputUrl(e.target.value)}
                            className="w-full bg-white pl-8 pr-4 py-1.5 rounded-full text-[13px] border border-gray-200 outline-none focus:border-blue-400 text-gray-600 font-mono shadow-sm"
                        />
                    </div>
                </form>

                {/* Botón de Logout opcional si está en Facebook */}
                {isLoggedIn && url.includes('facebook.com') && (
                    <button onClick={handleLogout} className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200 font-bold uppercase">
                        Salir
                    </button>
                )}
            </div>

            {/* AREA DE CONTENIDO */}
            <div className="flex-1 overflow-hidden relative bg-white text-black">
                {view === 'GOOGLE' && (
                    <GoogleView onSearch={(q) => navigate(`https://google.com/search?q=${q}`, 'SEARCH', q)} />
                )}

                {view === 'FB_LOGIN' && (
                    <FacebookLogin onLoginSuccess={handleLoginSuccess} />
                )}

                {view === 'FB_FEED' && (
                    <FacebookFeed onNavigateMessages={() =>
                        navigate('https://facebook.com/messages', 'FB_MESSAGES')}
                        onNavigateProfile={onNavigateProfile}
                        onNavigateHome={onNavigateHome} />
                )}

                {view === 'SEARCH' && (
                    <SearchResults query={query} onNavigate={navigate} onNavigateProfile={onNavigateProfile} />
                )}

                {view === 'FB_MESSAGES' && (
                    <FacebookMessages onNavigateMessages={() =>
                        navigate('https://facebook.com/messages', 'FB_MESSAGES')}
                        onNavigateProfile={onNavigateProfile}
                        onNavigateHome={onNavigateHome} />
                )}
                {view === 'FB_PROFILE' && selectedProfileId && (
                    <FacebookProfile profileId={selectedProfileId} onNavigateMessages={() =>
                        navigate('https://facebook.com/messages', 'FB_MESSAGES')}
                        onNavigateProfile={onNavigateProfile}
                        onNavigateHome={onNavigateHome} />
                )}
            </div>
        </div>
    );
};

export default Browser;
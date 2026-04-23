// src/components/Taskbar.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { initialFileSystem } from '../data/filesystem';

const Taskbar: React.FC = () => {
    const { openApp, resetGame } = useGame();
    const [isStartOpen, setIsStartOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const currentUser = localStorage.getItem('currentUser') === 'guest' ? 'invitado' : 'alex';

    // Reloj en tiempo real
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const currentTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsStartOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const launchApp = (appId: string) => {
        const appNode = initialFileSystem.find(node => node.id === appId);
        if (appNode) {
            openApp(appNode);
            setIsStartOpen(false);
        }
    };

    return (
        <div className="h-12 w-full bg-black/60 backdrop-blur-md border-t border-white/10 flex items-center justify-between px-4 z-[100] relative">

            {/* START MENU (FLOTANTE) */}
            {isStartOpen && (
                <div
                    ref={menuRef}
                    className="absolute bottom-14 left-2 w-72 bg-[#1a1a1a]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-2 duration-200"
                >
                    <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3 px-2">Aplicaciones</h3>
                    <div className="flex flex-col gap-1">
                        <button onClick={() => launchApp('app-browser')} className="flex items-center gap-3 w-full p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
                            <img src="/assets/chrome-w.png" className="w-5 h-5" alt="" />
                            <span className="text-sm font-medium">Navegador Web</span>
                        </button>
                        <button onClick={() => launchApp('app-terminal')} className="flex items-center gap-3 w-full p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
                            <img src="/assets/terminal-w.png" className="w-5 h-5" alt="" />
                            <span className="text-sm font-medium">Consola de Comandos</span>
                        </button>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 px-2">
                            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                C
                            </div>
                            <span className="text-sm text-white/80 font-medium">{currentUser}</span>
                        </div>
                        <button
                            onClick={resetGame}
                            className="p-1.5 hover:bg-red-500/20 rounded-md transition-all"
                            title="Reiniciar Sistema"
                        >
                            <img src="/assets/salida.png" alt="salida" className='w-5 h-5 opacity-70 hover:opacity-100'/>
                        </button>
                    </div>
                </div>
            )}

            {/* TASKBAR CONTENT */}
            <div className="flex items-center gap-2">
                {/* Botón Inicio - Tamaño normalizado */}
                <button
                    onClick={() => setIsStartOpen(!isStartOpen)}
                    className={`p-2 rounded-lg transition-all active:scale-90 ${isStartOpen ? 'bg-white/20' : 'hover:bg-white/10'}`}
                >
                    <img src="/assets/windows-w.png" alt="Inicio" className='w-5 h-5 object-contain' />
                </button>

                <div className="h-6 w-[1px] bg-white/10 mx-1" />

                <button onClick={() => launchApp('app-browser')} className="hover:bg-white/10 p-2 rounded-lg transition-all active:scale-90">
                    <img src="/assets/chrome-w.png" alt="Chrome" className='w-5 h-5 object-contain' />
                </button>

                <button onClick={() => launchApp('app-terminal')} className="hover:bg-white/10 p-2 rounded-lg transition-all active:scale-90">
                    <img src="/assets/terminal-w.png" alt="Terminal" className='w-5 h-5 object-contain' />
                </button>
            </div>

            {/* Reloj y Fecha compactos */}
            <div className="flex items-center gap-3 text-white pr-2 select-none">
                <div className="text-right leading-none">
                    <p className="text-[12px] font-semibold">{currentTime}</p>
                    <p className="text-[9px] opacity-50 mt-0.5">12/10/2026</p>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;
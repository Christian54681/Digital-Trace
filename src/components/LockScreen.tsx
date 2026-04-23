// src/components/LockScreen.tsx
import React, { useState, useEffect } from 'react';
import { useGame, type UserSession } from '../context/GameContext';

const LockScreen: React.FC = () => {
    const { unlockPC } = useGame();
    const [selectedUser, setSelectedUser] = useState<UserSession>('alex');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            setDate(now.toLocaleDateString('es-ES', {
                weekday: 'long', day: 'numeric', month: 'long'
            }));
        };
        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    const handleUnlock = async () => {
        setIsLoading(true);
        setError(false);

        setTimeout(() => {
            if (selectedUser === 'guest') {
                unlockPC('guest');
            } else {
                const CORRECT_PASSWORD = "0G8V/+t\\0l2n";
                if (password === CORRECT_PASSWORD) {
                    unlockPC('alex');
                } else {
                    setError(true);
                    setIsLoading(false);
                    setPassword('');
                    setTimeout(() => setError(false), 500);
                }
            }
        }, 800);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleUnlock();
    };

    return (
        <div className="fixed inset-0 overflow-hidden bg-[#050505] flex flex-col items-center justify-center text-white font-sans">
            
            {/* FONDO */}
            <img
                src="/assets/lockscreen-bg.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale-[30%] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-[1]" />

            {/* RELOJ */}
            <div className="z-10 text-center mb-16 select-none animate-in fade-in zoom-in duration-1000">
                <h1 className="text-9xl font-extralight tracking-tighter drop-shadow-2xl">{time}</h1>
                <p className="text-xl font-light tracking-[0.4em] opacity-50 mt-4 uppercase">{date}</p>
            </div>

            <div className="z-10 flex w-full max-w-5xl h-[400px] items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                
                {/* SELECTOR DE USUARIOS (IZQUIERDA) */}
                <div className="w-1/3 flex flex-col gap-6 border-r border-white/5 pr-12">
                    <button 
                        onClick={() => { setSelectedUser('alex'); setError(false); }}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                            selectedUser === 'alex' ? 'bg-white/10 ring-1 ring-white/20 shadow-xl' : 'opacity-30 hover:opacity-60 hover:bg-white/5'
                        }`}
                    >
                        <img src="/assets/avatar.png" className="w-14 h-14 rounded-full border border-white/20" alt="Alex" />
                        <div className="text-left">
                            <p className="font-semibold text-blue-400">Alex Ramirez</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Administrador</p>
                        </div>
                    </button>

                    <button 
                        onClick={() => { setSelectedUser('guest'); setError(false); }}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                            selectedUser === 'guest' ? 'bg-white/10 ring-1 ring-white/20 shadow-xl' : 'opacity-30 hover:opacity-60 hover:bg-white/5'
                        }`}
                    >
                        <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-2xl">👤</div>
                        <div className="text-left">
                            <p className="font-semibold text-white/80">Invitado</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest">Acceso Público</p>
                        </div>
                    </button>
                </div>

                {/* LOGIN AREA (DERECHA) */}
                <div className="flex-1 flex flex-col items-center pl-12">
                    <div className={`w-full max-w-sm flex flex-col items-center transition-all ${error ? 'animate-shake' : ''}`}>
                        
                        <div className="mb-10 text-center">
                            <div className="relative inline-block">
                                {selectedUser === 'alex' ? (
                                    <img src="/assets/avatar.png" className="w-28 h-28 rounded-full border-2 border-white/20 shadow-2xl object-cover" alt="User" />
                                ) : (
                                    <div className="w-28 h-28 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center text-4xl shadow-2xl text-white/20">👤</div>
                                )}
                                <div className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-black ${selectedUser === 'alex' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                            </div>
                            <h2 className="text-3xl font-light mt-6 tracking-tight text-white/90">
                                {selectedUser === 'alex' ? 'Alex Ramirez' : 'Invitado'}
                            </h2>
                        </div>

                        {selectedUser === 'alex' ? (
                            <div className="relative w-full group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    disabled={isLoading}
                                    autoFocus
                                    placeholder="Contraseña"
                                    className={`w-full px-12 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border transition-all text-center
                                        ${error ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 focus:border-blue-500/50'} 
                                        outline-none text-lg placeholder:text-white/10`}
                                />

                                {/* Revelar Pass */}
                                <button
                                    onMouseDown={() => setShowPassword(true)}
                                    onMouseUp={() => setShowPassword(false)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-100 transition-opacity"
                                >
                                    <span className="text-[10px] font-bold tracking-tighter">{showPassword ? 'HID' : 'VIS'}</span>
                                </button>

                                {/* Flecha / Spinner */}
                                <button
                                    onClick={handleUnlock}
                                    disabled={isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        ) : (
                            <div className="text-center w-full">
                                <button
                                    onClick={handleUnlock}
                                    disabled={isLoading}
                                    className="group flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-[0.98]"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span className="font-medium tracking-wide">ENTRAR AL SISTEMA</span>
                                            <svg className="w-5 h-5 opacity-40 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        )}

                        {error && (
                            <p className="mt-4 text-red-500/80 text-[10px] font-mono tracking-widest uppercase">Failed_Authentication_Error</p>
                        )}
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="absolute bottom-10 w-full px-16 flex justify-between items-center z-10 opacity-20 font-mono text-[9px] tracking-[0.5em] uppercase">
                <div className="flex gap-8">
                    <span className="cursor-pointer hover:text-white transition-colors">Emergency_Call</span>
                    <span className="cursor-pointer hover:text-white transition-colors">Network_Settings</span>
                </div>
                <div>Station_#192-A // Digital_Trace</div>
            </div>

            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-8px); }
                    40%, 80% { transform: translateX(8px); }
                }
                .animate-shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
            `}</style>
        </div>
    );
};

export default LockScreen;
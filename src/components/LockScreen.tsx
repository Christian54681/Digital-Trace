// src/components/LockScreen.tsx
import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';

const LockScreen: React.FC = () => {
    const { unlockPC } = useGame();
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    // Reloj y Fecha Realista
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            setDate(now.toLocaleDateString('es-ES', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
            }));
        };
        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    // Lógica de Desbloqueo con Simulación de Carga
    const handleUnlock = async () => {
        if (!password) return;

        setIsLoading(true);
        setError(false);

        // Simulamos un pequeño lag de "procesamiento" para realismo
        setTimeout(() => {
            const CORRECT_PASSWORD = "0G8V/+t\\0l2n";
            if (password === CORRECT_PASSWORD) {
                unlockPC();
            } else {
                setError(true);
                setIsLoading(false);
                setPassword('');
                // Quitamos la animación de sacudida después de 500ms
                setTimeout(() => setError(false), 500);
            }
        }, 800);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleUnlock();
    };

    return (
        <div className="fixed inset-0 overflow-hidden bg-black flex flex-col items-center justify-center text-white font-sans">

            {/* FONDO Y CAPAS VISUALES */}
            <img
                src="/assets/lockscreen-bg.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-[1]" />

            {/* Efecto de ruido sutil para inmersión */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* RELOJ (Sección Superior) */}
            <div className="z-10 text-center mb-12 select-none animate-in fade-in zoom-in duration-700">
                <h1 className="text-8xl font-extralight tracking-tight drop-shadow-2xl">{time}</h1>
                <p className="text-xl font-light tracking-wide opacity-80 mt-2 capitalize">{date}</p>
            </div>

            {/* TARJETA DE LOGIN */}
            <div className={`z-10 flex flex-col items-center w-full max-w-sm transition-all duration-300 
                ${error ? 'animate-bounce' : 'animate-in fade-in slide-in-from-bottom-8 duration-1000'}`}
                style={error ? { animation: 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both' } : {}}
            >
                {/* Avatar con aura de estado */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse"></div>
                    <img
                        src="/assets/avatar.png"
                        alt="User"
                        className="relative w-24 h-24 rounded-full border-2 border-white/30 shadow-2xl object-cover z-10"
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-[3px] border-[#121212] rounded-full z-20"></div>
                </div>

                <h2 className="text-2xl font-medium mb-8 tracking-tight">Alex Ramirez</h2>

                {/* Input Container */}
                <div className="relative w-full group">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isLoading}
                        placeholder="Contraseña"
                        className={`w-full px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border transition-all text-center
                            ${error ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 focus:border-blue-500/50'} 
                            outline-none text-lg placeholder:text-white/20`}
                    />

                    {/* Botón revelar contraseña */}
                    <button
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 transition-opacity"
                    >
                        <span className="text-xs font-bold">{showPassword ? 'HID' : 'VIS'}</span>
                    </button>

                    {/* Botón de flecha / Spinner */}
                    <button
                        onClick={handleUnlock}
                        disabled={isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all disabled:opacity-50"
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

                {/* Mensaje de ayuda sutil */}
                <p className="mt-6 text-sm text-white/30 font-light hover:opacity-100 transition-opacity cursor-default">
                    ¿Olvidaste tu contraseña?
                </p>
            </div>

            {/* Footer de Sistema */}
            <div className="absolute bottom-8 w-full px-12 flex justify-between items-center z-10 opacity-40">
                <div className="flex gap-6">
                    <button className="hover:text-blue-400 transition-colors">Accesibilidad</button>
                    <button className="hover:text-blue-400 transition-colors">Red</button>
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase">
                    System Core v4.2.0-STABLE
                </div>
            </div>

            {/* Definición de la animación Shake en el componente (Inline Style) */}
            <style>{`
                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
            `}</style>
        </div>
    );
};

export default LockScreen;
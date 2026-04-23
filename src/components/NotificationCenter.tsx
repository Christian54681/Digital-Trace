// src/components/NotificationCenter.tsx
import React from 'react';
import { useGame } from '../context/GameContext';

const NotificationCenter: React.FC = () => {
    const { notifications } = useGame();

    return (
        <div className="fixed bottom-20 right-6 z-[9999] flex flex-col gap-3 w-[320px] pointer-events-none">
            {notifications.map((n) => (
                <div
                    key={n.id}
                    className="pointer-events-auto relative overflow-hidden group 
                               bg-black/40 backdrop-blur-xl border border-white/10 
                               p-4 rounded-xl shadow-2xl animate-in slide-in-from-right-full duration-500"
                >
                    {/* Línea de acento sutil según el tipo */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${n.type === 'error' ? 'bg-red-500/50' :
                            n.type === 'warning' ? 'bg-amber-500/50' : 'bg-blue-500/50'
                        }`} />

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                                Sistema {n.type === 'error' && '• Crítico'}
                            </h4>
                            <span className="text-[9px] text-white/20 font-mono">AHORA</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white/90 tracking-tight">
                                {n.title}
                            </span>
                            <p className="text-xs text-white/50 leading-relaxed mt-1 font-light">
                                {n.message}
                            </p>
                        </div>
                    </div>

                    {/* Botón de cierre sutil que aparece al hacer hover */}
                    <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-white/20 hover:text-white">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default NotificationCenter;
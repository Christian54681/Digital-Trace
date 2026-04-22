// src/components/Window.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import type { FileSystemNode } from '../types';


interface WindowProps {
    id: string;
    title: string;
    children: React.ReactNode;
    node?: FileSystemNode;
}

const Window: React.FC<WindowProps> = ({ id, title, children }) => {
    const { closeWindow, focusedWindowId, setFocusedWindow } = useGame();

    // Posición inicial (más centrada y aleatoria)
    const [position, setPosition] = useState({
        x: 150 + Math.random() * 100,
        y: 80 + Math.random() * 50
    });
    const [isDragging, setIsDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });

    const isFocused = focusedWindowId === id;

    const handleMouseDown = (e: React.MouseEvent) => {
        setFocusedWindow(id);
        setIsDragging(true);
        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        };
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y
            });
        };

        const handleMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className={`absolute flex flex-col rounded-xl shadow-2xl border transition-all duration-200 overflow-hidden
        ${isFocused ? 'z-40 border-white/40 shadow-blue-900/40 ring-1 ring-white/10' : 'z-30 border-white/10 shadow-black/80'}
        bg-[#121212]/95 backdrop-blur-2xl`}
            style={{
                left: position.x,
                top: position.y,
                width: '50vw', // 50% del ancho de la pantalla
                height: '70vh', // 70% del alto de la pantalla
                pointerEvents: 'auto'
            }}
            onClick={() => setFocusedWindow(id)}
        >
            {/* Barra de Título */}
            <div
                onMouseDown={handleMouseDown}
                className={`h-14 flex items-center justify-between px-6 cursor-grab active:cursor-grabbing select-none
          ${isFocused ? 'bg-white/5 text-white' : 'bg-transparent text-white/30'}`}
            >
                <div className="flex items-center gap-3">
                    {/* Icono pequeño en la barra para identificar la app */}
                    {/*AQUI AGREGAR LOGICA PARA ICONO DE CONSOLA O FOTOS */}
                    <span className="opacity-70 text-lg"><img src="public\assets\white-folder.png" alt="carpeta" className='w-6 h-6'/></span>
                    <span className="text-base font-semibold tracking-wide uppercase">{title}</span>
                </div>

                {/* Contenedor de Botones de Control */}
                <div className="flex gap-4 items-center">
                    <button className="w-4 h-4 rounded-full bg-yellow-500/30 hover:bg-yellow-500 transition-all border border-yellow-500/20" />
                    <button className="w-4 h-4 rounded-full bg-green-500/30 hover:bg-green-500 transition-all border border-green-500/20" />

                    {/* BOTÓN CERRAR - Con área de click aumentada (p-2) */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            closeWindow(id);
                        }}
                        className="group relative p-2 -mr-2" // El padding negativo compensa el espacio visual
                    >
                        <div className="w-5 h-5 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-all border border-red-500/20 flex items-center justify-center text-[10px] font-bold">
                            ✕
                        </div>
                    </button>
                </div>
            </div>

            {/* Contenido de la Aplicación - Con scroll elegante */}
            <div className="flex-1 overflow-auto bg-white/50  custom-scrollbar">
                {children}
            </div>
        </div>
    );
};

export default Window;
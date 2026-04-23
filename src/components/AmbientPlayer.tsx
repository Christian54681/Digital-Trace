// src/components/AmbientPlayer.tsx
import React, { useEffect, useRef, useState } from 'react';

const playlist = [
    '/assets/music/track_1.mp3',
    '/assets/music/track_2.mp3',
    '/assets/music/track_3.mp3'
];

const AmbientPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playNext = () => {
        if (!audioRef.current) return;
        
        // 1. Elegir canción aleatoria
        const nextTrack = playlist[Math.floor(Math.random() * playlist.length)];
        audioRef.current.src = nextTrack;
        audioRef.current.volume = 0;
        
        // 2. Tiempo de espera aleatorio antes de que empiece (entre 10 y 25 segundos)
        // Esto evita que la música sea "machacona"
        const delay = Math.random() * (25000 - 10000) + 5000;

        setTimeout(() => {
            audioRef.current?.play().catch(e => console.log("Esperando interacción..."));
            fadeIn();
        }, delay);
    };

    const fadeIn = () => {
        let vol = 0;
        const interval = setInterval(() => {
            if (audioRef.current && vol < 0.25) {
                vol += 0.01;
                audioRef.current.volume = vol;
            } else {
                clearInterval(interval);
            }
        }, 200);
    };

    useEffect(() => {
        playNext(); // Iniciar la primera pista al montar
    }, []);

    return <audio ref={audioRef} onEnded={playNext} className="hidden" />;
};

export default AmbientPlayer;
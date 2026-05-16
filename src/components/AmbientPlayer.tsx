// src/components/AmbientPlayer.tsx
import React, { useEffect, useRef, useState } from 'react';

const guestPlaylist = [
    '/assets/music/track_1.mp3',
    '/assets/music/track_2.mp3',
    '/assets/music/track_3.mp3'
];

interface AmbientPlayerProps {
    enabled: boolean;
}

const AmbientPlayer: React.FC<AmbientPlayerProps> = ({ enabled }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    // Evita repetir la misma canción dos veces seguidas
    const lastTrackRef = useRef<string | null>(null);

    const getRandomTrack = () => {
        let nextTrack = guestPlaylist[
            Math.floor(Math.random() * guestPlaylist.length)
        ];

        while (
            guestPlaylist.length > 1 &&
            nextTrack === lastTrackRef.current
        ) {
            nextTrack = guestPlaylist[
                Math.floor(Math.random() * guestPlaylist.length)
            ];
        }

        lastTrackRef.current = nextTrack;
        return nextTrack;
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

    const playNext = () => {
        if (!enabled) return;
        if (!audioRef.current) return;

        const nextTrack = getRandomTrack();

        audioRef.current.src = nextTrack;
        audioRef.current.volume = 0;

        const delay = Math.random() * (25000 - 10000) + 5000;

        setTimeout(() => {
            if (!enabled) return;
            audioRef.current?.play()
                .then(() => {
                    fadeIn();
                })
                .catch(() => {
                    console.log("Esperando interacción del usuario...");
                });

        }, delay);
    };

    // Iniciar una sola vez
    useEffect(() => {

        if (!hasStarted && enabled) {
            setHasStarted(true);
            playNext();
        }

    }, [enabled]);

    return (
        <audio
            ref={audioRef}
            onEnded={() => {
                if (enabled) {
                    playNext();
                }
            }}
            className="hidden"
        />
    );
};

export default AmbientPlayer;
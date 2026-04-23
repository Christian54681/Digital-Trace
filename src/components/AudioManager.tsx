// src/components/AudioManager.tsx
import React, { useEffect, useRef } from 'react';

const AudioManager: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // Volumen bajo para que sea ambiente
        }
    }, []);

    return (
        <audio
            ref={audioRef}
            src="/assets/music/chapter1_ambient.mp3"
            loop
            autoPlay
        />
    );
};

export default AudioManager;
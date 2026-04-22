import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { FileSystemNode } from '../types';

// Definimos qué información tendrá una ventana activa
interface ActiveWindow {
    id: string;
    type: string;
    title: string;
    node?: FileSystemNode; // Datos del archivo si la ventana abre un archivo
}

interface GameContextType {
    openWindows: ActiveWindow[];
    openApp: (node: FileSystemNode) => void;
    closeWindow: (id: string) => void;
    focusedWindowId: string | null;
    setFocusedWindow: (id: string) => void;
    isPCUnlocked: boolean;
    unlockPC: () => void;
    unlockNode: (id: string) => void;
    resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {

    const [isPCUnlocked, setIsPCUnlocked] = useState(() => {
        return localStorage.getItem('isPCUnlocked') === 'true';
    });

    const [openWindows, setOpenWindows] = useState<ActiveWindow[]>(() => {
        const saved = localStorage.getItem('openWindows');
        return saved ? JSON.parse(saved) : [];
    });

    const [focusedWindowId, setFocusedWindowId] = useState<string | null>(null);

    useEffect(() => {
        localStorage.setItem('isPCUnlocked', isPCUnlocked.toString());
        localStorage.setItem('openWindows', JSON.stringify(openWindows));
    }, [isPCUnlocked, openWindows]);

    const unlockPC = () => setIsPCUnlocked(true);

    const unlockNode = (id: string) => {
        setOpenWindows(prev => prev.map(win => {
            if (win.id === id && win.node) {
                return {
                    ...win,
                    node: { ...win.node, isLocked: false }
                };
            }
            return win;
        }));
    };

    const openApp = (node: FileSystemNode) => {

        // 1. Si la ventana ya está abierta, solo le damos el foco
        if (openWindows.find((w) => w.id === node.id)) {
            setFocusedWindowId(node.id);
            return;
        }

        // 2. Definimos un título dinámico según el tipo de archivo/app
        let windowTitle = node.name;

        if (node.type === 'image') {
            windowTitle = `Image Viewer- [ ${node.name} ]`;
        } else if (node.type === 'folder') {
            windowTitle = `Explorador: ${node.name}`;
        } else if (node.id === 'app-terminal') {
            windowTitle = `Console Area - Root@Investigator`;
        }

        // 3. Creamos la nueva ventana con la estructura que ya tenías
        const newWindow: ActiveWindow = {
            id: node.id,
            type: node.type, // 'image', 'file', 'folder' o 'app'
            title: windowTitle,
            node: node
        };

        // 4. Actualizamos el estado
        setOpenWindows([...openWindows, newWindow]);
        setFocusedWindowId(node.id);
    };

    const closeWindow = (id: string) => {
        setOpenWindows(openWindows.filter((w) => w.id !== id));
        if (focusedWindowId === id) setFocusedWindowId(null);
    };

    const resetGame = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <GameContext.Provider value={{
            openWindows,
            openApp,
            closeWindow,
            focusedWindowId,
            setFocusedWindow: setFocusedWindowId,
            isPCUnlocked,
            unlockPC,
            unlockNode,
            resetGame
        }}>
            {children}
        </GameContext.Provider>
    );
};

// Hook personalizado para usar el contexto fácilmente
export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) throw new Error('useGame debe usarse dentro de un GameProvider');
    return context;
};
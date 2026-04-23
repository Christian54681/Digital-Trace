// src/context/GameContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { FileSystemNode } from '../types';

interface ActiveWindow {
    id: string;
    type: string;
    title: string;
    node?: FileSystemNode;
}

interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'warning' | 'error' | 'success';
}

// Definimos los tipos de usuario
export type UserSession = 'alex' | 'guest' | null;

interface GameContextType {
    openWindows: ActiveWindow[];
    openApp: (node: FileSystemNode) => void;
    closeWindow: (id: string) => void;
    focusedWindowId: string | null;
    setFocusedWindow: (id: string) => void;
    isPCUnlocked: boolean;
    currentUser: UserSession; // Nuevo: Quién está logueado
    unlockPC: (user: UserSession) => void; // Modificado: Recibe el usuario
    unlockNode: (id: string) => void;
    resetGame: () => void;
    logout: () => void;
    notifications: Notification[];
    notify: (title: string, message: string, type?: Notification['type']) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {

    const [notifications, setNotifications] = useState<Notification[]>([]);

    const notify = (title: string, message: string, type: Notification['type'] = 'info') => {
        const id = Math.random().toString(36).substring(7);
        setNotifications(prev => [...prev, { id, title, message, type }]);

        // Auto-eliminar después de 5 segundos
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 5000);
    };

    // Estado de desbloqueo y persistencia de usuario
    const [isPCUnlocked, setIsPCUnlocked] = useState(() => {
        return localStorage.getItem('isPCUnlocked') === 'true';
    });

    const [currentUser, setCurrentUser] = useState<UserSession>(() => {
        return localStorage.getItem('currentUser') as UserSession || null;
    });

    const [openWindows, setOpenWindows] = useState<ActiveWindow[]>(() => {
        const saved = localStorage.getItem('openWindows');
        return saved ? JSON.parse(saved) : [];
    });

    const [focusedWindowId, setFocusedWindowId] = useState<string | null>(null);

    // Sincronización con LocalStorage
    useEffect(() => {
        localStorage.setItem('isPCUnlocked', isPCUnlocked.toString());
        localStorage.setItem('currentUser', currentUser || '');
        localStorage.setItem('openWindows', JSON.stringify(openWindows));
    }, [isPCUnlocked, currentUser, openWindows]);

    // Función de desbloqueo mejorada
    const unlockPC = (user: UserSession) => {
        setCurrentUser(user);
        setIsPCUnlocked(true);
    };

    const logout = () => {
        setIsPCUnlocked(false);
        setCurrentUser(null);
        setOpenWindows([]); // Cerramos todo por seguridad al salir
    };

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
        // SEGURIDAD: Si un Guest intenta abrir la terminal, bloqueamos
        if (currentUser === 'guest' && node.id === 'app-terminal') {
            notify(
                "Access Denied",
                "Local policy restricts Terminal access to authorized administrators only. Contact your system provider.",
                "error"
            );
            return;
        }

        if (openWindows.find((w) => w.id === node.id)) {
            setFocusedWindowId(node.id);
            return;
        }

        let windowTitle = node.name;
        if (node.type === 'image') windowTitle = `Image Viewer - [ ${node.name} ]`;
        else if (node.type === 'folder') windowTitle = `Explorador: ${node.name}`;
        else if (node.id === 'app-terminal') windowTitle = `Console Area - Root@AlexPC`;

        const newWindow: ActiveWindow = {
            id: node.id,
            type: node.type,
            title: windowTitle,
            node: node
        };

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
            currentUser,
            unlockPC,
            unlockNode,
            resetGame,
            logout,
            notifications,
            notify
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) throw new Error('useGame debe usarse dentro de un GameProvider');
    return context;
};
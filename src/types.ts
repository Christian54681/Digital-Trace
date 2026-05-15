// src/types.ts
export type NodeType = 'file' | 'folder' | 'image' | 'app' | 'papelera' | 'document' | 'audio' | 'video' | 'archive' | 'shortcut';

export interface FileSystemNode {
    id: string;
    name: string;
    type: NodeType;
    owner?: 'alex' | 'guest' | 'all';
    icon?: string;
    content?: string;      // Texto dentro de un .txt
    imageUrl?: string;    // Ruta de la imagen
    children?: FileSystemNode[]; // Solo para carpetas
    isLocked?: boolean;
    password?: string;    // Contraseña para archivos cifrados
    metadata?: Record<string, string>;
}
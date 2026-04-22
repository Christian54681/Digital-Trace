// src/types.ts
export type NodeType = 'file' | 'folder' | 'image' | 'app' | 'papelera';

export interface FileSystemNode {
    id: string;
    name: string;
    type: NodeType;
    icon?: string;
    content?: string;      // Texto dentro de un .txt
    imageUrl?: string;    // Ruta de la imagen
    children?: FileSystemNode[]; // Solo para carpetas
    isLocked?: boolean;
    password?: string;    // Contraseña para archivos cifrados
    metadata?: Record<string, string>;
}
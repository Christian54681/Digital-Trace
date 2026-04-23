// src/data/fileSystem.ts
import type { FileSystemNode } from '../types';

export const initialFileSystem: FileSystemNode[] = [
    {
        id: 'app-browser',
        name: 'Navegador Web',
        type: 'app',
        icon: '🌐',
        owner: 'all', // Todos pueden navegar
    },
    {
        id: 'app-terminal',
        name: 'Terminal',
        type: 'app',
        icon: '🐚',
        owner: 'alex', // Solo Alex tiene acceso a la consola
    },
    {
        id: 'folder-guest-public',
        name: 'Manuales_Sistema',
        type: 'folder',
        icon: '📁',
        owner: 'guest', // Solo se ve en la sesión de invitado
        children: [
            {
                id: 'file-notice',
                name: 'AVISO_IMPORTANTE.txt',
                type: 'file',
                icon: '📄',
                content: 'AVISO: Esta es una sesión de invitado. Los archivos locales se borran cada 24h.\n\nAlex: Si lees esto, deja de usar la cuenta de invitado para tus pruebas de red, el log de auditoría está registrando todo.'
            }
        ]
    },
    {
        id: 'folder-docs',
        name: 'Documentos',
        type: 'folder',
        icon: '📁',
        owner: 'alex', 
        isLocked: false,
        children: [
            {
                id: 'file-diary',
                name: 'diario_encriptado.txt',
                type: 'file',
                icon: '📄',
                isLocked: true,
                password: 'azul', 
                content: '12/10: Siento que el coche negro me sigue de nuevo. Si algo me pasa, busquen en la carpeta de la vieja fábrica.'
            },
            {
                id: 'file-contacts',
                name: 'contactos_emergencia.txt',
                type: 'file',
                icon: '📄',
                content: 'Madre: 555-0192\nSocio (J.M.): 555-0348\nAbogado: No contestar.'
            }
        ]
    },
    {
        id: 'folder-images',
        name: 'Fotos',
        type: 'folder',
        icon: '📁',
        owner: 'alex',
        isLocked: false,
        children: [
            {
                id: 'img-clue1',
                name: 'DSC_0089.jpeg',
                type: 'image',
                icon: '🖼️',
                imageUrl: '/assets/clue1.jpeg',
                metadata: {
                    "Formato": "JPEG",
                    "Dimensiones": "4032 x 3024",
                    "Dispositivo": "iPhone 13 Pro",
                    "Fecha": "2026:04:10 14:22:05",
                    "GPS_Lat": "19.432608 N",
                    "GPS_Long": "99.133209 W",
                    "Anotacion": "Ubicación cerca de Plaza de la Constitución"
                }
            },
            {
                id: 'img-clue2',
                name: 'DSC_1050.jpg',
                type: 'image',
                icon: '🖼️',
                imageUrl: '/assets/clue2.jpeg',
                metadata: {
                    "Formato": "jpg",
                    "Fecha": "2026:04-12 23:10:00",
                    "Origen": "WhatsApp_Images",
                    "Pista": "El fondo parece un puerto marítimo"
                }
            }
        ]
    },
    {
        id: 'folder-secret',
        name: 'PROYECTO_COLMENA',
        type: 'folder',
        icon: '📁',
        owner: 'alex',
        isLocked: true,
        password: 'root',
        children: [
            {
                id: 'file-leak',
                name: 'sujetos_fase_1.csv',
                type: 'file',
                icon: '📊',
                content: 'SubjectID, Status, Frequency_Sync\nSub_01, Stable, 444Hz\nSub_02, Brain_Dead, 448Hz\nAlex_R, Compatible, Pending'
            }
        ]
    },
    {
        id: 'file-trash',
        name: 'Papelera',
        type: 'folder',
        icon: '🗑️',
        owner: 'all', 
        isLocked: false,
        children: [
            {
                id: 'file-deleted',
                name: 'recuperame.txt',
                type: 'file',
                icon: '📄',
                content: 'La clave de Alex está oculta en el código fuente de su perfil social. Es un string de 12 caracteres.'
            }
        ]
    }
];
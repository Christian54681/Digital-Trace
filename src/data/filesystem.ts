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
        id: 'folder-images-alex',
        name: 'Fotos 2',
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
        id: 'Fotos',
        name: 'Fotos',
        type: 'folder',
        icon: '📁',
        owner: 'all',
        children: [
            {
                id: 'recuerdos-navidad',
                name: 'Recuerdos_Navidad',
                type: 'folder',
                icon: '📁',
                owner: 'guest',
                children: [
                    {
                        id: 'cdmx3',
                        name: '20200418_001001.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/CALLE3.jpg',
                        metadata: {

                        }
                    },
                    {
                        id: 'cdmx4',
                        name: '20200418_001501.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/CALLE4.jpg',
                        metadata: {

                        }
                    }
                ]
            },
            {
                id: 'nueva-vida',
                name: 'Nueva vida',
                type: 'folder',
                icon: '📁',
                owner: 'guest',
                children: [
                    {
                        id: 'cdmx1',
                        name: '20200418_000001.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/CALLE1.jpg',
                        metadata: {

                        }
                    },
                    {
                        id: 'cdmx2',
                        name: '20200418_200001.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/CALLE2.jpg',
                        metadata: {

                        }
                    },
                ]
            },
            {
                id: 'hogar',
                name: 'Hogar',
                type: 'folder',
                icon: '📁',
                owner: 'guest',
                children: [
                    {
                        id: 'home1',
                        name: '20200418_002001.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/AMIGOS.jpg',
                        metadata: {

                        }
                    },
                    {
                        id: 'home2',
                        name: '20200418_002501.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/CODE.jpg',
                        metadata: {

                        }
                    },
                    {
                        id: 'home3',
                        name: '20200418_003001.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/HABITACION.jpg',
                        metadata: {

                        }
                    },
                    {
                        id: 'img-mom',
                        name: 'Abuelos.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/FAMILIA1.jpg',
                        metadata: {
                            "Fecha": "2025:05:10",
                            "Nota": "Mamá insiste en que vuelva para Navidad. Dice que la casa se siente muy grande."
                        }
                    },
                ]
            }, {
                id: 'pixel',
                name: 'pixel',
                type: 'folder',
                icon: '📁',
                owner: 'guest',
                children: [
                    {
                        id: 'img-pixel',
                        name: 'pixel_durmiendo.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/Alexs_life/PIXEL/PIXEL1.jpg',
                        metadata: {
                            "Fecha": "2026:02:14",
                            "Nota": "Mi único compañero en las noches de guardia."
                        }
                    },
                ]
            },
            {
                id: 'img-friends',
                name: 'amigos.jpg',
                type: 'image',
                icon: '🖼️',
                imageUrl: '/assets/Alexs_life/AMIGOS.jpg',
                metadata: {
                    "Fecha": "2025:05:10",
                    "Nota": "Con mis amigos en el parque. Qué buenos momentos."
                }
            },
            {
                id: 'img-sister',
                name: 'dibujo_sofi.jpg',
                type: 'image',
                icon: '🖼️',
                imageUrl: '/assets/Alexs_life/DIBUJO_LUCIA.jpg',
                metadata: {
                    "Anotación": "Escaneado del dibujo que me envió por correo. 'Alex el superhéroe'."
                }
            },
        ]
    },
    {
        id: 'folder-drafts',
        name: 'Borradores',
        type: 'folder',
        icon: '📁',
        owner: 'guest',
        children: [
            {
                id: 'file-letter',
                name: 'carta_para_mama.txt',
                type: 'file',
                icon: '📄',
                content: 'Hola mamá. Perdón por no llamar. Las cosas en TechCorp se han vuelto complicadas. \n\nNo creo que pueda ir este fin de semana tampoco. Dile a Lucía que no me olvidé de su regalo, solo está... en un lugar seguro. \n\nSi dejo de escribir por un tiempo, no te asustes. Solo recuerda que lo que hago es para que no les falte nada.'
            }
        ]
    },
    {
        id: 'adios',
        name: 'ADIOS',
        type: 'folder',
        icon: '📁',
        owner: 'alex',
        isLocked: true,
        password: 'adios',
        children: [
            {
                id: 'file-final-note',
                name: 'nota_final.txt',
                type: 'file',
                icon: '📄',
                content: 'Si estás leyendo esto, probablemente ya no esté. No puedo arriesgarme a que me encuentren, pero quería dejar esta nota por si acaso. \n\nEl proyecto Colmena es real, y es más grande de lo que imaginé. Si quieres saber la verdad, busca en los archivos de la vieja fábrica al norte de la ciudad. Ahí dejé todo lo que sé sobre el proyecto y mis descubrimientos. \n\nGracias por acompañarme hasta aquí.'
            }
        ]
    },
    {
        id: 'documentos',
        name: 'DOCUMENTOS',
        type: 'folder',
        icon: '📁',
        owner: 'all',
        children: [
            {
                id: 'file-terms',
                name: 'terminos_servicio.txt',
                type: 'file',
                icon: '📄',
                content: 'Términos de Servicio de TechCorp\n\n1. Uso del software bajo tu propio riesgo.\n2. No nos hacemos responsables por daños causados por el uso indebido.\n3. El acceso no autorizado a sistemas es ilegal y será perseguido.'
            },
            {
                id: 'file-privacy',
                name: 'politica_privacidad.txt',
                type: 'file',
                icon: '📄',
                content: 'Política de Privacidad de TechCorp\n\nRecopilamos datos de uso para mejorar nuestros servicios. No compartimos tu información con terceros sin tu consentimiento explícito, excepto cuando la ley lo requiera.'
            },
            {
                id: 'file-readme',
                name: 'README.txt',
                type: 'file',
                icon: '📄',
                content: 'Bienvenido al sistema de archivos de Alex Ramírez. Aquí encontrarás documentos, fotos y aplicaciones relacionadas con su vida y trabajo en TechCorp. Explora con cuidado, algunas carpetas están protegidas por contraseña.'
            },
            {
                id: 'fechas-importantes',
                name: 'fechas_importantes.txt',
                type: 'file',
                icon: '📄',
                content: 'Fechas importantes:\n- Fundación de TechCorp: 2010\n- Inicio del Proyecto Colmena: 2023\n- Último acceso a COLMENA: 2026-04-15\n- Cumpleaños de Alex: 15 de junio\n- Cumpleaños de Mamá: 20 de noviembre\n- Cumpleaños de Lucía: 5 de marzo'
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
    },

    // ==========================
    // NUEVOS DATOS / CAPAS
    // ==========================

    {
        id: 'desktop',
        name: 'Escritorio',
        type: 'folder',
        icon: '🖥️',
        owner: 'all',
        children: [

            {
                id: 'sticky-note',
                name: 'NO_OLVIDAR.txt',
                type: 'file',
                icon: '📄',
                content:
                    `- pagar internet\n- llamar a mamá\n- actualizar servidor\n- comprar comida para Pixel\n\nno volver tarde.`
            },

            {
                id: 'capture1',
                name: 'Captura de pantalla 2026-04-11.png',
                type: 'image',
                icon: '🖼️',
                imageUrl: '/assets/screens/capture_login.png',
                metadata: {
                    "Ventana": "Correo corporativo",
                    "Detalle": "Se alcanza a ver parcialmente una contraseña escrita en una nota amarilla."
                }
            },

            {
                id: 'random-folder',
                name: 'cosas_importantes',
                type: 'folder',
                icon: '📁',
                children: [
                    {
                        id: 'random-folder-2',
                        name: 'IMPORTANTE_AHORA_SI',
                        type: 'folder',
                        icon: '📁',
                        children: [
                            {
                                id: 'empty-final',
                                name: 'final.txt',
                                type: 'file',
                                icon: '📄',
                                content: '...'
                            }
                        ]
                    }
                ]
            },

            {
                id: 'shortcut-oldvpn',
                name: 'VPN.lnk',
                type: 'file',
                icon: '📄',
                content: 'Acceso directo roto.'
            },

            {
                id: 'shopping-list',
                name: 'compras.txt',
                type: 'file',
                icon: '📄',
                content:
                    `- arroz\n- café\n- medicina mamá\n- croquetas Pixel`
            },
            // ==========================
            // PAPELERA EXPANDIDA
            // ==========================

            {
                id: 'trash-expanded',
                name: 'Papelera Antigüa',
                type: 'folder',
                icon: '🗑️',
                owner: 'alex',
                children: [

                    {
                        id: 'deleted-photo',
                        name: 'IMG_8821_DEL.jpg',
                        type: 'image',
                        icon: '🖼️',
                        imageUrl: '/assets/deleted/factory.png',
                        metadata: {
                            "Fecha":
                                "2026:04:14 03:12",
                            "Nota":
                                "La imagen parece tomada rápidamente desde un auto."
                        }
                    },

                    {
                        id: 'deleted-log',
                        name: 'network_dump.log',
                        type: 'file',
                        icon: '📄',
                        content:
                            `connection established...\nremote mirror active...\nsubject sync completed...`
                    },
                    {
                        id: 'deleted-note',
                        name: 'leeme.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `Si encontraste esto es porque todavía no limpian bien los discos.`
                    }
                ]
            },
            {
                id: 'folder-work',
                name: 'Trabajo',
                type: 'folder',
                icon: '📁',
                owner: 'alex',
                children: [
                    {
                        id: 'file-project',
                        name: 'proyecto_colmena.pptx',
                        type: 'file',
                        icon: '📄',
                        content: 'Presentación del Proyecto Colmena\n\n- Objetivo: Sincronización neuronal avanzada\n- Fase 1: Pruebas de compatibilidad\n- Fase 2: Implementación en sujetos humanos\n- Riesgos y consideraciones éticas'
                    }
                ]
            },

            // ==========================
            // BORRADORES PROFUNDOS
            // ==========================

            {
                id: 'drafts-hidden',
                name: 'Borradores Viejos',
                type: 'folder',
                icon: '📁',
                owner: 'alex',
                children: [

                    {
                        id: 'draft1',
                        name: 'renuncia.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `No puedo seguir trabajando aquí.\n\nNo después de lo que vi.`
                    },

                    {
                        id: 'draft2',
                        name: 'NO_ENVIAR.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `Mamá.\n\nPerdón.`
                    },
                    {
                        id: 'draft3',
                        name: 'cosas_que_no_debo_olvidar.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `- apagar ubicación\n- cambiar rutas\n- destruir usb\n- no usar mismo café`
                    },

                    {
                        id: 'draft4',
                        name: 'si_algo_pasa.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `No fue un accidente.`
                    }
                ]
            },
            {
                id: 'notes',
                name: 'Notas',
                type: 'folder',
                icon: '📁',
                owner: 'all',
                children: [
                    {
                        id: 'note1',
                        name: 'idea_para_app.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `Tengo una idea para una app de meditación que se sincronice con tu estado emocional usando la tecnología de Colmena. Podría usar música relajante y ejercicios de respiración personalizados.`
                    },
                    {
                        id: 'note2',
                        name: 'receta_cafe.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `Receta para el café perfecto:\n- 20g de café molido\n- 300ml de agua a 92°C\n- Dejar reposar 4 minutos\n- Disfrutar`
                    },
                    {
                        id: 'note3',
                        name: 'idea_para_app_v2.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `No se porque no quieren si quiera escuchar mi idea, pedi una reunion para mostrar mi proyecto, por alguna razon la rechazaron, estan mas interesados en el dinero que en hacer un bien a la sociedad, los datos deberian usarse para el bien, no para esto...`
                    },
                    {
                        id: 'note4',
                        name: 'Escapar.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `Hay momentos donde solo quieisera escapar. Huir de todo, no soy tan fuerte como crei, aunque asi actue, no es mas que una fachada, me siento un impostor, y a la ves siento que ya no tengo vuelta atras, mi familia me necesita, no puedo dejar a mi madre sola, no despues de lo que a hecho por mi`
                    },
                    {
                        id: 'note5',
                        name: 'idea_para_app_v3.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            ``
                    }
                ]
            }
        ]
    },

    // ==========================
    // DESCARGAS
    // ==========================

    {
        id: 'downloads',
        name: 'Descargas',
        type: 'folder',
        icon: '📁',
        owner: 'all',
        children: [

            {
                id: 'pdf-bank',
                name: 'estado_cuenta_abril.pdf',
                type: 'file',
                icon: '📄',
                content:
                    `SALDO ACTUAL:\n-$42,188 MXN\n\nPago vencido:\nCOLMENA FINANCIERA`
            },

            {
                id: 'resume',
                name: 'CV_FINAL_REAL_ALEX.pdf',
                type: 'file',
                icon: '📄',
                content:
                    `Alex Ramírez\nIngeniería en Sistemas\n\nBecado parcialmente durante universidad.`
            },

            {
                id: 'resume2',
                name: 'CV_FINAL_REAL_ALEX_v2.pdf',
                type: 'file',
                icon: '📄',
                content:
                    `versión más reciente`
            },

            {
                id: 'resume3',
                name: 'CV_BUENO_AHORA_SI.pdf',
                type: 'file',
                icon: '📄',
                content:
                    `versión más reciente de verdad`
            },

            {
                id: 'installer-vpn',
                name: 'vpn_premium_crack.zip',
                type: 'file',
                icon: '📦',
                content:
                    `archivo dañado`
            },

            {
                id: 'movie',
                name: 'joker_final_final.mp4',
                type: 'file',
                icon: '🎬',
                content:
                    `video corrupto`
            },

            {
                id: 'audio-note',
                name: 'audio_0426.mp3',
                type: 'audio',
                icon: '🎵',
                content:
                    `[audio]\nSe escucha tráfico.\nAlex respirando.\nSilencio largo.\n\n"ya no sé qué hacer..."`
            },

            {
                id: 'screens-temp',
                name: 'Screenshot_20260410.png',
                type: 'image',
                icon: '🖼️',
                imageUrl: '/assets/screens/mail_warning.png',
                metadata: {
                    "Ventana": "Correo",
                    "Mensaje":
                        "Notificación de deuda pendiente."
                }
            },

            {
                id: 'taxes',
                name: 'impuestos_2025.xlsx',
                type: 'file',
                icon: '📊',
                content:
                    `ERROR AL ABRIR ARCHIVO`
            },

            {
                id: 'fake-clue',
                name: 'passwords.txt',
                type: 'file',
                icon: '📄',
                content:
                    `Netflix: alex123\nSpotify: pixel2020\nSteam: 12345678`
            },
            // ==========================
            // MÚSICA
            // ==========================

            {
                id: 'music-folder',
                name: 'Música',
                type: 'folder',
                icon: '📁',
                owner: 'all',
                children: [

                    {
                        id: 'playlist',
                        name: 'playlist_noche.txt',
                        type: 'file',
                        icon: '📄',
                        content:
                            `- Space Song\n- After Dark\n- Resonance\n- Snowfall`
                    },

                    {
                        id: 'voice-note',
                        name: 'voz_sofi.mp3',
                        type: 'audio',
                        icon: '🎵',
                        content:
                            `[audio]\n"Sofi: Alex apúrate ya casi empieza la película 😭"`
                    },

                    {
                        id: 'broken-audio',
                        name: 'grabacion_0311.mp3',
                        type: 'audio',
                        icon: '🎵',
                        content:
                            `[audio corrupto]\n...ruido...\n"no digas nombres por teléfono"`
                    }
                ]
            },
        ]
    },

    // ==========================
    // CACHE / TEMP
    // ==========================

    {
        id: 'cache',
        name: '.cache',
        type: 'folder',
        icon: '📁',
        owner: 'alex',
        children: [
            {
                id: 'cache1',
                name: 'session.tmp',
                type: 'file',
                icon: '📄',
                content:
                    `LAST SESSION:\nFAILED LOGIN\nFAILED LOGIN\nFAILED LOGIN`
            },
            {
                id: 'cache2',
                name: 'recover.log',
                type: 'file',
                icon: '📄',
                content:
                    `recovering deleted fragments...\nfragment found:\n"...lucia..."\n"...subject..."\n"...transfer..."`
            },
            {
                id: 'cache3',
                name: 'thumbs.db',
                type: 'file',
                icon: '📄',
                content:
                    `binary data`
            },
            {
                id: 'cache4',
                name: 'browser_autofill.tmp',
                type: 'file',
                icon: '📄',
                content:
                    `saved values:\nmama_elena\npixel\n2010\ncolmena`
            }
        ]
    },
];
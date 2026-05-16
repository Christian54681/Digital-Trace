// src/data/remoteServers.ts
import type { FileSystemNode } from "../types";


// SERVIDOR 1 — CASA DE LA MAMÁ
export const vfs_casa_mama: FileSystemNode[] = [
    // LOGS DE SEGURIDAD
    {
        id: 'cam-logs',
        name: 'logs_seguridad',
        type: 'folder',
        children: [
            {
                id: 'log-cam-1',
                name: 'sensor_movimiento_entrada.txt',
                type: 'file',
                content:
                    '12/04 07:15 - Elena salió (Trabajo)\n' +
                    '12/04 14:30 - Sofi llegó (Escuela)\n' +
                    '12/04 19:40 - Elena llegó\n' +
                    '[!] Alerta: Persona desconocida merodeando a las 23:10.\n' +
                    'Snapshot enviado automáticamente a cache.'
            },
            {
                id: 'log-cam-2',
                name: 'registro_nocturno_03.log',
                type: 'file',
                content:
                    '[03:14 AM] Movimiento detectado en cocina.\n' +
                    '[03:15 AM] Elena abre refrigerador.\n' +
                    '[03:16 AM] Elena permanece inmóvil frente al fregadero durante 02:11.\n' +
                    '[03:18 AM] Audio capturado: llanto leve.\n' +
                    '[03:20 AM] Elena regresa a habitación.'
            },
            {
                id: 'log-mic',
                name: 'transcripcion_sala.tmp',
                type: 'file',
                content:
                    'MAMÁ: Sofi, deja eso, tu hermano dijo que no tocáramos la computadora.\n' +
                    'SOFI: Pero quiero ver si me mandó el video del gato...\n' +
                    'MAMÁ: Está trabajando, hija. Él nos va a sacar de aquí, ya verás.'
            },
            {
                id: 'log-mic-2',
                name: 'audio_fragmentado_17.txt',
                type: 'file',
                content:
                    '[TRANSCRIPCIÓN AUTOMÁTICA]\n\n' +
                    'SOFI: ¿Mamá, Alex ya no vive con nosotros porque somos pobres?\n\n' +
                    '...silencio...\n\n' +
                    'MAMÁ: No digas eso.\n\n' +
                    'SOFI: Entonces por qué siempre trabaja.\n\n' +
                    'MAMÁ: Porque quiere que tengas una vida mejor.\n\n' +
                    'SOFI: Yo prefería cuando veía películas conmigo.'
            },
            {
                id: 'log-door',
                name: 'door_lock_stats.csv',
                type: 'file',
                content:
                    'DATE,TIME,EVENT\n' +
                    '2026-04-01,23:12,FAILED_UNLOCK\n' +
                    '2026-04-02,00:03,FAILED_UNLOCK\n' +
                    '2026-04-02,00:04,FAILED_UNLOCK\n' +
                    '2026-04-02,00:05,ELENA_OPENED_DOOR\n' +
                    '2026-04-02,00:19,DOOR_CLOSED'
            },
            {
                id: 'hidden-metadata',
                name: '.sync_status',
                type: 'file',
                content:
                    'LAST_REMOTE_ACCESS=2026-04-12 03:14:55\n' +
                    'DEVICE=alex_laptop_node\n' +
                    'MICROPHONE_MONITOR=ACTIVE\n' +
                    'AUTO_ARCHIVE=TRUE'
            }
        ]
    },

    // CAPTURAS
    {
        id: 'cam-stills',
        name: 'capturas_pantalla',
        type: 'folder',
        children: [
            {
                id: 'still-1',
                name: 'Sofi_durmiendo.jpg',
                type: 'image',
                imageUrl: '/assets/remote/sofi_sleep.jpg',
                metadata: {
                    "Nota": "Se quedó dormida haciendo la tarea. 02:00 AM.",
                    "Capturado_desde": "alex_remote_monitor",
                    "Estado": "Auto-archivado"
                }
            },
            {
                id: 'still-2',
                name: 'cocina_03_14.jpg',
                type: 'image',
                imageUrl: '/assets/remote/kitchen.jpg',
                metadata: {
                    "Fecha": "2026-04-03 03:14",
                    "Anotación": "Mamá despierta otra vez.",
                    "Zoom_manual": "2.3x"
                }
            },
            {
                id: 'still-3',
                name: 'captura_error.png',
                type: 'image',
                imageUrl: '/assets/remote/error_capture.png',
                metadata: {
                    "Error": "Face detection failed.",
                    "Último_usuario": "alex"
                }
            }
        ]
    },

    // ARCHIVOS PERSONALES
    {
        id: 'private-data',
        name: 'respaldos_locales',
        type: 'folder',
        children: [
            {
                id: 'wifi-pass',
                name: 'wifi_backup.txt',
                type: 'file',
                content:
                    'INFINITUM_2.4\n' +
                    'Password: Sofia_2015'
            },
            {
                id: 'browser-history',
                name: 'historial_mama.txt',
                type: 'file',
                content:
                    'google.com/search?q=como+saber+si+mi+hijo+esta+estresado\n' +
                    'google.com/search?q=deudas+embargo+que+hacer\n' +
                    'youtube.com/watch?v=recetas+económicas\n' +
                    'google.com/search?q=porque+mi+hijo+ya+no+me+llama'
            },
            {
                id: 'draft-msg',
                name: 'mensaje_no_enviado.txt',
                type: 'file',
                content:
                    'Alex.\n\n' +
                    'No sé qué está pasando contigo.\n' +
                    'A veces siento que ya no te conozco.\n\n' +
                    'Sofi se queda dormida esperando tus llamadas.\n\n' +
                    'No necesitas salvarnos tú solo.\n\n' +
                    '- Mamá'
            }
        ]
    }
];


// SERVIDOR 2 — DATA FARM
export const vfs_granja_datos: FileSystemNode[] = [
    // DIRECTORIOS CORPORATIVOS ABURRIDOS
    {
        id: 'corp-finance',
        name: 'FINANZAS_Q2',
        type: 'folder',
        children: [
            {
                id: 'invoice-1',
                name: 'facturacion_puebla_abril.xlsx',
                type: 'file',
                content:
                    'Error de previsualización.\n' +
                    'Archivo generado por SAP_INTERNAL.'
            },
            {
                id: 'invoice-2',
                name: 'debt_restructure_draft.txt',
                type: 'file',
                content:
                    'Pending approval from legal department.\n' +
                    'High-risk clients should be transferred to automated monitoring.'
            },
            {
                id: 'memo-legal',
                name: 'memo_legal_17A.doc',
                type: 'file',
                content:
                    'RECORDATORIO:\n\n' +
                    'Evitar mencionar términos como "vigilancia predictiva" frente a clientes externos.\n' +
                    'Usar "seguimiento conductual automatizado".'
            }
        ]
    },

    // TARGETS
    {
        id: 'targets-dir',
        name: 'TARGETS_ACTIVE',
        type: 'folder',
        children: [
            {
                id: 'csv-puebla-full',
                name: 'sector_92_puebla.csv',
                type: 'file',
                content:
                    'NAME, ID, RISK_LEVEL, DEBT_STATUS\n' +
                    'MARTINEZ_HUGO, 99250, LOW, PAID\n' +
                    'SANCHEZ_FERNANDA, 99251, MEDIUM, PENDING\n' +
                    'GOMEZ_RICARDO, 99252, HIGH, DEFAULT\n' +
                    'VILLALOBOS_ADRIAN, 99253, LOW, PAID\n' +
                    'HERNANDEZ_CLARA, 99254, MEDIUM, RESTRUCTURED\n' +
                    'DIAZ_ROBERTO, 99255, HIGH, LEGAL_ACTION\n' +
                    'MORALES_LUCIA, 99256, LOW, PAID\n' +
                    'ORTEGA_MARCOS, 99257, MEDIUM, PENDING\n' +
                    'CASTILLO_ELENA, 99258, HIGH, CRITICAL_OVERDUE\n' +
                    'PATERSON_JOHN, 99259, LOW, PAID\n' +
                    'VARGAS_VALERIA, 99260, MEDIUM, PENDING\n' +
                    'RIVERA_OSCAR, 99261, HIGH, DEFAULT\n' +
                    'MENDOZA_SARA, 99262, LOW, PAID\n' +
                    'RAMIREZ_ELENA, 99281, HIGH, CRITICAL_OVERDUE\n' + // <-- LA MADRE
                    'AGUILAR_TOMAS, 99264, MEDIUM, RESTRUCTURED\n' +
                    'ORIZABA_PATRICIA, 99265, HIGH, LEGAL_ACTION\n' +
                    'BLANCO_JAVIER, 99266, LOW, PAID\n' +
                    'SOTO_MARINA, 99267, MEDIUM, PENDING\n' +
                    'IBARRA_DANIEL, 99268, HIGH, DEFAULT\n' +
                    'JUAREZ_ESTEBAN, 99269, LOW, PAID\n' +
                    'GARCIA_SOFIA(MIN), 99283, HIGH, PENDING_GUARDIAN_DEBT\n' + // <-- LA HERMANA
                    'REYES_MONTSERRAT, 99271, MEDIUM, RESTRUCTURED\n' +
                    'PEREZ_FELIPE, 99272, HIGH, LEGAL_ACTION\n' +
                    'TREJO_GABRIELA, 99273, LOW, PAID\n' +
                    'FUENTES_ALFREDO, 99274, MEDIUM, PENDING\n' +
                    'CORTES_BEATRIZ, 99275, HIGH, CRITICAL_OVERDUE\n' +
                    'NAVARRO_XIMENA, 99276, LOW, PAID\n' +
                    'CISNEROS_RAUL, 99277, MEDIUM, RESTRUCTURED\n' +
                    'SALAZAR_IGNACIO, 99278, HIGH, DEFAULT\n' +
                    'LARA_MONICA, 99279, LOW, PAID\n' +
                    'VALDEZ_SERGIO, 99280, MEDIUM, PENDING\n' +
                    'QUINTERO_JULIETA, 99284, HIGH, LEGAL_ACTION\n' +
                    'ZAVALA_ARTURO, 99285, LOW, PAID\n' +
                    'LEON_FATIMA, 99286, MEDIUM, PENDING\n' +
                    'MORA_SANTIAGO, 99287, HIGH, DEFAULT\n' +
                    'ESPINOSA_DULCE, 99288, LOW, PAID\n' +
                    'BARRERA_ARMANDO, 99289, MEDIUM, RESTRUCTURED\n' +
                    'PACHECO_CARLA, 99290, HIGH, CRITICAL_OVERDUE'
            },
            {
                id: 'file-action',
                name: 'PROCEDIMIENTO_COBRO.txt',
                type: 'file',
                content:
                    'Si el Sujeto 99281 (Elena R.) no liquida en 48h, proceder con embargo de activos primarios.\n\n' +
                    'Nota:\n' +
                    'El hijo (Alex R.) presenta conocimientos técnicos avanzados.\n' +
                    'Monitorear actividad de red asociada.'
            },
            {
                id: 'behavior-report',
                name: 'behavioral_risk_assessment.pdf',
                type: 'file',
                content:
                    '[AUTO GENERATED]\n\n' +
                    'SUBJECT: RAMIREZ_ALEX\n' +
                    'RISK SCORE: 87\n' +
                    'LIKELIHOOD OF DATA EXTRACTION: HIGH\n' +
                    'EMOTIONAL WEAK POINT DETECTED: FAMILY UNIT'
            },
            {
                id: 'old-archive',
                name: 'migration_nodes_2019.tar',
                type: 'file',
                content:
                    'Archive corrupted.\n' +
                    'Recovery impossible.'
            }
        ]
    },

    // SISTEMAS INTERNOS
    {
        id: 'internal-stuff',
        name: 'SYS_BACKUP_INTERNAL',
        type: 'folder',
        children: [
            {
                id: 'boring-1',
                name: 'cache_nodes.log',
                type: 'file',
                content:
                    '[OK] node_77 synced\n' +
                    '[OK] node_12 synced\n' +
                    '[WARN] unauthorized query detected'
            },
            {
                id: 'boring-2',
                name: 'employee_access_legacy.csv',
                type: 'file',
                content:
                    'ID,ACCESS_LEVEL\n' +
                    '9921,LOW\n' +
                    '9922,MID\n' +
                    '9923,REVOKED'
            },
            {
                id: 'boring-3',
                name: 'temp_migration_keys.txt',
                type: 'file',
                content:
                    'keys deprecated after migration.\n' +
                    'do not use.'
            }
        ]
    },

    // HONEYPOT
    {
        id: 'trap-dir',
        name: 'INTERNAL_SECURITY',
        type: 'folder',
        children: [

            // IMPORTANTE:
            // ESTE ARCHIVO ACTIVA EL HONEYPOT EN LA TERMINAL
            {
                id: 'honey-file',
                name: 'audit_legacy.tar',
                type: 'file',
                content:
                    '[SYSTEM NOTICE]\n\n' +
                    'Unauthorized extraction pattern detected.\n' +
                    'Connection fingerprint stored.\n' +
                    'Geolocation trace initialized.\n\n' +
                    'Please remain where you are.'
            },

            {
                id: 'security-note',
                name: 'internal_notice.txt',
                type: 'file',
                content:
                    'Reminder:\n' +
                    'Most intruders interact with bait files within the first 4 minutes.\n' +
                    'Do not interrupt automated tracing unless escalation reaches RED.'
            }
        ]
    }
];
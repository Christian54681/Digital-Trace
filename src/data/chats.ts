// src/data/chats.ts

export const chats = [
    {
        id: 0,
        name: "Jefe de IT (Sistemas)",
        preview: "Alex, esto ya salió de control.",
        messages: [
            {
                sender: "Jefe",
                text: "Alex, el log indica que entraste al servidor de COLMENA fuera de horario otra vez.",
                time: "11:20 PM",
                date: "02 Mar"
            },
            {
                sender: "Alex",
                text: "Había procesos colgados. Solo estaba revisando.",
                time: "11:45 PM",
                date: "02 Mar"
            },
            {
                sender: "Jefe",
                text: "No uses el token de respaldo sin autorización. La auditoría ya lo notó.",
                time: "08:00 AM",
                date: "03 Mar"
            },
            {
                sender: "Alex",
                text: "Entendido.",
                time: "08:02 AM",
                date: "03 Mar"
            },
            {
                sender: "Jefe",
                text: "¿Por qué descargaste snapshots completos de usuarios?",
                time: "10:15 AM",
                date: "12 Mar"
            },
            {
                sender: "Alex",
                text: "Necesitaba comparar inconsistencias.",
                time: "10:30 AM",
                date: "12 Mar"
            },
            {
                sender: "Jefe",
                text: "Eso no responde mi pregunta.",
                time: "10:31 AM",
                date: "12 Mar"
            },
            {
                sender: "Jefe",
                text: "Alex, RRHH dice que preguntaste por convenios financieros y perfiles familiares. ¿Qué demonios buscas?",
                time: "01:10 PM",
                date: "13 Mar"
            },

            // ⚠️ POSIBLE PISTA IMPORTANTE
            {
                sender: "Alex",
                text: "Solo quería confirmar si las bases históricas siguen usando el mismo formato de indexación.",
                time: "01:22 PM",
                date: "13 Mar"
            },

            {
                sender: "Jefe",
                text: "Deja de hacer preguntas raras. Y deja de conectarte desde casa.",
                time: "01:25 PM",
                date: "13 Mar"
            },

            {
                sender: "Jefe",
                text: "Alex, no apareciste hoy. Seguridad está preguntando por ti.",
                time: "04:00 PM",
                date: "Hoy"
            }
        ]
    },

    {
        id: 1,
        name: "Desconocido",
        preview: "No abras el archivo desde la oficina.",
        messages: [
            {
                sender: "Otro",
                text: "Tengo los archivos que pediste.",
                time: "01:00 AM",
                date: "10 Mar"
            },

            // ⚠️ PISTA FALSA / MEDIA VERDAD
            {
                sender: "Otro",
                text: "La contraseña sigue siendo el año de fundación + el nombre del gato, ¿cierto?",
                time: "01:01 AM",
                date: "10 Mar"
            },

            {
                sender: "Alex",
                text: "No escribas eso aquí.",
                time: "01:03 AM",
                date: "10 Mar"
            },

            {
                sender: "Otro",
                text: "Entonces deja de reutilizar cosas personales.",
                time: "01:03 AM",
                date: "10 Mar"
            },

            {
                sender: "Alex",
                text: "Borra este chat.",
                time: "01:05 AM",
                date: "10 Mar"
            },

            {
                sender: "Otro",
                text: "No entiendo por qué sigues haciendo esto solo.",
                time: "03:10 AM",
                date: "14 Mar"
            },

            {
                sender: "Alex",
                text: "Porque si alguien más lo ve, ellos también están muertos.",
                time: "03:12 AM",
                date: "14 Mar"
            },

            {
                sender: "Otro",
                text: "No hables así.",
                time: "03:13 AM",
                date: "14 Mar"
            },

            {
                sender: "Otro",
                text: "Escúchame bien. Limpia el rastro y desaparece.",
                time: "03:16 AM",
                date: "14 Mar"
            }
        ]
    },

    {
        id: 2,
        name: "Marta IT",
        preview: "Ya no sé si estás paranoico o asustado.",
        messages: [
            {
                sender: "Marta",
                text: "¿Viste la nota pegada en el monitor del laboratorio?",
                time: "09:00 AM",
                date: "05 Mar"
            },
            {
                sender: "Alex",
                text: "Sí.",
                time: "09:15 AM",
                date: "05 Mar"
            },
            {
                sender: "Marta",
                text: "Solo decía 'Cuidado con Alex'. ¿Qué rayos hiciste?",
                time: "09:17 AM",
                date: "05 Mar"
            },
            {
                sender: "Alex",
                text: "Nada.",
                time: "09:20 AM",
                date: "05 Mar"
            },
            {
                sender: "Marta",
                text: "Te conozco desde la universidad. Cuando dices 'nada' siempre significa algo.",
                time: "09:21 AM",
                date: "05 Mar"
            },

            {
                sender: "Marta",
                text: "Oye... ¿estás durmiendo?",
                time: "11:50 PM",
                date: "11 Mar"
            },

            {
                sender: "Alex",
                text: "No mucho.",
                time: "12:03 AM",
                date: "12 Mar"
            },

            {
                sender: "Marta",
                text: "Te ves horrible últimamente.",
                time: "12:05 AM",
                date: "12 Mar"
            },

            {
                sender: "Alex",
                text: "Gracias 👍",
                time: "12:06 AM",
                date: "12 Mar"
            },

            {
                sender: "Marta",
                text: "Sabes que me preocupo por ti, idiota.",
                time: "12:06 AM",
                date: "12 Mar"
            },

            {
                sender: "Marta",
                text: "Alex... ¿qué encontraste realmente?",
                time: "02:10 PM",
                date: "13 Mar"
            },

            {
                sender: "Alex",
                text: "¿Alguna vez te has preguntado por qué la empresa sabe tanto de la gente?",
                time: "02:18 PM",
                date: "13 Mar"
            },

            {
                sender: "Marta",
                text: "Trabajamos con datos. Es normal.",
                time: "02:19 PM",
                date: "13 Mar"
            },

            {
                sender: "Alex",
                text: "No es normal saber cuándo alguien está desesperado.",
                time: "02:20 PM",
                date: "13 Mar"
            },

            {
                sender: "Marta",
                text: "Alex, me estás asustando.",
                time: "02:21 PM",
                date: "13 Mar"
            },

            // ⚠️ PISTA IMPORTANTE
            {
                sender: "Alex",
                text: "Busca los perfiles marcados como 'dependencia emocional familiar'.",
                time: "02:25 PM",
                date: "13 Mar"
            },

            {
                sender: "Marta",
                text: "¿Qué significa eso?",
                time: "02:26 PM",
                date: "13 Mar"
            },

            {
                sender: "Alex",
                text: "Ojalá no lo hubiera descubierto.",
                time: "02:28 PM",
                date: "13 Mar"
            },

            {
                sender: "Marta",
                text: "Oye... ¿por qué me bloqueaste?",
                time: "06:00 PM",
                date: "Ayer"
            },

            {
                sender: "Marta",
                text: "Alex?",
                time: "11:40 PM",
                date: "Hoy"
            }
        ]
    },

    {
        id: 3,
        name: "Mamá",
        preview: "Por favor llámame cuando puedas.",
        messages: [
            {
                sender: "Mamá",
                text: "Hola hijo, ¿cómo estás?",
                time: "12:00 PM",
                date: "01 Mar"
            },

            {
                sender: "Alex",
                text: "Todo bien ma. Mucho trabajo.",
                time: "04:30 PM",
                date: "01 Mar"
            },

            {
                sender: "Mamá",
                text: "Recuerda comer bien.",
                time: "08:00 PM",
                date: "01 Mar"
            },

            {
                sender: "Mamá",
                text: "Sofi preguntó cuándo vas a venir.",
                time: "08:01 PM",
                date: "01 Mar"
            },

            {
                sender: "Alex",
                text: "Cuando me den vacaciones.",
                time: "08:10 PM",
                date: "01 Mar"
            },

            {
                sender: "Mamá",
                text: "No trabajes tanto, hijo.",
                time: "08:11 PM",
                date: "01 Mar"
            },

            {
                sender: "Mamá",
                text: "Llegó el recibo de la luz y todavía falta pagar una parte de lo de la escuela.",
                time: "10:00 AM",
                date: "10 Mar"
            },

            {
                sender: "Alex",
                text: "Mañana hago el depósito.",
                time: "11:50 PM",
                date: "11 Mar"
            },

            {
                sender: "Mamá",
                text: "No te preocupes si no puedes.",
                time: "11:52 PM",
                date: "11 Mar"
            },

            {
                sender: "Alex",
                text: "Sí puedo.",
                time: "11:53 PM",
                date: "11 Mar"
            },

            {
                sender: "Mamá",
                text: "Alex... quería decirte algo pero mejor luego.",
                time: "07:10 PM",
                date: "12 Mar"
            },

            {
                sender: "Alex",
                text: "¿Qué pasó?",
                time: "07:11 PM",
                date: "12 Mar"
            },

            {
                sender: "Mamá",
                text: "Nada hijo. Cosas de adultos.",
                time: "07:13 PM",
                date: "12 Mar"
            },

            // ⚠️ PISTA IMPORTANTE
            {
                sender: "Mamá",
                text: "¿Todavía trabajas con la empresa que ayudó con lo de la universidad?",
                time: "07:15 PM",
                date: "12 Mar"
            },

            {
                sender: "Alex",
                text: "Sí... ¿por qué?",
                time: "07:16 PM",
                date: "12 Mar"
            },

            {
                sender: "Mamá",
                text: "Nada. Solo preguntaba.",
                time: "07:18 PM",
                date: "12 Mar"
            },

            {
                sender: "Mamá",
                text: "Sofi hizo un dibujo tuyo en la escuela. Dice que eres un héroe de computadoras.",
                time: "03:00 PM",
                date: "15 Mar"
            },

            {
                sender: "Alex",
                text: "Dile que no diga eso.",
                time: "03:14 PM",
                date: "15 Mar"
            },

            {
                sender: "Mamá",
                text: "¿Por qué hablas así últimamente?",
                time: "03:15 PM",
                date: "15 Mar"
            },

            {
                sender: "Mamá",
                text: "Alex... ¿estás bien?",
                time: "09:00 AM",
                date: "Ayer"
            },

            {
                sender: "Mamá",
                text: "No has contestado en días.",
                time: "09:01 AM",
                date: "Ayer"
            },

            {
                sender: "Mamá",
                text: "Por favor llámame aunque sea un minuto.",
                time: "11:00 PM",
                date: "Hoy"
            }
        ]
    },

    {
        id: 4,
        name: "Sofi 💜",
        preview: "Te mandé el dibujooo",
        messages: [
            {
                sender: "Sofi",
                text: "Alex miraaa",
                time: "05:10 PM",
                date: "09 Mar"
            },

            {
                sender: "Sofi",
                text: "[Imagen enviada]",
                time: "05:10 PM",
                date: "09 Mar"
            },

            {
                sender: "Alex",
                text: "Qué bonito 😭",
                time: "05:14 PM",
                date: "09 Mar"
            },

            {
                sender: "Sofi",
                text: "Mamá dijo que casi nunca duermes",
                time: "05:15 PM",
                date: "09 Mar"
            },

            {
                sender: "Alex",
                text: "Tu mamá exagera.",
                time: "05:16 PM",
                date: "09 Mar"
            },

            {
                sender: "Sofi",
                text: "¿Es cierto que trabajas con hackers?",
                time: "05:18 PM",
                date: "09 Mar"
            },

            {
                sender: "Alex",
                text: "No exactamente.",
                time: "05:20 PM",
                date: "09 Mar"
            },

            {
                sender: "Sofi",
                text: "Entonces por qué tapas la cámara de la laptop 😭",
                time: "05:21 PM",
                date: "09 Mar"
            },

            {
                sender: "Alex",
                text: "Porque soy guapo.",
                time: "05:21 PM",
                date: "09 Mar"
            },

            {
                sender: "Sofi",
                text: "idiota JAJAJA",
                time: "05:22 PM",
                date: "09 Mar"
            },

            // ⚠️ MUY HUMANO / INCÓMODO
            {
                sender: "Sofi",
                text: "A veces siento raro cuando subo fotos y tú me dices que las borre.",
                time: "11:40 PM",
                date: "13 Mar"
            },

            {
                sender: "Alex",
                text: "Solo quiero que tengas cuidado.",
                time: "11:44 PM",
                date: "13 Mar"
            },

            {
                sender: "Sofi",
                text: "Pero tú sí me ves feliz en ellas, ¿no?",
                time: "11:45 PM",
                date: "13 Mar"
            },

            {
                sender: "Alex",
                text: "...sí.",
                time: "11:47 PM",
                date: "13 Mar"
            }
        ]
    }
];
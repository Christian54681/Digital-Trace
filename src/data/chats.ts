// src/data/chats.ts

export const chats = [
    {
        id: 0,
        name: "Jefe de IT (Sistemas)",
        preview: "Alex, esto es una falta grave...",
        messages: [
            { sender: "Jefe", text: "Alex, el log indica que entraste al servidor de 'COLMENA' fuera de horario.", time: "11:20 PM", date: "02 Mar" },
            { sender: "Alex", text: "Estaba terminando unos parches de seguridad, nada raro.", time: "11:45 PM", date: "02 Mar" },
            { sender: "Jefe", text: "No me mientas. Si vuelves a usar el token de respaldo sin autorización, estás fuera.", time: "08:00 AM", date: "03 Mar" },
            { sender: "Jefe", text: "La auditoría interna está preguntando por qué faltan paquetes de datos en la ruta sur. ¿Sabes algo?", time: "10:15 AM", date: "12 Mar" },
            { sender: "Alex", text: "Debe ser un error de indexación. Lo reviso luego.", time: "02:30 PM", date: "12 Mar" },
            { sender: "Jefe", text: "Alex, no viniste a la oficina hoy. Recursos Humanos dice que no contestas el teléfono. Esto es una falta grave.", time: "04:00 PM", date: "Hoy" }
        ]
    },
    {
        id: 1,
        name: "Desconocido",
        preview: "Tengo los archivos que pediste.",
        messages: [
            { sender: "Otro", text: "Tengo los archivos. Están en el archivo .zip del escritorio del PC de la oficina.", time: "01:00 AM", date: "10 Mar" },
            { sender: "Otro", text: "La contraseña del zip es el año en que se fundó la empresa más el nombre de tu gato.", time: "01:01 AM", date: "10 Mar" },
            { sender: "Alex", text: "Borra este chat en cuanto lo leas.", time: "01:05 AM", date: "10 Mar" },
            { sender: "Otro", text: "¿Ya terminaste el trabajo? El cliente se está impacientando. Dicen que si te echas atrás ahora, ya saben dónde encontrarte.", time: "03:15 AM", date: "14 Mar" },
            { sender: "Otro", text: "No juegues con esta gente, Alex. Limpia el rastro y desaparece.", time: "03:16 AM", date: "14 Mar" }
        ]
    },
    {
        id: 2,
        name: "Marta IT",
        preview: "¿Viste la nota en el monitor del lab?",
        messages: [
            { sender: "Marta", text: "¿Viste la nota pegada en el monitor del laboratorio?", time: "09:00 AM", date: "05 Mar" },
            { sender: "Alex", text: "Sí, la vi. No tengo ni idea de quién pudo haberla puesto.", time: "09:15 AM", date: "05 Mar" },
            { sender: "Marta", text: "Es raro, ¿no? Solo dice 'Cuidado con Alex'.", time: "09:20 AM", date: "05 Mar" },
            { sender: "Marta", text: "Alex, escuché al Jefe hablar con seguridad sobre ti. Me preguntaron si habías estado actuando extraño.", time: "11:00 AM", date: "13 Mar" },
            { sender: "Marta", text: "Dime qué está pasando. Somos amigos, ¿no?", time: "01:45 PM", date: "13 Mar" },
            { sender: "Marta", text: "Oye... ¿por qué me bloqueaste en Facebook? Solo trato de ayudar.", time: "06:00 PM", date: "Ayer" }
        ]
    },
    {
        id: 3,
        name: "Mamá",
        preview: "Hijo, tu hermana te extraña...",
        messages: [
            { sender: "Mamá", text: "Hola Alex, ¿cómo va tu día?", time: "12:00 PM", date: "01 Mar" },
            { sender: "Alex", text: "Hola mamá, todo bien. Solo un poco ocupado con el trabajo.", time: "04:30 PM", date: "01 Mar" },
            { sender: "Mamá", text: "Recuerda comer algo y descansar un poco, ¿vale?", time: "08:00 PM", date: "01 Mar" },
            { sender: "Mamá", text: "Hijo, llegó el recibo de la luz. Sofi necesita zapatos nuevos para la escuela. ¿Crees que puedas enviar algo esta quincena?", time: "10:00 AM", date: "10 Mar" },
            { sender: "Alex", text: "Mañana hago el depósito sin falta. Perdón por no llamar.", time: "11:50 PM", date: "11 Mar" },
            { sender: "Mamá", text: "Sofi hizo un dibujo tuyo en la escuela. Dice que eres su superhéroe en la ciudad. Te extrañamos mucho.", time: "03:00 PM", date: "15 Mar" },
            { sender: "Mamá", text: "Alex... ¿estás bien? No has contestado mis mensajes en tres días. Me tienes preocupada.", time: "09:00 AM", date: "Ayer" },
            { sender: "Mamá", text: "Por favor, llámame en cuanto puedas. Te quiero.", time: "11:00 PM", date: "Hoy" }
        ]
    }
];
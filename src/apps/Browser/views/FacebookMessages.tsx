// src/apps/Browser/views/FacebookMessages.tsx
import React, { useState } from 'react';
import FacebookHeader from './FacebookHeader';
import { chats } from '../../../data/chats';

interface Props {
    onNavigateMessages: () => void;
    onNavigateProfile: (id: string) => void;
    onNavigateHome: () => void;
}

const FacebookMessages: React.FC<Props> = ({ onNavigateMessages, onNavigateProfile, onNavigateHome }) => {
    const [selectedChat, setSelectedChat] = useState(0);

    return (
        // Quitamos el "flex flex-col" duplicado y nos aseguramos que el padre sea h-full
        <div className="flex flex-col h-full bg-white text-black font-sans">

            {/* Header: Ahora sin h-full ni overflow propio */}
            <FacebookHeader
                onNavigateMessages={onNavigateMessages}
                onNavigateProfile={onNavigateProfile}
                onNavigateHome={onNavigateHome}
            />

            {/* Contenedor de Chats: Ocupa el resto del alto (flex-1) */}
            <div className="flex-1 flex overflow-hidden">

                {/* Lista de Chats */}
                <div className="w-1/3 border-r border-gray-200 flex flex-col">
                    <div className="p-4 border-b border-gray-200 font-bold text-xl bg-white">Chats</div>
                    <div className="flex-1 overflow-y-auto">
                        {chats.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => setSelectedChat(chat.id)}
                                className={`p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors ${selectedChat === chat.id ? 'bg-blue-50' : ''}`}
                            >
                                <p className="font-bold text-sm">{chat.name}</p>
                                <p className="text-xs text-gray-500 truncate">{chat.preview}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ventana de Chat Abierta */}
                <div className="flex-1 flex flex-col bg-gray-50">
                    {/* Header del chat seleccionado */}
                    <div className="p-4 bg-white border-b border-gray-200 font-bold shadow-sm z-10">
                        {chats[selectedChat].name}
                    </div>

                    {/* Burbujas de mensajes */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f0f2f5]">
                        {chats[selectedChat].messages.map((m) => (
                            <div className={`flex ${m.sender === 'Alex' ? 'justify-end' : 'justify-start'}`}>
                                <div className="flex flex-col max-w-[70%]">
                                    <div className={`p-3 rounded-2xl text-[14px] shadow-sm ${m.sender === 'Alex'
                                            ? 'bg-[#0084ff] text-white rounded-br-none'
                                            : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                                        }`}>
                                        {m.text}
                                    </div>
                                    {/* Pequeño indicador de hora debajo de la burbuja */}
                                    <span className={`text-[10px] mt-1 text-gray-500 ${m.sender === 'Alex' ? 'text-right' : 'text-left'}`}>
                                        {m.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input de respuesta falso */}
                    <div className="p-4 bg-white border-t border-gray-200">
                        <input
                            disabled
                            placeholder="No puedes responder a esta conversación"
                            className="w-full p-2.5 bg-gray-100 rounded-full text-sm italic text-gray-400 outline-none border border-gray-200"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacebookMessages;
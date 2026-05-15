// src/apps/Browser/views/FacebookProfile.tsx
import React from 'react';
import { socialResults } from '../../../data/webData';
import FacebookHeader from './FacebookHeader';
import { Earth, ThumbsUpIcon, MessageSquareMore, CakeIcon} from 'lucide-react';

interface Props {
    profileId: string;
    onNavigateMessages: () => void;
    onNavigateProfile: (id: string) => void;
    onNavigateHome: () => void;

}

const FacebookProfile: React.FC<Props> = ({ profileId, onNavigateMessages, onNavigateProfile, onNavigateHome }) => {
    const user = socialResults.find(p => p.id === profileId);

    if (!user) return <div className="p-10 text-black">Usuario no encontrado.</div>;

    return (
        <div className="h-full bg-white overflow-y-auto font-sans text-black animate-in fade-in">
            {/* Header / Portada */}
            <FacebookHeader
                onNavigateMessages={onNavigateMessages}
                onNavigateProfile={onNavigateProfile}
                onNavigateHome={onNavigateHome}
            />

            <div className="h-40 bg-gradient-to-r from-gray-200 to-gray-300 relative">
                <div className="absolute -bottom-12 left-8">
                    <div className="w-32 h-32 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                        {user.name[0]}
                    </div>
                </div>
            </div>

            {/* Info Principal */}
            <div className="pt-16 px-8 pb-4 border-b border-gray-100">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    {user.name}
                    {user.id === 'alex-Ramirez' && <span className="text-blue-500 text-xl">✔</span>}
                </h2>
                <p className="text-gray-500 font-medium">{user.location}</p>
                <div className="flex gap-2 mt-4">
                    <button className="bg-[#1877f2] text-white px-4 py-2 rounded-lg font-bold text-sm">Amigo</button>
                    <button className="bg-gray-200 px-4 py-2 rounded-lg font-bold text-sm">Mensaje</button>
                </div>
            </div>

            {/* Contenido: Biografía y Pistas */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold mb-2">Información</h3>
                        <p className="text-sm text-gray-600 mb-2 flex gap-1"><CakeIcon size={22}/> Nacimiento: {user.nacimiento}</p>
                        <p className="text-sm text-gray-600 flex gap-1"><img src="assets/home.png" alt="home" className='h-5 flex flex-row' /> Vive en {user.location}</p>
                        <p className="text-sm italic mt-4 text-blue-600">"{user.bio}"</p>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                    {/* Muro del usuario */}
                    {/* Columna Derecha: Muro del usuario */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="font-bold text-gray-700 ml-1">Publicaciones</h3>

                        {user.posts && user.posts.length > 0 ? (
                            // Si el usuario tiene posts, los recorremos
                            user.posts.map((post, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                            {user.name[0]}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">{user.name}</p>
                                            <p className="text-[10px] text-gray-400">Hace {index + 1}d • <Earth size={12} /></p>
                                        </div>
                                    </div>
                                    <p className="text-[15px] text-gray-800 leading-relaxed">
                                        {post}
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-gray-50 flex gap-4 text-gray-400 text-xs">
                                        <span className='flex items-center gap-1'><ThumbsUpIcon size={16} /> Me gusta</span>
                                        <span className='flex items-center gap-1'><MessageSquareMore size={16} /> Comentar</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Si no tiene posts (o si quieres bloquear a Alex por seguridad)
                            <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                                <span className="text-4xl mb-2">🔒</span>
                                <p className="italic text-gray-400 text-sm">
                                    {user.id === 'alex-ramirez'
                                        ? "Las publicaciones de este perfil han sido archivadas o son privadas."
                                        : "Este usuario no ha publicado nada aún."}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacebookProfile;
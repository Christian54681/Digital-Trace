// src/apps/Browser/views/FacebookFeed.tsx
import FacebookFriends from './FacebookFriends';
import { posts } from '../../../data/posts';
import FacebookHeader from './FacebookHeader';


interface FacebookFeedProps {
    onNavigateMessages: () => void;
    onNavigateProfile: (id: string) => void;
    onNavigateHome: () => void;
}

const FacebookFeed: React.FC<FacebookFeedProps> = ({ onNavigateMessages, onNavigateProfile, onNavigateHome }) => {


    return (
        <div className="h-full bg-[#f0f2f5] flex flex-col font-sans text-black">
            {/* Header del Feed con Buscador */}
            <FacebookHeader 
                onNavigateMessages={onNavigateMessages}
                onNavigateProfile={onNavigateProfile}
                onNavigateHome={onNavigateHome}
            />

            {/* Layout Principal: Feed + Sidebar */}
            <div className="flex-1 flex overflow-hidden">

                {/* Columna Central: Feed */}
                <div className="flex-1 overflow-y-auto pt-4 px-2">
                    <div className="max-w-[500px] mx-auto">
                        {/* Historias */}
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                            <div className="w-28 h-44 bg-gray-300 rounded-xl border border-gray-200 flex-shrink-0 shadow-sm hover:opacity-90 cursor-pointer transition-opacity" />
                            <div className="w-28 h-44 bg-gray-200 rounded-xl border border-gray-200 flex-shrink-0 shadow-sm" />
                            <div className="w-28 h-44 bg-gray-200 rounded-xl border border-gray-200 flex-shrink-0 shadow-sm" />
                        </div>

                        {/* Posts */}
                        {posts.map((post, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4 overflow-hidden animate-in slide-in-from-bottom-2">
                                <div className="p-4 pb-2">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border border-blue-100 shadow-sm" />
                                        <div>
                                            <p className="font-bold text-sm hover:underline cursor-pointer">{post.user}</p>
                                            <p className="text-[11px] text-gray-500 font-medium">{post.time} • 🌎</p>
                                        </div>
                                    </div>
                                    <p className="text-[14px] leading-snug text-gray-800 mb-4">{post.content}</p>
                                </div>

                                <div className="px-4 py-1 border-t border-gray-100 flex justify-around text-gray-500 text-sm font-semibold">
                                    <button className="flex-1 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center gap-2">
                                        <span>👍</span> Me gusta
                                    </button>
                                    <button className="flex-1 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center gap-2">
                                        <span>💬</span> Comentar
                                    </button>
                                </div>
                            </div>
                        ))}
                        <p className="text-center py-10 text-gray-400 text-xs italic">Has visto todas las publicaciones.</p>
                    </div>
                </div>

                {/* Columna Derecha: Amigos (Solo visible en pantallas amplias) */}
                <div className="hidden lg:block w-[300px] p-4 overflow-y-auto border-l border-gray-200 bg-white/50">
                    <FacebookFriends onSelectFriend={(id) => {
                        console.log("Investigando amigo ID:", id);
                        // Aquí podrías disparar otra lógica de navegación
                    }} />

                    <div className="mt-8 p-4 border-t border-gray-200">
                        <p className="text-[10px] text-gray-400">Privacidad · Condiciones · Publicidad · AdChoices · Cookies · Meta © 2026</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FacebookFeed;
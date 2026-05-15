// src/apps/Browser/views/FacebookFeed.tsx

import React, { useState } from 'react';
import FacebookFriends from './FacebookFriends';
import { posts, stories } from '../../../data/posts';
import FacebookHeader from './FacebookHeader';

import {
    ThumbsUpIcon,
    MessageSquareMore,
    Share2Icon,
    Earth,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

interface FacebookFeedProps {
    onNavigateMessages: () => void;
    onNavigateProfile: (id: string) => void;
    onNavigateHome: () => void;
}

const FacebookFeed: React.FC<FacebookFeedProps> = ({
    onNavigateMessages,
    onNavigateProfile,
    onNavigateHome
}) => {

    const [expandedComments, setExpandedComments] = useState<number[]>([]);

    const toggleComments = (index: number) => {
        setExpandedComments((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="h-full bg-[#f0f2f5] flex flex-col font-sans text-black">

            {/* HEADER */}
            <FacebookHeader
                onNavigateMessages={onNavigateMessages}
                onNavigateProfile={onNavigateProfile}
                onNavigateHome={onNavigateHome}
            />

            {/* CONTENIDO */}
            <div className="flex-1 flex overflow-hidden">

                {/* FEED CENTRAL */}
                <div className="flex-1 overflow-y-auto pt-4 px-2">

                    <div className="max-w-[500px] mx-auto">

                        {/* HISTORIAS */}
                        <div className="flex gap-3 mb-5 overflow-x-auto pb-2 scrollbar-hide">

                            {stories.map((story, index) => (
                                <div
                                    key={index}
                                    className="relative w-28 h-44 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-200 cursor-pointer group"
                                >

                                    {/* Fondo */}
                                    <div
                                        className={`absolute inset-0 ${story.bg}`}
                                    />

                                    {/* Overlay oscuro */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                    {/* Avatar */}
                                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-blue-500 bg-white flex items-center justify-center text-xs font-bold shadow-md overflow-hidden">
                                        {story.avatar}
                                    </div>

                                    {/* Nombre */}
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <p className="text-white text-xs font-semibold leading-tight drop-shadow">
                                            {story.user}
                                        </p>
                                    </div>

                                    {/* Indicador online */}
                                    {story.online && (
                                        <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-green-400 border border-white shadow" />
                                    )}
                                </div>
                            ))}

                        </div>

                        {/* POSTS */}
                        {posts.map((post, i) => {

                            const commentsExpanded = expandedComments.includes(i);

                            return (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4 overflow-hidden animate-in slide-in-from-bottom-2"
                                >

                                    {/* HEADER POST */}
                                    <div className="p-4 pb-2">

                                        <div className="flex items-center gap-2 mb-3">

                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border border-blue-100 shadow-sm flex items-center justify-center text-white text-xs font-bold">
                                                {post.user.charAt(0)}
                                            </div>

                                            <div>
                                                <p className="font-bold text-sm hover:underline cursor-pointer">
                                                    {post.user}
                                                </p>

                                                <div className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                                                    <span>{post.time}</span>
                                                    <span>•</span>
                                                    <Earth size={12} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* CONTENIDO */}
                                        <p className="text-[14px] leading-snug text-gray-800 whitespace-pre-line mb-4">
                                            {post.content}
                                        </p>

                                    </div>

                                    {/* ACCIONES */}
                                    <div className="px-4 py-1 border-t border-gray-100 flex justify-around text-gray-500 text-sm font-semibold">

                                        {/* Likes */}
                                        <button className="flex-1 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center gap-2">
                                            <ThumbsUpIcon size={16} />
                                            <span>{post.likes}</span>
                                        </button>

                                        {/* Comentarios */}
                                        <button
                                            onClick={() => toggleComments(i)}
                                            className="flex-1 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MessageSquareMore size={16} />

                                            <span>
                                                {post.comments.length}
                                            </span>

                                            {commentsExpanded
                                                ? <ChevronUp size={14} />
                                                : <ChevronDown size={14} />
                                            }
                                        </button>

                                        {/* Compartir */}
                                        <button className="flex-1 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center gap-2">
                                            <Share2Icon size={16} />
                                            <span>Compartir</span>
                                        </button>

                                    </div>

                                    {/* COMENTARIOS */}
                                    {commentsExpanded && (
                                        <div className="border-t border-gray-100 bg-[#f7f8fa] px-4 py-3 animate-in fade-in duration-200">

                                            {post.comments.length === 0 ? (
                                                <p className="text-xs text-gray-400 italic">
                                                    No hay comentarios.
                                                </p>
                                            ) : (

                                                <div className="space-y-3">

                                                    {post.comments.map((comment, commentIndex) => (

                                                        <div
                                                            key={commentIndex}
                                                            className="flex gap-2"
                                                        >

                                                            {/* Avatar */}
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0">
                                                                {comment.user.charAt(0)}
                                                            </div>

                                                            {/* Burbuja */}
                                                            <div className="bg-white rounded-2xl px-3 py-2 shadow-sm border border-gray-100 max-w-full">

                                                                <p className="font-semibold text-[12px] text-gray-800 mb-1">
                                                                    {comment.user}
                                                                </p>

                                                                <p className="text-[13px] text-gray-700 leading-snug whitespace-pre-line">
                                                                    {comment.content}
                                                                </p>

                                                            </div>

                                                        </div>

                                                    ))}

                                                </div>

                                            )}
                                        </div>
                                    )}

                                </div>
                            );
                        })}

                        {/* FOOTER */}
                        <p className="text-center py-10 text-gray-400 text-xs italic">
                            Has visto todas las publicaciones.
                        </p>

                    </div>
                </div>

                {/* SIDEBAR DERECHA */}
                <div className="hidden lg:block w-[250px] p-4 overflow-y-auto border-l border-gray-200 bg-white/50">

                    <FacebookFriends
                        onSelectFriend={(id) => {
                            console.log("Investigando amigo ID:", id);
                        }}
                    />

                    <div className="mt-8 p-4 border-t border-gray-200">
                        <p className="text-[10px] text-gray-400">
                            Privacidad · Condiciones · Publicidad · AdChoices · Cookies · Meta © 2026
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FacebookFeed;
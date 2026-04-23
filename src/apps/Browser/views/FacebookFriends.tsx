// src/apps/Browser/views/FacebookFriends.tsx
import React from 'react';
import { socialResults } from '../../../data/webData';

interface Props {
    onSelectFriend: (id: string) => void;
}

const FacebookFriends: React.FC<Props> = ({ onSelectFriend }) => {
    const friends = socialResults.filter(p => p.isFriend);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-bold text-gray-500 text-xs uppercase mb-4 tracking-wider">Contactos</h3>
            <div className="space-y-4">
                {friends.map(friend => (
                    <div 
                        key={friend.id} 
                        onClick={() => onSelectFriend(friend.id)}
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors group"
                    >
                        <div className="relative">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">
                                {friend.name[0]}
                            </div>
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{friend.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacebookFriends;
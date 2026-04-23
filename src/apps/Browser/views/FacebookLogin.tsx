// src/apps/Browser/views/FacebookLogin.tsx
import React, { useState } from 'react';

const FacebookLogin: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);

    const VALID_USER = "pingu_dls"; // El jugador debe encontrar esto
    const VALID_PASS = "0G8V/+t\\0l2n";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user === VALID_USER && pass === VALID_PASS) {
            onLoginSuccess();
        } else {
            setError(true);
        }
    };

    return (
        <div className="h-full bg-[#f0f2f5] flex flex-col items-center pt-12 font-sans">
            <h1 className="text-[#1877f2] text-5xl font-black mb-6">facebook</h1>
            <div className="bg-white p-6 rounded-xl shadow-xl border w-[380px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input 
                        type="text" 
                        placeholder="Correo electrónico o teléfono" 
                        className={`p-3 border rounded-lg outline-none focus:border-blue-500 text-black ${error ? 'border-red-500' : 'border-gray-300'}`}
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        className={`p-3 border rounded-lg outline-none focus:border-blue-500 text-black ${error ? 'border-red-500' : 'border-gray-300'}`}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    {error && <p className="text-red-500 text-[11px]">Credenciales incorrectas. Inténtalo de nuevo.</p>}
                    <button className="bg-[#1877f2] text-white py-3 rounded-lg font-bold text-xl hover:bg-[#166fe5]">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};
export default FacebookLogin;
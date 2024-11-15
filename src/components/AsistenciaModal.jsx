import React from 'react';

export default function AsistenciaModal({ isOpen, onClose }) {
    if (!isOpen) return null; 

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full text-center">
                {/* Título del modal */}
                <h2 className="text-2xl font-semibold mb-4">¿A quién deseas informar?</h2>

                {/* Opciones de novios */}
                <div className="flex justify-around mb-6">
                    <a 
                        href="https://api.whatsapp.com/send?phone=50577428248&text=%E2%9C%A8%20%C2%A1Hola%20Joan!%20%E2%9C%A8%0AQueremos%20confirmar%20nuestra%20asistencia%20a%20su%20boda%20%F0%9F%92%8D%F0%9F%8E%89%3A%0AS%C3%AD%2C%20estaremos%20ah%C3%AD%20%F0%9F%A5%B3%E2%9D%A4%EF%B8%8F%20y%20seremos%20%5Bn%C3%BAmero%5D%20invitados.%0A%0AEstamos%20emocionados%20por%20celebrar%20con%20ustedes%20este%20d%C3%ADa%20tan%20especial.%20%F0%9F%8E%B6%0A%F0%9F%92%90%20%C2%A1Nos%20vemos%20pronto!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                    >
                        <img src="/joan.jpg" alt="Joan Foto" className="w-24 h-24 rounded-full mb-2" />
                        <p className="text-lg font-medium">Joan</p>
                    </a>
                    <a 
                        href="https://api.whatsapp.com/send?phone=50577428248&text=%E2%9C%A8%20%C2%A1Hola%20Beyki!%20%E2%9C%A8%0AQueremos%20confirmar%20nuestra%20asistencia%20a%20su%20boda%20%F0%9F%92%8D%F0%9F%8E%89%3A%0AS%C3%AD%2C%20estaremos%20ah%C3%AD%20%F0%9F%A5%B3%E2%9D%A4%EF%B8%8F%20y%20seremos%20%5Bn%C3%BAmero%5D%20invitados.%0A%0AEstamos%20emocionados%20por%20celebrar%20con%20ustedes%20este%20d%C3%ADa%20tan%20especial.%20%F0%9F%8E%B6%0A%F0%9F%92%90%20%C2%A1Nos%20vemos%20pronto!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                    >
                        <img src="/beyki.jpg" alt="Beyki Foto" className="w-24 h-24 rounded-full mb-2" />
                        <p className="text-lg font-medium">Beyki</p>
                    </a>
                </div>

                {/* Botón para cerrar el modal */}
                <button
                    onClick={onClose}
                    className="bg-gray-400 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

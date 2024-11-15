import { useState } from 'react';
import AsistenciaModal from '@/components/AsistenciaModal.jsx';

export default function ConfirmarAsistencia() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Botón para abrir el modal */}
            <button
                className="bg-color01 text-color02 py-3 px-10 rounded-3xl"
                onClick={openModal}
            >
                Confirmar Asistencia
            </button>

            {/* Modal de asistencia */}
            {isModalOpen && <AsistenciaModal isOpen={isModalOpen} onClose={closeModal} />}
        </div>
    );
}

import { Card } from "@nextui-org/react";
import MusicaModal from "./MusicaModal";
import DressCodeModal from "./DressCodeModal";
import TipsModal from "./TipsModal";

export default function CardParty({
    title,
    guid,
    description,
    icon
}) {
    return (
        <Card shadow="md" className="p-0 py-10 max-w-sm w-full desktop:max-w-72 text-center flex flex-col items-center justify-center space-y-4">
            {/* Título */}
            <p className="font-semibold text-2xl text-color03">
                {title}
            </p>

            {/* Imagen */}
            <div className="flex justify-center">
                <img src={`/${icon}.gif`} className="w-24 mt-2" alt={`Icono de sección fiesta - ${icon}`} />
            </div>

            {/* Descripción */}
            <span className="h-32 px-6 text-gray-400 font-medium flex justify-center items-center text-center">
                {description}
            </span>

            {
                guid == 1 ? (
                    <MusicaModal />
                ) : guid == 2 ? (
                    <div style={{ height: '48px' }} /> 
                ) : (
                    <TipsModal />
                )
            }
        </Card>
    );
}



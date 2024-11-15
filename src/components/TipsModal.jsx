
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";



function TipsModal() {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    const title = {
        fontWeight: 'bold',
        fontSize: '1rem',
    }
    const list = {
        display: 'flex',
        gap: '8px',
        marginLeft: '15px',
        flexDirection: 'column',
    }
    const li = {
        display: 'flex',
        gap: '3px',
        fontSize: '0.8rem',
        flexDirection: 'column',
    }

    const [error, setError] = useState("");
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [send, setSend] = useState(false);
    const [asistenciaCheck, setAsistenciaCheck] = useState("");
    const handleGuardarForm = handleSubmit(async (data) => {
        if (asistenciaCheck === "") {
            setError("Debes seleccionar una opción de asistencia")
            return
        }
        const datos = {
            ...data,
            Flag_Asistencia: asistenciaCheck,
            T_Tipo_Sede: type,
        }

        const response = await fetch('http://127.0.0.1:8000/api/asistencia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 12|SjaqxYBCTstwlZndGdS7IKUjTW7nKnZRayAVsKzA4fcc3c0c'
            },
            body: JSON.stringify(datos)

        })
        const res = await response.json()
        if (res.status === 201) {
            reset()
            setSend(true)
            setError("")
        } else {
            setError(res.message)

        }
    })

    return (
        <>
            <button onClick={onOpen} className="bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl">
                + Info
            </button>
            <Modal
                backdrop={'blur'}
                isOpen={isOpen}
                isDismissable={false} isKeyboardDismissDisabled={true}
                onOpenChange={onOpenChange}
                placement="center"

                size='xl'
                className='p-8 phone:max-h-[60vh] max-h-[60vh] desktop:max-h-[90vh] overflow-y-auto'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex 
                            font-parisienne
                            text-color01
                            font-light
                            text-5xl
                            phone:text-[34px]
                            p-0
                            desktop:text-5xl

                            text-center
                            my-4
                            flex-col gap-1">
                                Tips y Notas

                            </ModalHeader>
                            <ModalBody className="font-rubik">
                                <h3 style={title} >
                                    Actividades y Horarios
                                </h3>
                                <ul style={list} >
                                    <li style={li} >

                                        <span className="font-semibold">
                                            Discurso:
                                        </span>
                                        <span>   Comienza puntualmente a las 2:00 PM, así que por favor, llega al menos 15 minutos antes.</span>

                                    </li>
                                    <li style={li} >
                                        <span className="font-semibold">
                                            Transporte:
                                        </span>

                                        <span>Si necesitas transporte de regreso a casa, no dudes en decírnoslo.</span>
                                    </li>
                                </ul>

                                <h3 style={title} >
                                    Comidas y Bebidas
                                </h3>
                                <ul style={list} >
                                    <li style={li} >

                                        <span className="font-semibold">
                                            Menú:
                                        </span>
                                        <span>
                                            Esperamos que disfrutes de la cena que hemos preparado para ti.
                                        </span>
                                    </li>
                                </ul>
                                <h3 style={title} >
                                    Reglas
                                </h3>
                                <ul style={list} >
                                    <li style={li} >

                                        <span className="font-semibold">
                                            Fotografía:
                                        </span>

                                        <span>
                                            Te pedimos que evites tomar fotografias que puedan interferir con el desarrollo del discurso.
                                            Luego de ello, siéntete libre de tomar las fotos que desees.
                                        </span>
                                    </li>

                                </ul>
                                <h3 style={title} >
                                    Regalos
                                </h3>
                                <ul style={list} >
                                    <li style={li} >
                                        Tu presencia en nuestro dia especial es el mejor regalo que podriamos pedir.
                                         Sin embargo, si deseas hacernos un obsequio adicional, agradeceriamos un aporte
                                         financiero para ayudarnos a empezar nuestra vida juntos. ❤

                                    </li>
                                </ul>
                                <div className="flex flex-col gap-1 justify-end items-end " >

                                    <span className="font-parisienne text-color01 text-lg font-bold">
                                        Joan Y Beyki
                                    </span>
                                </div>
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}

export default TipsModal
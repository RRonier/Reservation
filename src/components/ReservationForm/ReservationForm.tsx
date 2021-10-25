import React, { ChangeEvent, useState } from "react"
import { Button, TextField } from "@mui/material"
import { CustomCheckbox } from "components"
import { useSnackbar } from "notistack"
import formStyles from "./ReservationForm.module.css"

const ReservationForm = ({ handleNext }: IProps) => {
    const [values, setValues] = useState<FormValues>({
        name: "",
        lastName: "",
        celNumber: "",
        email: "",
        occation: "",
        specialRequest: "",
        sendNotifications: false
    })
    const { reservationContainer, buttonFullWidth } = formStyles
    const { enqueueSnackbar } = useSnackbar()

    const handleChangeValues = (event: ChangeEvent<HTMLInputElement>): void => {
        let { name, value } = event.target
        setValues((state) => ({
            ...state,
            [name]: value,
        }))
    }

    const fakeSendFunction = () => {
        handleNext()
        enqueueSnackbar("We've send you an email with the reservation data")
    }

    return (
        <form>
            <div className={reservationContainer}>
                <TextField
                    name="name"
                    onChange={handleChangeValues}
                    value={values.name}
                    label="Nombre" />
                <TextField
                    name="lastName"
                    onChange={handleChangeValues}
                    value={values.lastName}
                    label="Apellido" />
                <TextField
                    name="celNumber"
                    onChange={handleChangeValues}
                    value={values.celNumber}
                    label="Numero de telefono" />
                <TextField
                    name="email"
                    onChange={handleChangeValues}
                    value={values.email}
                    label="Correo electronico" />
                <TextField
                    name="occation"
                    onChange={handleChangeValues}
                    value={values.occation}
                    label="Selecciona una ocacion(Opcional)" />
                <TextField
                    name="specialRequest"
                    onChange={handleChangeValues}
                    value={values.specialRequest}
                    label="Agregar una solicitud especial" />
            </div>
            <CustomCheckbox
                label="Deseo suscribirme para recibir ofertas y noticias de este restaurante por email."
            />
            <div className={buttonFullWidth}>
                <Button variant="contained" onClick={fakeSendFunction}>Completar reservacion</Button>
            </div>
        </form >
    )
}

export default ReservationForm

interface IProps {
    handleNext(): void
}
interface FormValues {
    name: string
    lastName: string
    email: string
    celNumber: string
    occation: string
    specialRequest: string
    sendNotifications: boolean
}
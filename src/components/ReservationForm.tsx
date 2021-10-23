import React from "react"
import { Button, TextField } from "@mui/material"
import { CustomCheckbox } from "components"
import { useSnackbar } from "notistack"

interface IProps {
    handleNext(): void;
}

const ReservationForm = ({ handleNext }: IProps) => {
    const { enqueueSnackbar } = useSnackbar()

    const fakeSendFunction = () => {
        handleNext()
        enqueueSnackbar("We've send you an email with the reservation data")
    }
    return (
        <form>
            <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", columnGap: '10px', rowGap: '10px' }}>
                <TextField label="Nombre" />
                <TextField label="Apellido"></TextField>
                <TextField label="Numero de telefono"></TextField>
                <TextField label="Correo electronico"></TextField>
                <TextField label="Selecciona una ocacion(Opcional)"></TextField>
                <TextField label="Agregar una solicitud especial"></TextField>
            </div>
            <div style={{ display: 'grid' }}>
                <CustomCheckbox label="Deseo suscribirme para recibir ofertas y noticias de este restaurante por email." />
                <CustomCheckbox label="Deseo suscribirme para recibir ofertas y noticias de este restaurante por email." />
                <CustomCheckbox label="Deseo suscribirme para recibir ofertas y noticias de este restaurante por email." />
            </div>
            <div style={{ display: 'grid', marginTop: '10px' }}>
                <Button variant="contained" onClick={fakeSendFunction}>Completar reservacion</Button>
            </div>
        </form >
    )
}

export default ReservationForm
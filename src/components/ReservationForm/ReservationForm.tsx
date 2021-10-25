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
    const {
        reservationContainer,
        buttonContainer
    } = formStyles
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
                    label="Name" />
                <TextField
                    name="lastName"
                    onChange={handleChangeValues}
                    value={values.lastName}
                    label="Last Name" />
                <TextField
                    name="celNumber"
                    onChange={handleChangeValues}
                    value={values.celNumber}
                    label="Telephone number" />
                <TextField
                    name="email"
                    onChange={handleChangeValues}
                    value={values.email}
                    label="Email" />
                <TextField
                    name="occation"
                    onChange={handleChangeValues}
                    value={values.occation}
                    label="Add an occation(Optional)" />
                <TextField
                    name="specialRequest"
                    onChange={handleChangeValues}
                    value={values.specialRequest}
                    label="Add a special request" />
            </div>
            <CustomCheckbox
                label="I wish to subscribe to get offers and news from this restaurant by email."
            />
            <div className={buttonContainer}>
                <Button variant="contained" onClick={fakeSendFunction}>Complete reservation</Button>
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
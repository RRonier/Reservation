import React, { useState } from 'react'
import { Button, Divider } from '@mui/material'
import { HorizontalStepper } from 'components'
import {
    FirstStepPage,
    SecondStepPage
} from 'views'
import ReservationStyles from "./Reservation.module.css"

const Reservation = () => {
    const [activeStep, setActiveStep] = useState<number>(0)
    const [tableSelected, setTableSelected] = useState<boolean>(false)
    const {
        reservationContainer,
        buttonContainer
    } = ReservationStyles

    const handleNext = (): void => {
        setActiveStep(activeStep + 1)
    }

    const selectTable = (): void => {
        setTableSelected(true)
    }

    return (
        <div className={reservationContainer} >
            <div>
                <HorizontalStepper activeStep={activeStep} />
                <Divider variant="fullWidth" />
                {activeStep === 0 ? (
                    <>
                        <FirstStepPage selectTable={selectTable} />
                        <div className={buttonContainer}>
                            <Button variant="contained" onClick={handleNext} disabled={!tableSelected}>Continuar</Button>
                        </div>
                    </>
                ) : (
                    <SecondStepPage handleNext={handleNext} />
                )}
            </div>
        </div >
    )
}
export default Reservation
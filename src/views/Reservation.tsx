import React, { useState } from 'react'
import { Button, Divider } from '@mui/material'
import HorizontalStepper from 'components/HorizontalStepper'
import FirstStepPage from './FirstStepPage'

const Reservation = () => {
    const [activeStep, setActiveStep] = useState<number>(0)
    const [tableSelected, setTableSelected] = useState<boolean>(false)

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const selectTable = (): void => {
        setTableSelected(true)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <HorizontalStepper activeStep={activeStep} />
                <Divider variant="inset" />
                {activeStep === 0 ? <FirstStepPage selectTable={selectTable} /> : null}
                <div style={{ display: 'grid', marginTop: '10px' }}>
                    <Button variant="contained" size="large" onClick={handleNext} disabled={!tableSelected}>Continuar</Button>
                </div>
            </div>
        </div >
    )
}
export default Reservation
import React from 'react'
import {
    Box,
    Stepper,
    Step,
    StepLabel
} from '@mui/material'
import classes from "./HorizontalStepper.module.css"

const steps = ['Busca una mesa', 'Agrega tu información']
interface IProps {
    activeStep: number
}
const HorizontalStepper = ({ activeStep }: IProps) => {
    const { stepperContainer } = classes

    return (
        <div className={stepperContainer}>
            <Box sx={{ width: '60.5%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map(label => {
                        const labelProps: {
                            optional?: React.ReactNode
                            error?: boolean
                        } = {}
                        return (
                            <Step key={label}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
            </Box>
        </div >
    )
}

export default HorizontalStepper

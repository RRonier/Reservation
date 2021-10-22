import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

const steps = ['Busca una mesa', 'Agrega tu información']
interface IProps {
    activeStep: number
}
const HorizontalStepper = ({ activeStep }: IProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
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
        </div>
    )
}

export default HorizontalStepper
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Busca una mesa', 'Agrega tu información'];

export default function HorizontalStepperWithError() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <Box sx={{ width: '60%' }}>
                <Stepper activeStep={1}>
                    {steps.map((label, index) => {
                        const labelProps: {
                            optional?: React.ReactNode;
                            error?: boolean;
                        } = {};

                        return (
                            <Step key={label}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Box>
        </div>
    );
}
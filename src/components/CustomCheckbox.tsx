import React from 'react'
import { FormControlLabel, Checkbox } from '@mui/material'

interface IProps {
    label: string
}

const CustomCheckbox = ({ label }: IProps) => {
    return (
        <FormControlLabel control={<Checkbox />} label={label} />
    )
}
export default CustomCheckbox
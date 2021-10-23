import React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {
    LocalizationProvider,
    DatePicker
} from '@mui/lab'

const CustomDatePicker = () => {
    const [value, setValue] = React.useState<Date | null>(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Select the date"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker
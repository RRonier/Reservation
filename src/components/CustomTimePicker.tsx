import React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {
    LocalizationProvider,
    TimePicker
} from '@mui/lab'

const CustomTimePicker = () => {
    const [value, setValue] = React.useState<Date | null>(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
                label="Select the time"
                value={value}
                onChange={newValue => {
                    setValue(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

export default CustomTimePicker

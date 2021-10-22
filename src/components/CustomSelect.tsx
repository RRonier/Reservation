import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const CustomSelect = () => (
    <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={persons}
        autoHighlight
        getOptionLabel={(option) => option.ammount === 1 ? `${option.ammount} person` : `${option.ammount} persons`}
        renderInput={(params) => (
            <TextField
                {...params}
                label="Choose ammount of persons"
                inputProps={{
                    ...params.inputProps,
                    // autoComplete: 'new-password', // disable autocomplete and autofill
                }}
            />
        )}
    />
)

export default CustomSelect

interface Person {
    ammount: number;
}

const persons: readonly Person[] = [
    {
        ammount: 1
    },
    {
        ammount: 2
    },
    {
        ammount: 4
    },
    {
        ammount: 6
    },
    {
        ammount: 8
    },
    {
        ammount: 10
    },
];
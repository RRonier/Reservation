import React from 'react'
import {
    TextField,
    Autocomplete
} from '@mui/material'
import { persons } from "utils/Persons"

const CustomSelect = () => (
    <Autocomplete
        id="select"
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
                }}
            />
        )}
    />
)

export default CustomSelect

import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

function MuiSwitch() {
    // state variable
    const [checked, setChecked] = useState(false)

    // logs
    console.log(checked);


    // methods
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
        if (!checked)
            document.body.style.backgroundColor = 'whitesmoke'
        else
            document.body.style.backgroundColor = 'white'

    }

    return (
        <Box>
            <FormControlLabel label='Dark mode' control={<Switch checked={checked} onChange={handleChange} size='small' color='success' />} />
            <FormControlLabel label='Dark mode' control={<Switch checked={checked} onChange={handleChange} />} />
        </Box>
    )
}

export default MuiSwitch
import { Box, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, FormHelperText } from '@mui/material'
import React, { useState } from 'react'

function MuiRadio() {
    // use state hook
    const [value, setValue] = useState('')


    // methods
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        console.log({ value });
    }

    return (
        <>
            <Box>
                <FormControl error>
                    <FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
                    <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
                        <FormControlLabel control={<Radio color='success' size='small' />} label='0-2' value='0-2' />
                        <FormControlLabel control={<Radio color='success' size='small' />} label='3-5' value='3-5' />
                        <FormControlLabel control={<Radio color='success' size='small' />} label='6-10' value='6-10' />
                    </RadioGroup>
                    <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>

            </Box>
        </>
    )
}

export default MuiRadio
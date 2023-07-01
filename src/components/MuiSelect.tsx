import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

function MuiSelect() {
    const [country, setCountry] = useState('')
    const [countries, setCountries] = useState<string[]>([])
    // console.log({ country });
    console.log({ countries });



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    return (
        <>
            <Box width='250px'>
                <TextField label="Select country" value={country} onChange={handleChange} select fullWidth>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>
            </Box>
            <Box width='250px'>
                <TextField label="Select country" value={countries} onChange={handleChange2} select fullWidth SelectProps={{ multiple: true }} size='small' color='info' helperText='Please select your country'>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>
            </Box>
        </>
    )
}

export default MuiSelect
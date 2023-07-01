import { Stack, TextField, Typography, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function MuiTextField() {
    // use state hooks
    const [value, setValue] = useState('')

    return (
        <Stack spacing={4}>
            <Typography variant='h5'>Text field varients</Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined'></TextField>
                <TextField label='Name' variant='filled'></TextField>
                <TextField label='Name' variant='standard'></TextField>
            </Stack>
            <Typography variant='h5'>Size and color</Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Small Secondary' variant='outlined' size='small' color='secondary'></TextField>
                <TextField label='Small Secondary' variant='filled' size='small' color='secondary'></TextField>
                <TextField label='Small Secondary' variant='standard' size='small' color='secondary'></TextField>
            </Stack>
            <Typography variant='h5'>Required fields</Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' variant='outlined' required></TextField>
                <TextField label='Form Input' variant='filled' required></TextField>
                <TextField label='Form Input' variant='standard' required></TextField>
            </Stack>
            <Typography variant='h5'>Helper text</Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' variant='outlined' helperText="this is a helper text" required></TextField>
                <TextField label='Form Input' variant='filled' helperText="this is a helper text" required></TextField>
                <TextField label='Form Input' variant='standard' helperText="this is a helper text" required></TextField>
            </Stack>
            <Typography variant='h5'>Type password</Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Password' variant='outlined' type='password'></TextField>
                <TextField label='Password' variant='filled' type='password'></TextField>
                <TextField label='Password' variant='standard' type='password'></TextField>
            </Stack>
            <Typography variant='h5'> Disable fields</Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Password' variant='outlined' type='password' disabled></TextField>
                <TextField label='Password' variant='filled' type='password' disabled></TextField>
                <TextField label='Password' variant='standard' type='password' disabled></TextField>
            </Stack>

            <Typography variant='h5'>Read Only fields</Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Password' variant='outlined' type='password' inputProps={{ readOnly: true }}></TextField>
                <TextField label='Password' variant='filled' type='password' inputProps={{ readOnly: true }}></TextField>
                <TextField label='Password' variant='standard' type='password' inputProps={{ readOnly: true }}></TextField>
            </Stack>

            <Typography variant='h5'>Input Adorement</Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' type='number' InputProps={{ startAdornment: <InputAdornment position='start'> $ </ InputAdornment>, }} />
                <TextField label='Weight' type='number' InputProps={{ endAdornment: <InputAdornment position='end'> kg </ InputAdornment>, }} />
                <TextField label='Show' InputProps={{ endAdornment: <InputAdornment position='end'> <VisibilityIcon /> </ InputAdornment>, }} />
                <TextField label='Hide' InputProps={{ endAdornment: <InputAdornment position='end'> <VisibilityOffIcon /> </ InputAdornment>, }} />
            </Stack>
            <Typography variant='h5'>Error </Typography>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone'} required />
            </Stack>
        </Stack>
    )
}

export default MuiTextField
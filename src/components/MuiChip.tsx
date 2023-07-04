import { Avatar, Chip, Stack } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face2'
import { useState } from 'react'

export const MuiChip = () => {
    // state variable
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])

    // mehtods and functions
    const handleDelete = (chipToDelete: string) => {
        setChips(chips => chips.filter(chip => chip !== chipToDelete))
    }
    return (
        <>
            <Stack direction='row' spacing={1}>
                <Chip label='Chip' color='primary' />
                <Chip label='Chip' color='primary' size='small' />
                <Chip variant='outlined' label='Chip outline' color='primary' avatar={<Avatar />} />
                <Chip variant='outlined' label='Chip outline' color='primary' avatar={<Avatar>S</Avatar>} />
                <Chip variant='outlined' label='Chip outline' color='primary' icon={<FaceIcon />} />

                <Chip label='Clickable Chip' color='primary' onClick={() => alert('Clicked')} />
                <Chip label='Delete Chip' color='error' onDelete={() => alert('delete handler called')} />

                {
                    chips.map(chip => (
                        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
                    ))
                }
            </Stack>
        </>
    )
}

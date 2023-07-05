import { Box } from '@mui/material'
import React from 'react'

export const MuiResponsiveness = () => {
    return (
        <Box sx={{
            height: '300px',
            width: {
                sx: 100,
                sm: 200,
                md: 300,
                lg: 400,
                xl: 500
            },
            bgcolor: 'primary.main'
        }}>

        </Box>
    )
}

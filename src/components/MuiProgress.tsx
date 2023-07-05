import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

export const MuiProgress = () => {
    return (
        <>
            {/* <Stack spacing={2} direction='row' marginTop={2}>
                <CircularProgress />
                <CircularProgress color='success' />
                <CircularProgress color='secondary' value={50} variant='determinate' />
            </Stack> */}

            <Stack spacing={2}>
                <LinearProgress />
                <LinearProgress color='success' />
                <LinearProgress color='secondary' variant='determinate' value={87} />
            </Stack>
        </>
    )
}

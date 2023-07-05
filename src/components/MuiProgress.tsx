import { CircularProgress, LinearProgress, Stack } from '@mui/material'

export const MuiProgress = () => {
    // eslint-disable-next-line
    return (
        <>
            <Stack spacing={2} direction='row' marginTop={2}>
                <CircularProgress />
                <CircularProgress color='success' />
                <CircularProgress color='secondary' value={50} variant='determinate' />
            </Stack>

            <Stack spacing={2}>
                <LinearProgress />
                <LinearProgress color='success' />
                <LinearProgress color='secondary' variant='determinate' value={87} />
            </Stack>
        </>
    )
}

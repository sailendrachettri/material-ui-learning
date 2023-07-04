import { Box, Stack, Divider } from "@mui/material"


export const MuiStack = () => {
    return (
        <>
            <Stack sx={{ border: '1px solid' }} direction='row'>
                <Box bgcolor='wheat'>Lorem ipsum dolor sit.</Box>
                <Box bgcolor='beige'>Lorem ipsum dolor sit.</Box>
                <Box bgcolor='pink'>Lorem ipsum dolor sit.</Box>
            </Stack>

            <Stack sx={{ border: '1px solid' }} direction='row-reverse'>
                <Box bgcolor='wheat'>Lorem ipsum dolor sit.</Box>
                <Box bgcolor='beige'>Lorem ipsum dolor sit.</Box>
                <Box bgcolor='pink'>Lorem ipsum dolor sit.</Box>
            </Stack>

            <Stack sx={{ border: '1px solid' }} direction='row' spacing={2}>
                <Box bgcolor='wheat'>Lorem ipsum dolor sit.</Box>
                <Box bgcolor='beige'>Lorem ipsum dolor sit.</Box>
                <Box bgcolor='pink'>Lorem ipsum dolor sit.</Box>
            </Stack>

            <Stack sx={{ border: '1px solid' }} direction='row-reverse' spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                <Box bgcolor='wheat'>Lorem ipsum dolor sit.</Box>
                <Box bgcolor='beige'>Lorem ipsum dolor sit.</Box>
                <Box bgcolor='pink'>Lorem ipsum dolor sit.</Box>
            </Stack>
        </>
    )
}

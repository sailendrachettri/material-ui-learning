import { Box } from '@mui/material'

/*
sx - this props allows us to write custom inline css
'&:hover': - this will allows us to write after effect in css
p={2} - padding 2 i.e multipled by 8 = 2*8 = 16px
*/

export const MuiBox = () => {
    return (
        <>
            <Box>
                Lorem ipsum dolor sit amet.
            </Box>

            <Box component='span'>
                Lorem ipsum dolor sit amet.
            </Box>

            <Box
                sx={{
                    backgroundColor: 'primary.main',
                    padding: '16px',
                    color: 'whitesmoke',
                    height: '100px',
                    width: '100px',
                    '&:hover': { backgroundColor: 'primary.light' }
                }}>
                Lorem ipsum dolor sit amet.
            </Box>

            <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}></Box>
        </>
    )
}

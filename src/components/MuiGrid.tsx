import { Box, Grid } from '@mui/material'
/*

3 = 25%
6 = 50%
9 = 75%
12 = 100%

xs - 12 - full width in extra small device (mobile)
sm - 6 - two items in small device (tablet and larger)
xs = 'auto' - only takes the necessacy width and distributes remaning width to others items
*/

export const MuiGrid = () => {
    return (
        <>
            <Grid container marginTop={3}>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' padding={2}>Item 1</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' padding={2}>Item 2</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' padding={2}>Item 3</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' padding={2}>Item 4</Box>
                </Grid>
            </Grid>

            <Grid container marginTop={3}>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding={2}>Item 1</Box>
                </Grid>
                <Grid item xs='auto'>
                    <Box bgcolor='primary.light' padding={2}>Item 2</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding={2}>Item 3</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding={2}>Item 4</Box>
                </Grid>
            </Grid>

            <Grid container marginTop={3} spacing={2}>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding={2}>Item 1</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding={2}>Item 2</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding={2}>Item 3</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor='primary.light' padding={2}>Item 4</Box>
                </Grid>
            </Grid>

            <Grid container marginTop={3} rowSpacing={2} columnSpacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' padding={2}>Item 1</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' padding={2}>Item 2</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' padding={2}>Item 3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' padding={2}>Item 4</Box>
                </Grid>
            </Grid>
        </>
    )
}

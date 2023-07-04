import { Box, Grid, Paper } from '@mui/material'

/*
elevation - border shadow
elevation - default is 1
*/

export const Muipaper = () => {
    return (
        <Paper sx={{ padding: '32px' }} elevation={4}>
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
            </Grid >

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
        </Paper >
    )
}

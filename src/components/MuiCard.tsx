import { Box, Card, CardContent, CardActions, CardMedia, Button, Typography } from "@mui/material"


export const MuiCard = () => {
    return (
        <>
            <Box width='300px'>
                <Card>
                    <CardMedia component='img' height='140px' image="https://source.unsplash.com/random" alt="random unsplace image" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component='div'> Reactjs</Typography>
                        <Typography variant="body2" color='text.secondary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum, dolores error placeat iure architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, expedita.</Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn more</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

import { Masonry } from '@mui/lab'
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from '@mui/material'
import ExpandMoreIocn from '@mui/icons-material/ExpandMore'

const heights = [134, 105, 142, 121, 155, 112, 154, 192, 190, 112, 100]

export const Muimecinery = () => {
    return (
        <Box sx={{ width: 500, minHeight: 400 }}>
            <Masonry columns={4} spacing={1}>
                {
                    heights.map((height, index) => (
                        // <Paper key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height, border: '1px solid whitesmoke' }}>
                        //     {
                        //         index + 1
                        //     }
                        // </Paper>

                        <Paper key={index} sx={{ border: '1px solid whitesmoke' }}>
                            <Accordion sx={{ minHeight: height }}>
                                <AccordionSummary expandIcon={<ExpandMoreIocn />}>
                                    <Typography>Accordian {index + 1}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>Content</AccordionDetails>
                            </Accordion>
                        </Paper>
                    ))
                }
            </Masonry>
        </Box>
    )
}

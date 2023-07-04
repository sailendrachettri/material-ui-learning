import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material"
import { useState } from "react"



function MuiAccordian() {
    const [expended, setExpended] = useState<string | false>(false)

    // methods
    const handleChange = (isExpended: boolean, panel: string) => {
        setExpended(isExpended ? panel : false);
    }

    return (
        <>
            <Box>
                {/* 
                <Accordion>
                    <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMore />}>
                        <Typography>Learn about Reactjs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia iusto repellendus, odio dicta, obcaecati labore ducimus nostrum atque voluptate molestias eveniet ab dolor quam et illum adipisci magnam! Perspiciatis?</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMore />}>
                        <Typography>Learn about Reactjs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia iusto repellendus, odio dicta, obcaecati labore ducimus nostrum atque voluptate molestias eveniet ab dolor quam et illum adipisci magnam! Perspiciatis?</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMore />}>
                        <Typography>Learn about Reactjs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia iusto repellendus, odio dicta, obcaecati labore ducimus nostrum atque voluptate molestias eveniet ab dolor quam et illum adipisci magnam! Perspiciatis?</Typography>
                    </AccordionDetails>
                </Accordion>
                 */}

                {/* Expand one at a time */}
                <Accordion expanded={expended === 'panel1'} onChange={(event, isExpended) => handleChange(isExpended, 'panel1')}>
                    <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMore />}>
                        <Typography>Learn about Reactjs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia iusto repellendus, odio dicta, obcaecati labore ducimus nostrum atque voluptate molestias eveniet ab dolor quam et illum adipisci magnam! Perspiciatis?</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expended === 'panel2'} onChange={(event, isExpended) => handleChange(isExpended, 'panel2')} >
                    <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMore />}>
                        <Typography>Learn about Reactjs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia iusto repellendus, odio dicta, obcaecati labore ducimus nostrum atque voluptate molestias eveniet ab dolor quam et illum adipisci magnam! Perspiciatis?</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expended === 'panel3'} onChange={(event, isExpended) => handleChange(isExpended, 'panel3')} >
                    <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMore />}>
                        <Typography>Learn about Reactjs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia iusto repellendus, odio dicta, obcaecati labore ducimus nostrum atque voluptate molestias eveniet ab dolor quam et illum adipisci magnam! Perspiciatis?</Typography>
                    </AccordionDetails>
                </Accordion >

            </Box >
        </>
    )
}

export default MuiAccordian
import React, { useState } from 'react'
import { Box, FormControlLabel, FormControl, FormLabel, FormGroup, Checkbox, FormHelperText } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



function MuiCheckBox() {
    // state variables
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])

    // logs
    console.log(acceptTnC);
    console.log({ skills });

    // methods
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }
    const handleSikksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)

        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

    return (
        <>
            <Box>
                <Box>
                    <FormControlLabel label='I accpet terms and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange} />} />
                    <FormControlLabel label='I accpet terms and conditions' control={<Checkbox size='small' color='success' checked={acceptTnC} onChange={handleChange} />} />
                </Box>
            </Box>

            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={acceptTnC} onChange={handleChange}></Checkbox>
            </Box>

            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel label='HTML' value='html' control={<Checkbox checked={skills.includes('html')} onChange={handleSikksChange} />} />
                        <FormControlLabel label='CSS' value='css' control={<Checkbox checked={skills.includes('css')} onChange={handleSikksChange} />} />
                        <FormControlLabel label='Javascript' value='javascript' control={<Checkbox checked={skills.includes('javascript')} onChange={handleSikksChange} />} />
                    </FormGroup>

                    <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>
            </Box>
        </>
    )
}

export default MuiCheckBox
import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react"


type Skill = {
    id: number,
    label: string
}

const skills = ['Javascript', 'HTML', 'CSS', 'Python', 'Nodejs']

const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

/*
    - freeSolo - it gives the access to write own text beside already given
*/

function MuiAutocomplete() {
    // state variable
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)

    // logs
    console.log(value);
    console.log(skill);


    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label='Skills' />} value={value} onChange={(event: any, newValue: string | null) => setValue(newValue)} />
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label='Skills' />} value={value} onChange={(event: any, newValue: string | null) => setValue(newValue)} freeSolo />
            <Autocomplete options={skillsOptions} renderInput={(params) => <TextField {...params} label='Skills' />} value={skill} onChange={(event: any, newValue: Skill | null) => setSkill(newValue)} />
        </Stack>
    )
}

export default MuiAutocomplete
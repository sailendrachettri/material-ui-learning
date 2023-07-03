import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import { Stack, Rating } from '@mui/material'
import React, { useState } from 'react'

const MuiRating = () => {
    // state variables
    const [value, setValue] = useState<number | null>(3.5)

    // log
    console.log(value);



    // methods
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }

    return (
        <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} precision={0.5} size='large'></Rating>
            <Rating value={value} onChange={handleChange} precision={0.5} size='small'></Rating>
            <Rating value={value} onChange={handleChange} precision={0.5} size='medium'></Rating>
            <Rating value={value} onChange={handleChange} precision={0.5}></Rating>

            <Rating value={value} precision={0.5} icon={<FavoriteBorder fontSize='inherit' />} emptyIcon={<Favorite />} readOnly></Rating>
            <Rating value={value} onChange={handleChange} precision={0.5} icon={<FavoriteBorder fontSize='inherit' />} emptyIcon={<Favorite />} highlightSelectedOnly></Rating>
        </Stack>
    )
}

export default MuiRating
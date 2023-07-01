import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>H1 Heading</Typography>
            <Typography variant='h2'>H2 Heading</Typography>
            <Typography variant='h3'>H3 Heading</Typography>
            <Typography variant='h4'>H4 Heading</Typography>
            <Typography variant='h5'>H5 Heading</Typography>
            <Typography variant='h6'>H6 Heading</Typography>

            <Typography variant='subtitle1'>Sub title 1</Typography>
            <Typography variant='subtitle2'>Sub title 2</Typography>

            {/* // default para tag body1 or nothing */}
            {/* gutterBottom -> margin in bottom of the text */}
            <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, beatae!</Typography>
            <Typography variant='body1' gutterBottom>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, beatae!</Typography>

            <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque omnis officiis vitae, facere esse consectetur deleniti dolorem eligendi! Molestias, voluptas.</Typography>
        </div>
    )
}

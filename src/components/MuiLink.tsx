import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function MuiLink() {
    return (
        <>
            <Stack spacing={2} direction='row' m={4}>
                <Link href='#'>Link</Link>
                <Link href='#' color='secondary' underline='none'>Secondary</Link>
                <Link href='#' color='skyblue' underline='hover'>Secondary</Link>

                <Typography variant='h6'>
                    <Link href='#' color='skyblue' underline='hover'>Secondary</Link>
                </Typography>

                <Link href='#' variant='body2'>Secondary</Link>
            </Stack>
        </>
    )
}

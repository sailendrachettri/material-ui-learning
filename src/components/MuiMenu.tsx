import React, { useState } from 'react'
import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'


export default function MuiMenu() {
    //state variables
    const [anchorelement, setAnchorelement] = useState<null | HTMLElement>(null)

    // constant and variables
    const open = Boolean(anchorelement)

    // methods and functions
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorelement(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorelement(null)
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                        <CatchingPokemon />
                    </IconButton>
                    <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>POKEMONAPP</Typography>

                    <Stack direction='row' spacing={2}>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Pricing</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit" id='resources-button' onClick={handleClick} aria-controls={open ? 'resource-menu' : undefined} aria-haspopup={open ? 'true' : undefined} endIcon={<KeyboardArrowDown />}>Resources</Button>
                        <Button variant='outlined' color="inherit">Login</Button>
                    </Stack>

                    <Menu id='resources-menu'
                        anchorEl={anchorelement}
                        open={open}
                        MenuListProps={{
                            'aria-labelledby': 'resources-button',
                        }} onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}

                    >
                        <MenuItem onClick={handleClose}>Blog</MenuItem>
                        <MenuItem onClick={handleClose}>Podcast</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
        </>
    )
}

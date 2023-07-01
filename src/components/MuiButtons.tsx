import { Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

/*
// display block - is important for buttons - default is flex
// disableElevation - to disable the button shadow
// disableRipple - disable the wave effect while clicking
*/

function MuiButtons() {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='http://linkedin.in'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outline</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary'>Primary</Button>
                <Button variant='text' color='secondary'>Secondary</Button>
                <Button variant='text' color='warning'>Warning</Button>
                <Button variant='text' color='success'>Success</Button>
                <Button variant='text' color='error'>Error</Button>
                <Button variant='text' color='info'>Info</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='success'>Success</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='info'>Info</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='success'>Success</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='info'>Info</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>

                <Button variant='text' size='small'>Small</Button>
                <Button variant='text' size='medium'>Medium</Button>
                <Button variant='text' size='large'>Large</Button>

                <Button variant='outlined' size='small'>Small</Button>
                <Button variant='outlined' size='medium'>Medium</Button>
                <Button variant='outlined' size='large'>Large</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />} disableRipple>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation onClick={() => alert('Button clicked')}>Send</Button>

                <IconButton aria-label='send' color='success' size='medium'>
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack direction='row' >
                <ButtonGroup variant='contained' orientation='vertical' aria-label='alignment button group'>
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant='outlined' size='small' aria-label='alignment button group'>
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant='text' color='secondary' aria-label='alignment button group'>
                    <Button onClick={() => alert('clicked')}>Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack >
        </Stack>
    )
}

export default MuiButtons
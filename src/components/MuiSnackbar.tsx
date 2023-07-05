import { Button, Snackbar, Alert, AlertProps } from '@mui/material'
import { useState, forwardRef } from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

export const MuiSnackbar = () => {
    // State variables
    const [open, setOpen] = useState(false)

    // methods
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway')
            return
        setOpen(false)
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            {/* <Snackbar message='Form Submitted Successfully!' autoHideDuration={4000} open={open} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} /> */}

            {/* Custom snackbar */}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity='success'>Form submitted successfully!</SnackbarAlert>
            </Snackbar>
        </>
    )
}

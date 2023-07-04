import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Tooltip } from '@mui/material'

export const MuiTooltip = () => {
    return (
        <>
            <Tooltip title='Delete'>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title='Delete' placement='right'>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title='Delete' placement='top' arrow>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title='Delete' placement='top' arrow enterDelay={200} leaveDelay={500}>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

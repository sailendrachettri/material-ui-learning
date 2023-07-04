import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiList = () => {
    return (
        <>
            <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='List item 1' secondary="Secondary Text"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='List item 2' secondary="Secondary Text"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='List item 3' secondary="Secondary Text"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

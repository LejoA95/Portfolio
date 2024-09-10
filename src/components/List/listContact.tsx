import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import { LinksIcon } from '../ui/icons';
import { Typography } from '@mui/material';



interface ListContactProps {
    icon: React.ReactNode;
    key: number;
    titleItem: string | React.ReactNode;
    textItem: string | React.ReactNode;
    Link: string;
}

// Componente funcional utilizando las props
const ListLinkContact: React.FC<ListContactProps> = ({ icon, titleItem, textItem, Link }) => {
    return (
        <List>
            <ListItem disablePadding
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <LinksIcon />
                    </IconButton>
                }
            >
                {Link ?
                    <ListItemButton component="a" href={Link} target='_blank' sx={{padding:'0'}}>
                        <ListItemAvatar>
                            <Avatar
                                sx={{
                                    background: 'radial-gradient(circle, #5a502f 0%, #040404 100%)',
                                    variant: 'rounded',
                                }}
                            >
                                {icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant='body2' component='h2'>{titleItem}</Typography>
                            <Typography variant='body1' fontWeight={700}>{textItem}</Typography>
                        </ListItemText>
                    </ListItemButton>
                    :
                    <>
                        <ListItemAvatar>
                            <Avatar
                                sx={{
                                    background: 'radial-gradient(circle, #666332 0%, rgba(14,14,14,1) 100%)',
                                    variant: 'rounded',
                                }}
                            >
                                {icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant='body2' component='h2'>{titleItem}</Typography>
                            <Typography variant='body1' fontWeight={700}>{textItem}</Typography>
                        </ListItemText>
                    </>
                }
            </ListItem>
        </List>
    );
};

export default ListLinkContact;
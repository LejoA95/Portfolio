import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ButtonsItems = [
    {
        link: '/',
        Text: 'Acerca de'
    },
    {
        link: '/profile',
        Text: 'Perfil'
    },
    {
        link: '/projects',
        Text: 'Proyectos'
    }
]

export default function NavBar() {
    return (
        <Box sx={{
            position: 'absolute',
            padding: '0 .8em',
            borderRadius: '0 0 0 .5em',
            top: 0,
            right: 0,
            backgroundColor: '#505050',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 10)'
        }}>
            <Stack direction="row">
                {ButtonsItems.map((button, index) => (
                    <Button
                        variant="text"
                        size='large'
                        component={Link}
                        key={index}
                        href={button.link}
                        sx={{ textTransform: 'none' }}
                    >
                        <Typography color='primary.contrastText'>{button.Text}</Typography>
                    </Button>
                ))}
            </Stack>
        </Box>
    )
}
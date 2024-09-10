import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

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
                <Button
                    variant="text"
                    size='large'
                    component={Link}
                    href='/'
                    sx={{ textTransform: 'none' }} // Evita las mayúsculas
                >
                    <Typography color='primary.contrastText'>Acerca de</Typography>
                </Button>
                <Button
                    variant="text"
                    size='large'
                    component={Link}
                    href='/cv'
                    sx={{ textTransform: 'none' }} // Evita las mayúsculas
                >
                    <Typography color='primary.contrastText'>CV</Typography>
                </Button>
                <Button
                    variant="text"
                    size='large'
                    component={Link}
                    href='/'
                    sx={{ textTransform: 'none' }} // Evita las mayúsculas
                >
                    <Typography color='primary.contrastText'>Proyects</Typography>
                </Button>
            </Stack>
        </Box>
    )
}
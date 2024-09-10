"use client"
import Grid from '@mui/material/Grid2';
import { LayoutCard } from "../layouts/layoutContainers";
import { Typography, Box, Divider, IconButton } from '@mui/material';
import styled from "styled-components";
import ListLinkContact from '../List/listContact';
import alejo from "../../assets/alejo.png"
import Image from 'next/image';
import Link from 'next/link';
import { EmailsIcon, PhoneIcon, PortfolioIcon, GitIcon, FbIcon, XIcon, IgIcon } from '../ui/icons';

const dataListContact = [
    {
        icon: <EmailsIcon />,
        name: 'Email',
        value: 'alejoachicanoy95@gmail.com',
        link: 'mailto:alejoachicanoy95@gmail.com'
    },
    {
        icon: <PhoneIcon />,
        name: 'Teléfono',
        value: '322 440 7737',
        link: 'https://wa.me/+573224407737'
    },
    {
        icon: <PortfolioIcon />,
        name: 'LinkedIn',
        value: 'alejandro Achicanoy',
        link: 'https://www.linkedin.com/in/alejandro-achicanoy/'
    },
    {
        icon: <GitIcon />,
        name: 'Github',
        value: 'LejoA95',
        link: 'https://github.com/LejoA95'
    }
];

const titleName = "Alejandro Achicanoy"
const occupation = "Front-End Developer"

const ContainerCard = styled(Box)`
    background-color: #3b3b3b66;
    border: 1.5px solid #505050;
    padding: .2em .6em;
    margin-top: .5em;
    border-radius: 8px;
    display: inline-block; 
    max-width: 100%; 
`;

export default function HeaderCard() {
    return (
        <LayoutCard>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Image
                            alt="Alejandro Achicanoy"
                            src={alejo}
                            style={{ width: '100%', maxWidth: '220px', height: 'auto', borderRadius: '1em' }}
                            priority
                        />
                    </Box>
                </Grid>
                <Grid size={12} textAlign='center'>
                    <Typography variant='h5' component='h1' align='center'>{titleName}</Typography>
                    <ContainerCard>
                        <Typography variant='body1' component='h2' fontSize={15} align='center'>{occupation}</Typography>
                    </ContainerCard>
                </Grid>
                <Grid size={12}>
                    <Divider color='#6a6a6a' />
                </Grid>
                <Grid size={12}>
                    {dataListContact.map((item, index) => (
                        <ListLinkContact
                            key={index}
                            icon={item.icon}
                            titleItem={item.name}
                            textItem={item.value}
                            Link={item.link}
                        />
                    ))}
                </Grid>
                <Grid size={12}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <IconButton component={Link} href='https://www.facebook.com/profile.php?id=100025652443880' target='_blank'>
                            <FbIcon />
                        </IconButton>
                        <IconButton component={Link} href='https://x.com/AleAR953' target='_blank'>
                            <XIcon />
                        </IconButton>
                        <IconButton component={Link} href='https://www.instagram.com/alejo.ar958/' target='_blank'>
                            <IgIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </LayoutCard>
    );
}

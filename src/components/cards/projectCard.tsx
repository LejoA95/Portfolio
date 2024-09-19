import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from 'next/image';

interface ProjectProps {
    name: string;
    image: StaticImageData;
    link: string;
    description: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ name, image, link, description }) => {
    return (
        <Grid container direction='column' size={4} sx={{ border: '1px solid  #424242', borderRadius: '.5em' }}>
            <Grid size='auto'>
                <Box component={Link} href={link} target='_blank' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '.5em .5em 0 0', overflow: 'hidden', maxHeight:'140px' }}>
                    <Image
                        src={image}
                        alt={name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                    />
                </Box>
            </Grid>
            <Grid size='auto'>
                <Box sx={{ backgroundColor: '#2c2c2c', padding: '.5em', borderRadius: '0 0 .5em .5em' }}>
                    <Typography variant='body1' fontSize={18} fontWeight={500} component='h2'>{name}</Typography>
                    <Typography variant='body1' color='#cacaca'>{description}</Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ProjectCard;
import { Typography, Box, Button } from "@mui/material";
import { ReactNode } from 'react';
import Grid from '@mui/material/Grid2';
import { FC, useState } from 'react';
import { CSSProperties } from 'react';

interface DoingCardProps {
    title: string;
    Icon: ReactNode;
    description: string;
    titleReverse: string;
    descriptionReverse: string;
}

const DoingCard: FC<DoingCardProps> = ({ title, Icon, description, titleReverse, descriptionReverse }) => {
    const [flipped, setFlipped] = useState<boolean>(false);

    const handleClick = () => {
        setFlipped(prev => !prev);
    };

    const containerDoingCardStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '150px',
        perspective: '1000px',
    };

    const intoCardStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.999s',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        display: 'flex',
        flexDirection: 'column',
    };

    const cardStyle: CSSProperties = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        backgroundColor: '#3b3b3b66',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '.5em',
        padding: '.5em',
        border: '1.5px solid #505050',
        borderRadius: '10px',
        fontSize: '24px',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    };

    const frontCardStyle: CSSProperties = {
        ...cardStyle,
        transform: 'rotateY(0deg)',
    };

    const backCardStyle: CSSProperties = {
        ...cardStyle,
        transform: 'rotateY(180deg)',
    };

    return (
        <Box style={containerDoingCardStyle}>
            <Grid container wrap="nowrap" style={intoCardStyle}>
                <Grid container spacing={1} wrap="nowrap" style={frontCardStyle}>
                    <Grid size={12} sx={{ display: 'flex', alignItems: 'center', gap: '.5em' }}>
                        {Icon}
                        <Typography variant='body1' fontSize={18} fontWeight={700} component='h3' sx={{ display: 'inline-block' }}>{title}</Typography>
                    </Grid>
                    <Grid size={12} sx={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', gap: '.5em', height: '100%' }}>
                        <Typography variant="body2" sx={{ whiteSpace: 'normal' }} color='#cacaca'>{description}</Typography>
                        <Button type='button' onClick={handleClick} sx={{ textTransform: 'none', padding: '0', position: 'absolute', bottom: '0', right: '0' }}>
                            <Typography variant="body2" color="#ffb300">Ver más</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={1} wrap="nowrap" style={backCardStyle}>
                    <Grid size={12} sx={{ display: 'flex', alignItems: 'center', gap: '.5em' }}>
                        {Icon}
                        <Typography variant='body1' fontSize={18} fontWeight={700} component='h3' sx={{ display: 'inline-block' }}>{titleReverse}</Typography>
                    </Grid>
                    <Grid size={12} sx={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', gap: '.5em', height: '100%' }}>
                        <Typography variant="body2" color='#cacaca'>{descriptionReverse}</Typography>
                        <Button type='button' onClick={handleClick} sx={{ textTransform: 'none', padding: '0', position: 'absolute', bottom: '0', right: '0' }}>
                            <Typography variant="body2" color="#ffb300">Volver</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DoingCard;
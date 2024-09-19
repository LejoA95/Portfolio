import { Box, Typography } from "@mui/material";

interface TitlePpalProps {
    children: React.ReactNode;
}

const TitlePpal: React.FC<TitlePpalProps> = ({ children }) => {
    return (
        <Typography variant="h5" component='h2'
            sx={{
                position: 'relative',
                display: 'inline-block',
                padding: '0 0 .3em',
                '&::after': {
                    content: '""',
                    display: 'block',
                    width: '60%',
                    height: '2px',
                    backgroundColor: '#ffb300',
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0
                }
            }}
        >
            {children}
        </Typography>
    );
}

interface BoxIconItemProps {
    children: React.ReactNode;
}

const BoxIconItem: React.FC<BoxIconItemProps> = ({ children }) => {
    return (
        <Box sx={{
            borderRadius: '1em',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(160deg, #4e4e4e 0%, #181818 100%)',
            filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#404040",endColorstr="#0e0e0e",GradientType=1)'
        }}>
            {children}
        </Box>
    );
}

export { TitlePpal, BoxIconItem };
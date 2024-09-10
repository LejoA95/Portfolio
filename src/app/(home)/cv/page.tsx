"use client"
import Grid from '@mui/material/Grid2';
import { Typography } from "@mui/material";

export default function CvPage(){

    return(
        <Grid container spacing={2}>
            <Grid size={12}>
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
                    Cv
                </Typography>
                <Typography variant="body1" component='p' sx={{ mt: 2 }}>
                    Soy Alejandro Achicanoy, desarrollador front-end con 4 años de experiencia creando interfaces web modernas y atractivas. Mi enfoque está en utilizar tecnologías como JavaScript, Next.js, React y Vue.js para construir aplicaciones rápidas y fáciles de usar. Me apasiona cuidar los detalles de la experiencia de usuario y trabajar en equipo para llevar las ideas a la realidad.<br /><br />
                    Siempre busco colaborar de manera cercana con mis clientes, entender sus necesidades y superar sus expectativas. Si tienes un proyecto en mente o necesitas ayuda con algún desarrollo web, ¡estaré encantado de trabajar contigo!
                </Typography>
            </Grid>
            <Grid container size={12}>
                <Grid size={12}>
                    <Typography variant="h5" component='h2'
                        sx={{
                            position: 'relative',
                            display: 'inline-block',
                            padding: '0 0 .3em',
                            '&::after': {
                                content: '""',
                                display: 'block',
                                width: '20%',
                                height: '2px',
                                backgroundColor: '#ffb300',
                                position: 'absolute',
                                bottom: '-4px',
                                left: 0
                            }
                        }}
                    >
                        Lo que hago
                    </Typography>
                </Grid>
            </Grid>
        </Grid >
    )
}
"use client"
import Grid from '@mui/material/Grid2';
import { Typography } from "@mui/material";
import DoingCard from '@/components/cards/doingCards';
import { DesignIcon, CodeIcon, ApiIcon, VisualIcon } from '@/components/ui/icons';


const dataIdo = [
    {
        icon: DesignIcon,
        title: 'Diseño UI',
        description: 'Diseño de interfaces atractivas y funcionales para mejorar la experiencia del usuario en sitios web y apps.',
        titleReverse: 'Herramientas y Librerías',
        descriptionReverse: "Figma, Material UI, Tailwind y Bootstrap",
    },
    {
        icon: CodeIcon,
        title: 'Desarrollo Front-end',
        description: 'Programación de sitios web y apps usando tecnologías como Next.js, React y Vue.js.',
        titleReverse: 'Lenguajes y Tecnologías',
        descriptionReverse: "JavaScript, React, Next.js, Vue.js y React Native",
    },
    {
        icon: ApiIcon,
        title: 'Arquitectura de Datos y APIs',
        description: 'Diseño e implementación de soluciones de bases de datos y APIs utilizando tecnologías como Node.js y MySQL.',
        titleReverse: 'Lenguajes y Tecnologías',
        descriptionReverse: 'Pyton, Node.js, MySQL, NoSQL',
    },
    {
        icon: VisualIcon,
        title: 'Contenido visual',
        description: 'Creación de gráficos y multimedia para aumentar el impacto de marcas y proyectos digitales.',
        titleReverse: 'Herramientas',
        descriptionReverse: "Illustrator, Photoshop, Canva y Blender",
    }
];




export default function Home() {
    return (
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
                            width: '20%',
                            height: '2px',
                            backgroundColor: '#ffb300',
                            position: 'absolute',
                            bottom: '-4px',
                            left: 0
                        }
                    }}
                >
                    Acerca de mí
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
                <Grid container spacing={1} size={12}>
                    {dataIdo.map((item, index) => {
                        return (
                            <Grid size={6} key={index}>
                                <DoingCard
                                    Icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    titleReverse={item.titleReverse}
                                    descriptionReverse={item.descriptionReverse}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid >
    )
}
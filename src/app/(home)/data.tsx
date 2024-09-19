import { ReactNode } from 'react';
import { DesignIcon, CodeIcon, ApiIcon, VisualIcon } from '@/components/ui/icons';

interface Ido {
    icon: ReactNode;
    title: string;
    description: string;
    titleReverse: string;
    descriptionReverse: string;
}

export const dataIdo: Ido[] = [
    {
        icon: <DesignIcon />,
        title: 'Diseño UI',
        description: 'Diseño de interfaces atractivas y funcionales para mejorar la experiencia del usuario en sitios web y apps.',
        titleReverse: 'Herramientas y Librerías',
        descriptionReverse: "Figma, Material UI, Tailwind y Bootstrap",
    },
    {
        icon: <CodeIcon />,
        title: 'Desarrollo Front-end',
        description: 'Programación de sitios web y apps usando tecnologías como Next.js, React y Vue.js.',
        titleReverse: 'Lenguajes y Tecnologías',
        descriptionReverse: "JavaScript, React, Next.js, Vue.js y React Native",
    },
    {
        icon: <ApiIcon />,
        title: 'Arquitectura de Datos y APIs',
        description: 'Diseño e implementación de soluciones de bases de datos y APIs utilizando tecnologías como Node.js y MySQL.',
        titleReverse: 'Lenguajes y Tecnologías',
        descriptionReverse: 'Python, Node.js, MySQL, NoSQL',
    },
    {
        icon: <VisualIcon />,
        title: 'Contenido visual',
        description: 'Creación de gráficos y multimedia para aumentar el impacto de marcas y proyectos digitales.',
        titleReverse: 'Herramientas',
        descriptionReverse: "Illustrator, Photoshop, Canva y Blender",
    }
];

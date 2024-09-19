import { ReactNode } from 'react';
import { StudyIcon, WorkIcon } from '@/components/ui/icons';


interface Study {
    title: string;
    institution: string;
    date: string;
    description: string;
}

interface DataStudyItem {
    icon: ReactNode;
    title: string;
    studies: Study[];
}

type DataStudy = DataStudyItem[];

export const dataStudy: DataStudy = [
    {
        icon: <StudyIcon />,
        title: 'Estudios',
        studies: [
            {
                title: 'Especializacion Front-End React',
                institution: 'Alura Latam',
                date: '2024',
                description: 'Creación de interfaces dinámicas con React, utilizando componentes reutilizables e implementando gestión de estado con Redux y Context API, además de integración de APIs. Integración de APIs y ciclos de vida de componentes.'
            },
            {
                title: 'Desarrollo web Front-End',
                institution: 'Alura Latam',
                date: '2024',
                description: 'Dominio de HTML, CSS y JavaScript para la creación de páginas web responsivas, optimizando la experiencia de usuario con CSS moderno y lógica dinámica.'
            },
            {
                title: 'Lógica de programación con JavaScript',
                institution: 'Alura Latam',
                date: '2024',
                description: 'Desarrollo de habilidades para la creación de algoritmos eficientes y aplicación de lógica de programación en JavaScript.'
            },
            {
                title: 'Algoritmos y estructuras de datos con JavaScript heredados',
                institution: 'Free Code Camp',
                date: '2022 - 2023',
                description: 'Desarrollé habilidades en la creación y optimización de algoritmos, y dominé estructuras de datos como listas, pilas, colas, árboles y gráficos en JavaScript, mejorando mi capacidad para resolver problemas.'
            }
        ]
    },
    {
        icon: <WorkIcon />,
        title: 'Experiencia',
        studies: [
            {
                title: 'Blueshop ',
                institution: 'Proyecto independiente',
                date: '2023 (Actualidad)',
                description: 'Diseño y desarrollo de una interfaz de marketplace utilizando Next.js y Material UI, con integración de APIs mediante Node.js y Axios.'
            }
        ]
    }
];


// Tabla skills

interface Data {
    name: string;
    type: string;
    level: string;
    experience: number;
}

function createData(name: string, type: string, level: string, experience: number): Data {
    return { name, type, level, experience };
}

export const skillsData: Data[] = [
    createData('HTML', 'Lenguaje', 'Avanzado', 3),
    createData('CSS', 'Lenguaje', 'Avanzado', 3),
    createData('JavaScript', 'Lenguaje', 'Intermedio', 3),
    createData('React', 'Framework', 'Intermedio', 2),
    createData('Next.js', 'Framework', 'Intermedio', 2),
    createData('Vue.js', 'Framework', 'Intermedio', 1),
];
// import { ReactNode } from 'react';
import encrypt from '../../../assets/projects/encrypt.png'
import spaceFlix from '../../../assets/projects/spaceflix.png'
import { StaticImageData } from 'next/image';

interface Data {
    name: string;
    img: StaticImageData;
    link: string;
    description: string;
}


export const projectsData: Data[] = [
    {
        name: 'Encrypt Box',
        img: encrypt,
        link: 'https://lejoa95.github.io/Encrypt-box/',
        description: 'Encriptador y desencriptador de texto.'
    },
    {
        name: 'SpaceFlix',
        img: spaceFlix,
        link: 'https://space-flix-934oupm7z-lejoa95s-projects.vercel.app/',
        description: 'Plataforma de peliculas con API'
    }
];
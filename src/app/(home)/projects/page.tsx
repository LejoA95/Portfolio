"use client"
import Grid from '@mui/material/Grid2';
// import { Box, Divider, Typography } from "@mui/material";
import { TitlePpal } from './styles';
import ProjectCard from '@/components/cards/projectCard';
import { projectsData } from './data';


export default function Projects() {

    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <TitlePpal>
                    Proyectos
                </TitlePpal>
            </Grid>
            <Grid container size={12} wrap='nowrap' mt={1}>
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        image={project.img}
                        link={project.link}
                        description={project.description}

                    />
                ))}
            </Grid>
        </Grid>
    )
}
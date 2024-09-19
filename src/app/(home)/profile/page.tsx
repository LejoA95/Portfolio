"use client"
import Grid from '@mui/material/Grid2';
import { Box, Divider, Typography } from "@mui/material";
import { PointIcon } from '@/components/ui/icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dataStudy, skillsData } from './data';
import { BoxIconItem, TitlePpal } from './styles';


export default function Profile() {

    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <TitlePpal>
                    Resumen
                </TitlePpal>
            </Grid>
            {dataStudy.map((items, index) => (
                <Grid container size={12} wrap='nowrap' direction='column' spacing={0} key={index}>
                    <Grid container size={12} wrap='nowrap' display="flex" flexDirection='row' alignItems="center">
                        <Grid size='auto' display="flex" flexDirection='column' alignItems="center">
                            <BoxIconItem>
                                {items.icon}
                            </BoxIconItem>
                            <Divider orientation='vertical' sx={{
                                borderColor: '#ffb300', maxWidth: '1px', height: 'auto', flexGrow: 1, mr: '.1em'
                            }} />
                        </Grid>
                        <Grid size='grow' ml='1em' >
                            <Typography variant='h6' component='h2' m='1em 0'>{items.title}</Typography>
                        </Grid>
                    </Grid>
                    {items.studies.map((study, idx) => (
                        <Grid container size={12} wrap='nowrap' key={idx}>
                            <Grid size='auto' display="flex" flexDirection='column' alignItems="center">
                                <Box sx={{
                                    width: '40px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <PointIcon />
                                </Box>
                                <Divider orientation='vertical' sx={{
                                    borderColor: '#ffb300', maxWidth: '1px', height: 'auto', flexGrow: 1, mr: '.1em'
                                }} />
                            </Grid>
                            <Grid size='grow' p='0 0 .8em 0' ml={2}>
                                <Typography variant='body1' component='h3' fontWeight={600} fontSize={16}>{study.title}</Typography>
                                <Box mt='.3em'>
                                    <Typography variant='body2' component='span' color='#cacaca' mr={1}>{study.institution}</Typography>
                                    <Typography variant='body2' component='span' color='#ffb300'>{study.date}</Typography>
                                </Box>
                                <Typography variant='body1' component='p' mt={1} color='#cacaca'>{study.description}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            ))}
            <Grid size={12} mt={2}>
                <TitlePpal>
                    Skills
                </TitlePpal>
            </Grid>
            <Grid size={12} mt={2}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant='body1' component='h4' fontSize={16} fontWeight={600} color='#fff'>Skill</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant='body1' component='h4' fontSize={16} fontWeight={600} color='#fff'>Tipo</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant='body1' component='h4' fontSize={16} fontWeight={600} color='#fff'>Nivel</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant='body1' component='h4' fontSize={16} fontWeight={600} color='#fff'>Experiencia (años)</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {skillsData.map((skill) => (
                                <TableRow
                                    key={skill.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {skill.name}
                                    </TableCell>
                                    <TableCell align="center">{skill.type}</TableCell>
                                    <TableCell align="center">{skill.level}</TableCell>
                                    <TableCell align="right">{skill.experience}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}



import React, { FC } from 'react'
import NextLink from 'next/link';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, List, Typography } from '@mui/material';
import { IProject, IService } from '../../interfaces';

interface Props {
    project: IProject;
    indice: number;
}

export const CardProject: FC<Props> = ({ project, indice }) => {
  return (
    <div className='m-3 container'>
          

          <CardActionArea>
            <CardContent>

                <Typography className='uppercase font-bold' variant='h2'>
                  Proyecto Numero {indice + 1}
                </Typography>
            <CardMedia
                component="img"
                height="140"
                image={project.images}
                alt={project.project}
            />
                <Typography gutterBottom component="div">
                <p><strong>PROYECTO:</strong> { project.project }</p>
                </Typography>

                <Typography gutterBottom component='div'>
                <p><strong>UBICACIÓN: </strong>{ project.ubicacion }</p>
                </Typography>

                {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography> */}
            </CardContent>
        </CardActionArea>
        {/* <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
        </CardActions> */}
      </div>
  )
}

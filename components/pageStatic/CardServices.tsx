

import React, { FC } from 'react'
import NextLink from 'next/link';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, List, Typography } from '@mui/material';
import { IService } from '../../interfaces';

interface Props {
    service: IService;
}

export const CardServices: FC<Props> = ({ service }) => {
  return (
    <div className='m-3 container'
            >
          {/* <Card>
              <NextLink href="/product/slug" passHref prefetch={ false }>
                <Link>
                    <CardActionArea>
                        <CardMedia 
                            component='img'
                            className='fadeIn'
                            image={ service.images[0] }
                            alt={ service.title }
                        />

                    </CardActionArea>
                </Link>
              </NextLink>
              
          </Card> */}

          {/* <Box sx={{ mt: 1 }} className='fadeIn'>
              <Typography fontWeight={700}>{ service.title }</Typography>
              {
                service.services.map( (service, index) => (
                    <List>{index + 1}.-{ service }</List>

                ))
              }
          </Box> */}
          {/* <Typography fontWeight={500}>{ `$${service.price}` }</Typography> */}

          <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={service.images[0]}
                alt={service.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { service.title }
                </Typography>

                {service.services.map( (service, index) => (
                    <List>{ index + 1}.-{ service }</List>
                ))}

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


import { FC } from 'react'
import { Button, Card, CardActionArea, CardActions, Grid } from '@mui/material'
import { IService } from '../../interfaces'
import { CardServices } from '.'

interface Props {
    services: IService[];
}

export const ListService: FC<Props> = ({ services }) => {

  return (
    
      
      
        // <Grid className='mx-2 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center overflow-y-hidden' container >
        <Grid className='mx-2 flex flex-wrap justify-center'>
          {
              services.map( service => (
                  <Card sx={{ width: 392 }} className='mx-auto my-2 flex flex-col justify-between'>
                    <CardServices 
                        key={ service.title }
                        service={ service }
                    />
                    
                    <CardActions>
                      <Button size="small" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        ir a contacto
                      </Button>
                    </CardActions>
                  </Card>
              ))
          }
        </Grid>

      

  
  )
}



import { FC } from 'react'
import { Button, Card, CardActionArea, CardActions, Grid } from '@mui/material'
import { IProject, IService } from '../../interfaces'
import { CardProject } from '.'

interface Props {
    projects: IProject[];
}

export const ListProjects: FC<Props> = ({ projects }) => {

  return (
    
      
      
        // <Grid className='mx-2 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center overflow-y-hidden' container >
        <Grid className='mx-2 flex flex-wrap justify-center'>
          {
              projects.map( (project, indice) => (
                  <Card key={ project.project } sx={{ width: 392 }} className='mx-auto my-2 flex flex-col justify-between'>
                    <CardProject 
                        
                        project={ project }
                        indice = { indice }
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
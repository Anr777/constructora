
import React, { FC } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { yellow } from '@mui/material/colors';

interface Props {
  title1: string,
  title2: string,
}

export const Title: FC<Props> = ({ title1, title2 }) => {
  return (
    <div className='text-center'>
          <ExpandMoreIcon className='text-center' fontSize='large' sx={{ color: yellow[500],
          fontSize: 80 }} />
          <h4 className='uppercase'>{ title1 }
          </h4>
            <span className='text-center uppercase text-yellow-300 font-bold mb-3 text-[40px]'>{ title2 }</span>
    </div>
  )
}

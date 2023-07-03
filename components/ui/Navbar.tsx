import NextLink from 'next/link';

import { AppBar, Badge, Box, Button, Card, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <AppBar >
        <Toolbar>
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                    {/* <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography> */}
                    
                    <img className='w-40 h-auto' src="Logo_Anibal.png" alt="logo" />

                    
                </Link>  
            </NextLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/' passHref>
                    <Link>
                        <Button>Inicio</Button>
                    </Link>
                </NextLink>
                <NextLink href='/nosotros' passHref>
                    <Link>
                        <Button>Nosotros</Button>
                    </Link>
                </NextLink>
                {/* <NextLink href='/servicios' passHref>
                    <Link>
                        <Button>Servicios</Button>
                    </Link>
                </NextLink> */}
                <NextLink href='/proyectos' passHref>
                    <Link>
                        <Button>Proyectos</Button>
                    </Link>
                </NextLink>
                <NextLink href='/contacto' passHref>
                    <Link>
                        <Button>Contacto</Button>
                    </Link>
                </NextLink>
            </Box>


            <Box flex={ 1 } />

            {/* <IconButton>
                <SearchOutlined />
            </IconButton>

            <NextLink href="/cart" passHref>
                <Link>
                    <IconButton>
                        <Badge badgeContent={ 2 } color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>


            <Button>
                Menú
            </Button> */}

        </Toolbar>
    </AppBar>
  )
}

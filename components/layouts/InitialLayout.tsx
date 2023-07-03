import { FC } from 'react';
import Head from 'next/head';

import { Navbar, SideMenu } from '../ui';
import { Footer } from './Footer';


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const InitialLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 

        <nav>
            <Navbar />
        </nav>

        <SideMenu />

        <main style={{
            margin: '80px 0px',
            maxWidth: '100%',
            height: '80%',
            padding: '0px 0px'
        }}>
            { children }
        </main>

        {/* Footer */}
        <footer>
            {/* TODO: mi custom footer */}
            <Footer />
        </footer>

    </>
  )
}



import type { NextPage } from 'next';
import { Footer, InitialLayout, ShopLayout, Title } from '../components/layouts';

import { ListService } from '../components/pageStatic';
import { initialServices } from '../database/servicios';

import { initialProjects } from '../database/proyects';
import { ListProjects } from '../components/pageProyectosRealizados';
import { DescargaPdf, NuestrosClientes, RealizaProyectosNosotros } from '../components/ui';


const Home: NextPage = () => {
  return (
    <InitialLayout title={'Constructora y Consultoria'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <div className='bg-[url("/construccion-civil.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>

          <div className="absolute top-auto left-auto w-1/3 h-full overflow-hidden sm:w-0 sm:h-0 md:w-1/2 md:h-full">
            <div className="w-full h-full bg-red-500 bg-opacity-90 transform origin-top-left rotate-45"></div>
          </div>
          <div className='container mx-1 px-4'>
            <div className='max-w-[450px] text-white flex flex-col gap-[10px]'>
              <div className='z-10'>
                <h1 className='text-5xl'>C.C. & ARQ Consultoria y Constructora</h1>
                <h4 className='text-2xl mt-3'>
                  lalalala
                </h4>
              </div>

              <div className=' z-10 bg-[#d1fd2f] h-[2px] w-[40px]'>

              </div>
              <button className="bg-blue-500 w-1/3 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full z-10">
                {/* <img src="iconoCon.png" alt="Logo" className="w-6 h-6 mr-2 inline-block" /> */}
                Contacto
              </button>
            </div>

          </div>
        </div>

        {/** DESCARGAR CURRICULUM */}
        <DescargaPdf />
        
        <Title title1='Nuestros' title2='Servicios' />
        <ListService services={ initialServices.services as any } />

        {/* <div className="relative">
          <div className="parallax-bg bg-black opacity-70 absolute inset-0">
            <img src="https://blog.bulldozair.com/wp-content/uploads/sites/2/2020/09/all-participants-in-construction-project.jpg" alt="Imagen" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="parallax-content relative z-10">
            <div className="cards-container flex flex-grow items-center justify-center">
            </div>
            <div className="text-white"> */}
              {/* <Title title1='Nuestros' title2='Proyectos' />
              <ListProjects projects={initialProjects.projects as any} /> */}
            {/* </div>
          </div>
        </div> */}

        <Title title1='Nuestros' title2='Clientes' />
        <NuestrosClientes />
        <RealizaProyectosNosotros />

        

        
    </InitialLayout>
  )
}

export default Home

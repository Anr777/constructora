
import React from 'react'
import { InitialLayout, Title } from '../../components/layouts'
import Image from 'next/image'
import Link from 'next/link'
import { Mision, Valores } from '../../components/ui'
import { initialValores } from '../../database/valores'

const Nosotros = () => {

  const bg = {
    background: "url('/oleaje.svg') no-repeat",
    backgroundPosition: 'right'
  }

  return (
    <InitialLayout  title={'Nosotros'} pageDescription={'Encuentra los mejores servicios de Consultoria y constructora aquí'}>
      {/* <div style={bg}>
        <div className='grid md:grid-cols-2 py-16' >
          <div className='image'>
            
            <Image src={'/construccion-civil.jpg'} alt="" width={500} height={500} />
          </div>
          <div className='info flex justify-center flex-col'>
            <div className='title'>
              <h3 className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>NOSOTROS</h3>
            </div>
              <p className='text-gray-500 py-3'>
                Nuestra empresa se dedica a la Elaboración de perfiles y expedientes técnicos, asesoramiento técnico de cualquier
                proyecto de construcción civil, elaboración de presupuesto, inspección de obras, construcción y remodelación de obras 
                civiles como: obras comerciales, habitacionales, industriales, Eléctricas e hidráulicas, trabajos preliminares como: 
                movimiento de tierra, demolición y otros, trabajos sanitarios e industriales y mantenimiento de pozos industriales
              </p>
        
          </div>
        </div>
      </div> */}

    <div className='bg-[url("/nosotros.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>

    <div className="absolute top-auto left-auto w-1/3 h-full overflow-hidden sm:w-0 sm:h-0 md:w-1/2 md:h-full">
    <div className="w-full h-full bg-red-500 transform origin-top-left rotate-45"></div>
    </div>
    <div className='container mx-1 px-4'>
    <div className='max-w-[450px] text-white flex flex-col gap-[10px]'>
      <div className='z-10'>
        <h1 className='text-5xl'>NOSOTROS</h1>
        <p className='text-2xl mt-3'>
        Nuestra empresa se dedica a la Elaboración de perfiles y expedientes técnicos, asesoramiento técnico de cualquier proyecto de construcción civil
        </p>
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

    <div className='bg-[url("/oleaje.svg")]  bg-cover bg-center items-center'>
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy fasterddddddddddddddddd</h2> */}
              <p className="mt-20 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">La Empresa - Historia</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Es una empresa dedicada a la consultoría y construcción en general, 
                brindado servicios a nivel nacional, registrado en la ciudad de Ica -
                Perú, fue fundado en el año 2016, con el esfuerzo de un grupo de 
                empresarios creyendo en el futuro y el desarrollo del PERÚ, nace una 
                empresa muy versátil, capaz de realizar diversas actividades 
                relacionado en la construcción, Industrias, con la elaboración de 
                proyectos públicos y privados.
              </p>
              
            </div>
          </div>
          <img
            src="/laEmpresa.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
      
    </div>

    {/** Mision y Vision */}

      
    <Mision />

    <Title title1='Nuestros' title2='Valores' />
    <Valores valores={ initialValores.valores as any } />

    

   

    </InitialLayout>
  )
}

export default Nosotros

import React from 'react'

export const DescargaPdf = () => {

  const handleDownload = ( e: any ) => {
    e.preventDefault()
    const downloadLink = document.createElement('a');
    downloadLink.href = 'constructoraCurriculum.pdf'; // Reemplaza con la ruta correcta de tu archivo PDF
    downloadLink.download = 'constructoraCurriculum.pdf'; // Reemplaza con el nombre que deseas para el archivo descargado
    downloadLink.click();
  };
  return (
    <div className="bg-white z-10">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-8 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-400 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
    
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Consultoria y Constructora 
              <br />
              <span className='text-yellow-300'>C.C. & ARQ S.A.C</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Conoce mas a nuestra empresa descargando nuestro curriculum:
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              {/* <a
                href="#"
                className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-slate-100 shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={ handleDownload }
              >
                Descargar Curriculum
              </a> */}
              <button
                className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-slate-100 shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={ handleDownload }
              >
                Descargar Curriculum
              </button>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="descargarPDF2.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

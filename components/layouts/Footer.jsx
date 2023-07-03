
import React from 'react'


export const Footer = () => {
  return (
    // <footer className="bg-gray-900 text-white">
    //   <div className="container mx-auto flex justify-center items-center p-8">
    //     <div className="flex flex-col items-center">
    //       <img src='Logo_Anibal.png' alt="Logo" className="h-16 mb-4" />
    //       <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis leo. Duis vitae mi non mauris tincidunt tincidunt id in mauris.</p>
    //       <ul className="mt-6 flex space-x-4">
    //         <div>
    //           <li><a href="#" className="text-gray-400 hover:text-white text-lg">Contactanos</a></li>
    //           <h4 className='text-gray-400'>Telefono: <span className='text-gray-300'>+51 999666999</span></h4>
    //           <h4 className='text-gray-400'>Email: <span className='text-gray-300'>empresa@empresa.com</span></h4>
    //           <h4 className='text-gray-400'>Ubicacion: <span className='text-gray-300'>Calle Lima #666</span></h4>
    //         </div>
    //         <div>
    //           <li><a href="#" className="text-gray-400 hover:text-white">Servicios</a></li>
    //         </div>
    //         <li><a href="#" className="text-gray-400 hover:text-white">Proyectos</a></li>
    //         <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="bg-gray-800 py-2">
    //     <p className="text-xs text-center">&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
    //   </div>
    // </footer>

    
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src='Logo_Anibal.png' alt="Logo" className="h-16 mb-4" />
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis leo. Duis vitae mi non mauris tincidunt tincidunt id in mauris.</p>
              <ul className="mt-6 flex space-x-4">
             <div>
               <li><a href="#" className="text-gray-400 hover:text-white text-lg">Contactanos</a></li>
               <h4 className='text-gray-400'>Telefono: <span className='text-gray-300'>+51 999666999</span></h4>
               <h4 className='text-gray-400'>Email: <span className='text-gray-300'>empresa@empresa.com</span></h4>
               <h4 className='text-gray-400'>Ubicacion: <span className='text-gray-300'>Calle Lima #666</span></h4>
             </div>
             
           </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Inicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Servicios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Proyectos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Recibir notificaciones</h3>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div> */}
            <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Resive Promociones y anuncios.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
            
            
          </div>
        </div>
        <div className="bg-gray-800 py-2">
          <p className="text-xs text-center">&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
}

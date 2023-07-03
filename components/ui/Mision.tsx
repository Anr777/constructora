import React from 'react'

export const Mision = () => {
  return (
    <div className="relative py-24 sm:py-32">
      <div className="parallax-bg bg-black opacity-70 absolute inset-0">
        <img src="https://blog.bulldozair.com/wp-content/uploads/sites/2/2020/09/all-participants-in-construction-project.jpg" alt="Imagen" className="w-full h-full object-cover opacity-30" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 parallax-content relative z-10">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-100">Mision</h3>
            <p className="mt-6 text-base leading-7 text-gray-200">
            Somos una empresa líder con la misión de brindar un servicio de calidad en elsector de la 
            construcción, manejando proyectos con principios de habilidades, cumple las
            expectativas de nuestros clientes, C.C & ARQ CONSULTORA Y CONSTRUCTORA S.A.C. 
            Tiene el compromiso de alcanzarla mayor eficiencia posible en sus proyectos técnicos 
            y diversos requerimientos de nuestros clientes.
            </p>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <img src="/mision.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 parallax-content relative z-10">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-100">Vision</h3>
            <p className="mt-6 text-base leading-7 text-gray-200">
              Ser reconocidos como la mejor empresa en el rubro de ingeniería civil, 
              construcción, supervisión, gerenciamiento de proyectos en las obras y contratos con 
              los que nos comprometamos, siendo reconocidos por la calidad del trabajo, la 
              seguridad y buen desempeño del equipo de trabajo, así como por el respeto al medio 
              ambiente, cumpliendo los plazos establecidos.
              Nuestra empresa fue creada con el fin de acercar a nuestros clientes, el confort y 
              diseños especializados, en cuanto a todo tipo de proyectos de obras y otros 
              relacionados en el ámbito de la Construcción, garantizando la calidad de nuestros 
              trabajos, cumpliendo a detalle la normativa técnica vigente, exigencias de calidad y 
              seguridad, pero principalmente aseguramos que el cliente termine plenamente 
              satisfecho del trabajo entregado. La calidad total es nuestra premisa.
            </p>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <img src="/mision.webp" width='100%' alt="" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 parallax-content relative z-10">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-100">Objetivo de la Empresa</h3>
            <p className="mt-6 text-base leading-7 text-gray-200">
              Somos una empresa contratista con el objetivo 
              fundamental de satisfacer las necesidades de los 
              clientes, cumpliendo con cuatro pilares básicos: 
              “Calidad, Costos, Plazos y Garantía” nos debemos al 
              compromiso adquirido con el cliente para cumplir 
              con los objetivos y costos ofertados en el 
              presupuesto, plazos de ejecución contratados con 
              las calidades ofertadas en la memoria.
            </p>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <img src="/mision.webp" width='100%' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}


import React, { FC } from 'react'
import { IValores } from '../../interfaces/valores';

interface Props {
  valores: IValores[];
}

export const Valores : FC<Props> = ({ valores }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros Valores</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Los valores son muy importantes tanto como para las personas, como tambien para las empresas.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {valores.map((data) => (
            <li key={data.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={data.images} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{data.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{data.descripcion}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

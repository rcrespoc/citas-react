import React from 'react'
import { Paciente } from './Paciente'

export const ListadoPacientes = ({pacientes = [], setPaciente, setPacientes}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>Administra tus {' '}
        <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
      </p>
      <div className={`${pacientes.length && 'md:h-screen md:overflow-y-scroll'}`}>
        {
          pacientes.length === 0
          ? <p className='text-center bg-indigo-600 text-white p-2 m-2'>No hay pacientes</p>
          : pacientes.map(paciente => (
            <Paciente 
              key={paciente.id}
              {...paciente}
              setPaciente={setPaciente}
              setPacientes={setPacientes}
            />
          ))
        }
      </div>
    </div>
  )
}

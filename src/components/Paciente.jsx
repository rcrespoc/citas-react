import React from 'react'

export const Paciente = ({id, mascota, propietario, email, fecha, sintomas,setPaciente, setPacientes}) => {

  const handleEditar = () => {
    setPaciente({id, mascota, propietario, email, fecha, sintomas});
  }

  const handleDelete = () => {
    setPacientes(pacientes => pacientes.filter(paciente => paciente.id !== id));
    setPaciente({})
  }

  return (
    <div className='m-3 shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {' '}
        <span className='font-normal normal-case'>{mascota}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {' '}
        <span className='font-normal normal-case'>{ propietario }</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {' '}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha: {' '}
        <span className='font-normal normal-case'>{fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {' '}
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>

      <div className="flex mt-10 justify-between">
        <button 
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
          onClick={handleEditar}
        >
          Editar
        </button>
        <button 
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

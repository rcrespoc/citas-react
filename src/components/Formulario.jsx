import React, { useEffect, useState } from 'react'

export const Formulario = ({setPacientes, paciente, setPaciente}) => {

  const [formValues, setFormValues] = useState({
    mascota: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
    id: ''
  })
  const [error, setError] = useState(false)

  const {mascota, propietario, email, fecha, sintomas, id} = formValues;
  useEffect(() => {
    if(paciente.id){
      setFormValues({...paciente})
    }
  }, [paciente])
  

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if( [mascota, propietario, email, fecha, sintomas].includes('') ){
      setError(true)
    }else{
      setError(false);
    }
    if(paciente.id){
      setPacientes(c => c.map(c2 => c2.id === formValues.id ? {...formValues} : c2));
      setPaciente({});
    }else{
      setPacientes(c => [...c, {...formValues, id: new Date().getTime()}]);
    }
    setFormValues({
      mascota: '',
      propietario: '',
      email: '',
      fecha: '',
      sintomas: '',
      id: ''
    })
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold text-lg">
          Administralos
        </span>
      </p>
    <form 
      className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      onSubmit={handleSubmit}
    >
      {
        error && 
        <div className='bg-red-800 text-center text-white p-3 uppercase font-bold mb-3 rounded'>
          <p>Todos los campos son obligatorios.</p>
        </div>
      }
      <div className='mb-5'>
        <label 
          className='block text-gray-700 uppercase font-bold'
          htmlFor='mascota'
        >Nombre Mascota</label>
        <input 
          id='mascota'
          type="text"
          placeholder='Nombre de la mascota'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={mascota}
          onChange={handleChange}
        />
      </div>
      <div className='mb-5'>
        <label 
          className='block text-gray-700 uppercase font-bold'
          htmlFor='propietario'
        >Nombre Propietario</label>
        <input 
          id='propietario'
          type="text"
          placeholder='Nombre del propietario'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={propietario}
          onChange={handleChange}
        />
      </div>
      <div className='mb-5'>
        <label 
          className='block text-gray-700 uppercase font-bold'
          htmlFor='email'
        >
          Email
        </label>
        <input 
          id='email'
          type="email"
          placeholder='Email contacto propietario'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className='mb-5'>
        <label 
          className='block text-gray-700 uppercase font-bold'
          htmlFor='fecha'
        >
          Alta
        </label>
        <input 
          id='fecha'
          type="date"
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={fecha}
          onChange={handleChange}
        />
      </div>
      <div className='mb-5'>
        <label 
          className='block text-gray-700 uppercase font-bold'
          htmlFor='sintomas'
        >
          Síntomas
        </label>
        <textarea 
          id='sintomas'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={sintomas}
          onChange={handleChange}
          placeholder='Describe los síntomas'
        />
      </div>
      <input 
        type="submit" 
        value={`${paciente.id ? 'Editar' : 'Agregar'} paciente`}
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
      />
    </form>
    </div>
  )
}

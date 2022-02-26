import { Formulario } from "./components/Formulario"
import { ListadoPacientes } from "./components/ListadoPacientes"
import Header from "./components/Header"
import { useEffect, useState } from "react"

const initialState = () => {
  return JSON.parse(localStorage.getItem('pacientes')) || []
}

function App() {
  const [pacientes, setPacientes] = useState(initialState());
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
        />
      </div>
    </div>
  )
}

export default App

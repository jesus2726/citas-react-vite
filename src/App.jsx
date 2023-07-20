import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [editarPaciente, setEditarPaciente] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const getPacientes =
        JSON.parse(localStorage.getItem('pacientesLS')) ?? []; // si no tiene nada el localStorage, entonces agregale un arreglo vacio
      console.log(getPacientes);
      setPacientes(getPacientes);
    };

    getLocalStorage();
  }, []);

  useEffect(() => {
    // console.log("cambiando el pacientesegundo useEffect")
    localStorage.setItem('pacientesLS', JSON.stringify(pacientes));
    // console.log(pacientes);
  }, [pacientes]);

  const editarPacienteActual = (paciente) => {
    setEditarPaciente(paciente);
    console.log(paciente);
  };

  const editarPacienteBD = (pacienteActualizado) => {
    const newPaciente = pacientes.map((paciente) =>
      paciente.id === pacienteActualizado.id ? pacienteActualizado : paciente
    );

    setPacientes(newPaciente);

    return;
  };

  const eliminarPaciente = (idPaciente) => {
    const confirmarPaciente = window.confirm(
      `Desea eliminar el paciente con ID: ${idPaciente}`
    );

    if (confirmarPaciente) {
      const newPacientes = pacientes.filter(
        (paciente) => paciente.id !== idPaciente
      );
      setEditarPaciente({});
      return setPacientes(newPacientes);
    }

    return;
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          editarPaciente={editarPaciente}
          setEditarPaciente={setEditarPaciente}
          editarPacienteDB={editarPacienteBD}
        />
        <ListadoPacientes
          pacientes={pacientes}
          editarPacienteActual={editarPacienteActual}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;

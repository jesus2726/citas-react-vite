import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, editarPacienteActual , eliminarPaciente}) => {
  // console.log(pacientes)
  // console.log(pacientes && pacientes.length)

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2> 

          <p className="text-lg mt-5 text-center mb-5">
            Administra tus{" "}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              editarPacienteActual={editarPacienteActual}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Agrega un Paciente
          </h2>
          <p className="text-lg mt-5 text-center mb-5">
            Para que se muestre en esta parte de la{" "}
            <span className="font-bold text-indigo-600">Pantalla</span>
          </p>
          <p className="font-bold text-center">
            No se encontraron pacientes para mostrar
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;

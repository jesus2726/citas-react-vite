import ListadoPacientes from "./ListadoPacientes";

const Paciente = ({ paciente, editarPacienteActual, eliminarPaciente }) => {
  const { id, mascota, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="bg-white shadow-md rounded-xl py-10 mr-3 mb-3">
      <p className="font-bold uppercase text-gray-700 mb-3 ml-1">
        Nombre Mascota:{" "}
        <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold uppercase text-gray-700 mb-3 ml-1">
        Nombre Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold uppercase text-gray-700 mb-3 ml-1">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold uppercase text-gray-700 mb-3 ml-1">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold uppercase text-gray-700 mb-3 ml-1">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className='flex justify-between'>
        <button
          type="button"
          className="bg-indigo-600 font-bold uppercase text-white py-2 px-5 m-2 rounded-md hover:bg-indigo-700 cursor-pointer"
          onClick={() => editarPacienteActual(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 font-bold uppercase text-white py-2 px-5 m-2 rounded-md hover:bg-red-700"
          onClick={() => eliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;

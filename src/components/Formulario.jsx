import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({
  setPacientes,
  editarPaciente,
  setEditarPaciente,
  editarPacienteDB,
}) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  // const [idPaciente, setIdPaciente] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");

  const isPacientes = Object.keys(editarPaciente).length;

  useEffect(() => {
    const { id, mascota, propietario, email, fecha, sintomas } = editarPaciente;
    if (isPacientes > 0) {
      console.log("paciente");
      // setIdPaciente(id);
      setMascota(mascota);
      setPropietario(propietario);
      setEmail(email);
      setFecha(fecha);
      setSintomas(sintomas);
    }
  }, [editarPaciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const getIdPaciente = () => {
      const fecha = Date.now().toString(36);
      const random = Math.random().toString(36).substring(2);
      return `${fecha}${random}`;
    };

    if ([mascota, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    // console.log(error);
    if (error) {
      // console.log(error);
      setError(false);
    } else {

      const objetoPaciente = {
        mascota,
        propietario,
        email,
        fecha,
        sintomas,
      };

      //  console.log("entro")
      if (isPacientes > 0) {

        // console.log("no registro")
        objetoPaciente.id = editarPaciente.id;
        editarPacienteDB(objetoPaciente);

        setSuccess("Actualizacion exitosa");
        setEditarPaciente("");

      } else {

        // console.log("registro")
        ("Registro exitoso");
        (objetoPaciente.id = getIdPaciente()),
          setPacientes((previwState) => [...previwState, objetoPaciente]);

      }

      // setIdPaciente("");
      setMascota("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");
    }

    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 m-3">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
      >
        {error && (
          <Error>
            <p>Diligencie todos los campos</p>
          </Error>
        )}

        {success && (
          <div className="bg-green-700 font-bold text-white text-center uppercase mb-2 rounded-md transition-all">
            <p>{success}</p>
          </div>
        )}

        <div className="mb-5">
          <label htmlFor="nombreMascota" className="block font-black uppercase">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="nombreMascota"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block font-bold uppercase text-gray-700"
            htmlFor="namePropietario"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            name="namePropietario"
            id="namePropietario"
            placeholder="Nombre del Propietario"
            className="block w-full border-2 rounded-md p-2 mt-2 placeholder-gray-400"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block font-bold text-gray-700 uppercase"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="usuario@usuario.com"
            className="block border-2 rounded-md p-2 mt-2 w-full text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block font-bold uppercase text-gray-700"
          >
            De Alta
          </label>
          <input
            type="date"
            name="alta"
            id="alta"
            className="block border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block font-bold uppercase text-gray-700"
          >
            Síntomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            rows="4"
            placeholder="Sintomas (Diagnostico)"
            className="block w-full resize-none border-2 p-2 mt-2 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <div>
          {isPacientes ? (
            <input
              type="submit"
              value="Actualizar Paciente"
              className="block font-bold w-full bg-orange-700 text-white uppercase cursor-pointer p-2 hover:bg-orange-600 transition-all"
            />
          ) : (
            <input
              type="submit"
              value="Registrar Paciente"
              className="block font-bold w-full bg-indigo-700 text-white uppercase cursor-pointer p-2 hover:bg-indigo-600 transition-all"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Formulario;

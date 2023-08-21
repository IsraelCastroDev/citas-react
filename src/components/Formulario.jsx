import { useState, useEffect } from "react";
import Error from "./error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Agregando registro
      // Agregar datos a la lista
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar Form

    setNombre("");
    setEmail("");
    setPropietario("");
    setSintomas("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      <p className="text-md mt-4 text-center">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-xl py-4 px-4 mt-4 pl-8 mx-4"
      >
        {error && <Error mensaje="Todos los campos deben estar llenos" />}
        <div className="mb-4 mt-3">
          <label
            htmlFor="mascota"
            className="block text-slate-900 uppercase font-bold mb-3"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="rounded border-3 outline-slate-300 p-2 placeholder-slate-600 w-full"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="propietario"
            className="block text-slate-900 uppercase font-bold mb-3"
          >
            Nombre Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="rounded border-slate-300 outline-slate-300 p-2 placeholder-slate-600 w-full"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-slate-900 uppercase font-bold mb-3"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email del Propietario"
            className="rounded border-slate-300 outline-slate-300 p-2 placeholder-slate-600 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="alta"
            className="block text-slate-900 uppercase font-bold mb-3"
          >
            Fecha
          </label>

          <input
            id="alta"
            type="date"
            className="rounded border-slate-300 outline-slate-300 p-2 placeholder-slate-600 w-full"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="sintomas"
            className="block text-slate-900 uppercase font-bold mb-3"
          >
            Síntomas
          </label>

          <textarea
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe los síntomas"
            className="rounded border-slate-300 outline-slate-300 p-2 placeholder-slate-600 w-full"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer 
          transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;

import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-center text-2xl">Listado de Pacientes</h2>

      <p className="mt-4 text-md text-center">
        Administra tus {""}
        <span className="text-indigo-700 font-bold">Pacientes y Citas</span>
      </p>

      {pacientes.length !== 0 ? (
        pacientes.map((paciente) => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))
      ) : (
        <p className="uppercase text-lg font-bold text-center my-3 text-red-800">
          ¡No hay registro de pacientes aún!
        </p>
      )}
    </div>
  );
};

export default ListadoPacientes;

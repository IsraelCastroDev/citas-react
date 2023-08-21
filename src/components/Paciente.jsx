import BtnEliminar from "./BtnEliminar";
import BtnEditar from "./BtnEditar";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  
  const handleEliminar = () => {
    const respuesta = confirm("¿Seguro que quieres eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(paciente.id);
    }
  };

  return (
    <div className="m-4 px-5 py-10 rounded-xl bg-white shadow-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>

      <div className="flex justify-between">
        <BtnEditar paciente={paciente} setPaciente={setPaciente} />
        <BtnEliminar paciente={paciente} handleEliminar={handleEliminar} />
      </div>
    </div>
  );
};

export default Paciente;

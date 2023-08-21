const BtnEditar = ({ paciente, setPaciente }) => {
  return (
    <button
      type="button"
      className="bg-green-600 text-white font-bold text-sm rounded-lg uppercase p-2 w-24"
      onClick={() => setPaciente(paciente)}
    >
      Editar
    </button>
  );
};

export default BtnEditar;

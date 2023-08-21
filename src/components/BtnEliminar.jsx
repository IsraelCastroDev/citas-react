const BtnEliminar = ({handleEliminar}) => {
  return (
    <button
      type="button"
      className="bg-red-600 text-white font-bold text-sm p-2 rounded-lg uppercase w-24"
      onClick={handleEliminar}
    >
      Eliminar
    </button>
  );
};

export default BtnEliminar;

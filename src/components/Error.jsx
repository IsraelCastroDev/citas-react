const Error = ({mensaje}) => {
  return (
    <div className="bg-red-600 px-2 py-3 rounded mb-3">
      <p className="text-white font-bold text-center uppercase">
        {mensaje}
      </p>
    </div>
  );
};

export default Error;

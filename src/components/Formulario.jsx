import useClima from "../hooks/useClima";

function Formulario() {
  const { busqueda, datosBusqueda, setAlerta, consultarClima } = useClima();
  const { cuidad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Error! Todos los campos son obligatorios");
      return;
    }
    setAlerta("")
    consultarClima(busqueda)
  };
  return (
    <form className="mt-10 mx-5" onSubmit={handleSubmit}>
      <div className="mt-5">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          placeholder="Escribe tu Ciudad"
          className="w-full p-2 rounded"
          onChange={datosBusqueda}
          value={cuidad}
        />
      </div>
      <div className="mt-5">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="pais"
          name="pais"
          onChange={datosBusqueda}
          value={pais}
        >
          <option disabled value="">
            -- Seleccione --
          </option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="PE">Perú</option>
        </select>
      </div>

      <input
        type="submit"
        className="mt-5 w-full bg-yellow-500 p-3  uppercase font-bold cursor-pointer rounded"
        value="Obtener Clima"
      />
    </form>
  );
}

export default Formulario;

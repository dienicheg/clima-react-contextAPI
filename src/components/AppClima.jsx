import Formulario from "./Formulario";
import useClima from "../hooks/useClima";
import Resultado from "./Resultado";
import Spinner from "./Spinner";

function AppClima() {
  const { alerta, resultado, cargando, noResultado } = useClima();
  return (
    <div className="container mx-auto">
      <h1
        id="titulo"
        className="text-4xl mt-5 text-white font-bold uppercase text-center"
      >
        Busca el Clima
      </h1>
      <div className="max-w-lg mx-auto ">
        <div className="p-6 mt-10">
          <div>
            {cargando ? 
              <Spinner />
             : resultado?.name ? 
              <Resultado />
             : noResultado ? 
              <p className="flex justify-center items-center w-full text-white">No hay resultados</p>
             : 
              <p className="text-center text-white mt-6">
                Agrega tu ciudad y país, el resultado se mostrará aquí
              </p>
            }
          </div>
        </div>

        <Formulario />

        {alerta && (
          <p className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto mt-6 text-center">
            {alerta}
          </p>
        )}
      </div>
    </div>
  );
}

export default AppClima;

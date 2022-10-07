import useClima from "../hooks/useClima"

function Resultado() {

    const { resultado } = useClima()
    const { name, main: { temp, temp_max, temp_min } } = resultado

    const kelvinACentigrados = grados => parseInt(grados - 273.15)
    const centigrados = kelvinACentigrados(temp)
    const centigradosMax = kelvinACentigrados(temp_max)
    const centigradosMin = kelvinACentigrados(temp_min)

  return (
    <div className="text-center text-white">
        <p className="font-bold text-2xl">El Clima Actual en {name} es: </p>
        <p className="font-bold text-6xl">{centigrados}<span>&#8451;</span></p>
        <p className="text-xl">Temperatura Máxima: {centigradosMax}<span>&#8451;</span></p>
        <p className="text-xl">Temperatura Minima:{centigradosMin}<span>&#8451;</span></p>
    </div>
  )
}

export default Resultado
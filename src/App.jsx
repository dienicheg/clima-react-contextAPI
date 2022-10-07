import AppClima from "./components/AppClima"
import { ClimaProvider } from "./context/ClimaProvider"
function App() {
 

  return (
    <div>
      <ClimaProvider>
        <AppClima/>
      </ClimaProvider>
    </div>
  )
}

export default App

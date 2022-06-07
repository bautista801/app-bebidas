import Formulario from "./components/Formulario"
import { CategoriasProvider } from "./context/CategoriasProvider"
import {BebidasProvider} from "./context/BebidasProvider"
import ListadoBebidas from "./components/ListadoBebidas"

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <div className="container">
          <Formulario />
          <ListadoBebidas />

        </div>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App

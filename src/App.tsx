import Header from "./containers/Header"
import Produtos from "./containers/Produtos"
import { Container, EstiloGlobal } from "./styles"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <Produtos />
      </Container>
    </>
  )
}

export default App

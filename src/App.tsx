import Header from "./containers/Header"
import { Container, EstiloGlobal } from "./styles"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App

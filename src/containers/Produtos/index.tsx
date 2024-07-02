import Form from "../../components/Form"
import { Paragrafo } from "../../components/Form/styles"
import { Titulo } from "../../components/Title/styles"
import { Lista } from "./styles"

const Produtos = () => {
  return (
    <section>
      <Titulo fontSize={24}>Produtos</Titulo>
      <Paragrafo>Adicionar novo produto:</Paragrafo>
      <Form />
      <Lista>
      </Lista>
    </section>
  )
}

export default Produtos

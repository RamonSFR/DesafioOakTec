import BtnAddProd from "../../components/BtnAddProd"
import { Titulo } from "../../components/Title/styles"
import { Lista } from "./styles"

const Produtos = () => {
  return (
    <section>
      <Titulo fontSize={24}>Produtos</Titulo>
      <BtnAddProd />
      <Lista>

      </Lista>
    </section>
  )
}

export default Produtos

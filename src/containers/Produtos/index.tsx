import { useState } from "react"
import Form from "../../components/Form"
import { Paragrafo } from "../../components/Form/styles"
import Produto from "../../components/Produto"
import { Titulo } from "../../components/Title/styles"
import { Lista } from "./styles"

interface Produto {
  nome: string
  descricao: string
  preco: number
  disponivel: boolean
}

const Produtos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([])

  const adicionarProduto = (produto: Produto) => {
    setProdutos([...produtos, produto])
  }

  return (
    <section>
      <Titulo fontSize={24}>Produtos</Titulo>
      <Paragrafo>Adicionar novo produto:</Paragrafo>
      <Form adicionarProduto={adicionarProduto} />
      <Lista>
        {produtos.map((produto, index) => (
          <li key={index}><Produto produto={produto} /></li>
        ))}
      </Lista>
    </section>
  )
}

export default Produtos

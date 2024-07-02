import { Card } from "./styles"

interface ProdutoProps {
  produto: {
    nome: string
    descricao: string
    preco: number
    disponivel: boolean
  }
}

const Produto: React.FC<ProdutoProps> = ({ produto }) => {
  return (
    <Card>
      <p><b>Nome:</b> {produto.nome}</p>
      <p><b>Preço:</b> R${produto.preco}</p>
      <p><b>Disponível:</b> {produto.disponivel ? 'Sim' : 'Não'}</p>
    </Card>
  )
}

export default Produto

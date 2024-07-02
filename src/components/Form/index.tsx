import React, { useState } from 'react';
import { BtnAdd, FormArea, Formulario } from "./styles"

interface FormProps {
  adicionarProduto: (produto: Produto) => void
}

interface Produto {
  nome: string
  descricao: string
  preco: number
  disponivel: boolean
}

const Form: React.FC<FormProps> = ({ adicionarProduto }) => {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState(0)
  const [disponivel, setDisponivel] = useState('sim')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    adicionarProduto({ nome, descricao, preco, disponivel: disponivel === 'sim' })
    setNome('')
    setDescricao('')
    setPreco(0)
    setDisponivel('sim')
  }

  return (
    <FormArea>
      <Formulario onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
        />
        <select
          value={disponivel}
          onChange={(e) => setDisponivel(e.target.value)}
        >
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <BtnAdd type="submit">Adicionar Produto</BtnAdd>
      </Formulario>
    </FormArea>
  )
}

export default Form

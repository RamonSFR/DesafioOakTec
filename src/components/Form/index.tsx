import { BtnAdd, FormArea, Formulario } from "./styles"

const Form = () => {
  return (
    <FormArea>
      <Formulario>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Descrição" />
        <input type="number" placeholder="Preço" />
        <select>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <BtnAdd type="submit">Adicionar Produto</BtnAdd>
      </Formulario>
    </FormArea>
  )
}

export default Form

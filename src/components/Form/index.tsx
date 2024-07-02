import { BtnAdd, FormArea, Formulario } from "./styles"

const Form = () => {
  return (
    <FormArea>
      <Formulario>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Descrição" />
        <input type="number" placeholder="Preço" />
        <BtnAdd type="submit">Adicionar Produto</BtnAdd>
      </Formulario>
    </FormArea>
  )
}

export default Form

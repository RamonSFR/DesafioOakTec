import { Titulo } from "./styles"

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => <Titulo>{ props.children }</Titulo>

export default Title

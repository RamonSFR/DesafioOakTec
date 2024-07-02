import { Children } from "react"
import { Titulo } from "./styles"

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => {
  <Titulo>{ Children }</Titulo>
}

export default Title

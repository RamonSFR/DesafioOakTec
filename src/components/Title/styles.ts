import styled from "styled-components";
import { Props } from '.'

export const Titulo = styled.h1<Props>`
font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '16px'};
color: #333;
font-weight: bold;
`


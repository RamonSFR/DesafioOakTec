import styled from "styled-components"

export const FormArea = styled.div`
  width: 100%;
`

export const Paragrafo = styled.p`
margin-top: 32px;
margin-bottom: 8px;
`

export const Formulario = styled.form`
display: grid;
grid-template-columns: 3fr 3fr 3fr 1fr 3fr;
gap: 16px;

input, select {
  width: 100%;
  padding: 8px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #777;
  }
}

@media (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: 0px;

  input,select {
    border-radius: 0;
  }

  input:first-child {
    border-radius: 3px 3px 0 0;
  }
}
`


export const BtnAdd = styled.button`
padding: 8px;
color: #fff;
background-color: #01669e;
font-size: 12px;
border: 1px solid #01649e;
border-radius: 3px;
cursor: pointer;
margin-top: 16px
height: 30px;
transition: ease 0.5s;

&:hover {
  background-color: #005682;
  font-size: 13px;
}

@media (max-width: 768px) {
  border-radius: 0 0 3px 3px;
}
`

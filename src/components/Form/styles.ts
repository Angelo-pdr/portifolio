import styled from 'styled-components'
import { cores } from '../../models/cores'
import { Props } from "../../models/modelDark"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const AreaText = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`

export const Redes = styled.div`
  margin: 0 auto;
  max-width: 50%;
  height: 10%;
  display: flex;
  align-items center;
  justify-content: space-around;

  a{
    margin: 0px .5rem;

  }
`

export const FormArea = styled.form<Props>`
  width: 100%;
  max-height: 450px;
  height: 100%;
  padding 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px 1px ${(props) => (props.mode ? cores.shadowDark : cores.shadowLigh)};
  background-color: ${(props) => (props.mode ? cores.black : cores.white)};
  text-align: center;

  h1 {
    margin-bottom: .5rem;
  }

  .button {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    border-radius: 0.7rem;
    cursor: pointer;
    font-weight: bold;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => (props.mode ? cores.white : cores.black)};
    color: ${(props) => (props.mode ? cores.white : cores.black)};
    transition: ease 0.8s;

    &:hover {
      background-color: ${cores.black};
      color: ${cores.white};
    }
  }
`

export const Input = styled.input`
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: .5rem;
  border 1px solid ${cores.black}};
  padding: .5rem 1rem;
`
export const Textarea = styled.textarea`
  width: 100%;
  height: 50%;
  display: block;
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: .5rem;
  margin-bottom: 1rem;
  border: 1px solid ${cores.black}};
`

import styled from 'styled-components'
import { cores } from '../../models/cores'
import { Props } from '../../models/modelDark'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div<Props>`
  max-width: 960px;
  width: 100%;
  height: 480px;
  background-color: ${(props) => (props.mode ? cores.black : cores.white)};
  padding .5rem 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px 1px  ${(props) =>
    props.mode ? cores.shadowDark : cores.shadowLigh};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
    box-shadow: none;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`
export const AreaText = styled.div`
  display: block;
  width: 100%;
  max-height: 50%;

  h3 {
    margin: 0.5rem 0px;
  }

  P {
    margin-bottom: 0.5rem;
    text-align: justify;
  }
`

export const AreaImg = styled.div`
  width: 100%;
  height: 80%;

  img {
    margin-left: 2.5rem;
    max-width: 90%;
    height: 100%;
    display: block;
    object-fit: contain;
    @media (max-width: 700px) {
      margin: 0 auto;
      margin-top: 1rem;
    }
  }
`

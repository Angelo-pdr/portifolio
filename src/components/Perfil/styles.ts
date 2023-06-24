import styled from 'styled-components'
import { cores } from '../../models/cores'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  max-width: 960px;
  width: 100%;
  height: 480px;
  background-color: ${cores.white};
  padding .5rem 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px 1px ${cores.shadowLigh};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const AreaText = styled.div`
  display: block;
  width: 100%;
  height: 50%;

  h2 {
    margin: 0.5rem 0px;
  }

  P {
    margin-bottom: 0.5rem;
  }
`

export const AreaImg = styled.div`
  width: 100%;
  height: 80%;

  img {
    max-width: 90%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`
export const Button = styled.button`
  max-width: 250px;
  width: 100%;
  height: 35px;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.7rem;
  cursor: pointer;
  font-weight: bold;
  padding: 0.3rem 1rem;
  background-color: transparent;
  border: 2px solid ${cores.black};
  color: ${cores.black};
  transition: ease 0.8s;
  &:hover {
    background-color: ${cores.black};
    color: ${cores.white};
  }
`

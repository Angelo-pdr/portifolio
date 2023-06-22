import styled from 'styled-components'
import { cores } from '../../models/cores'

export const Container = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100%;
  background-color: ${cores.white};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const AreaImg = styled.div`
  width: 100%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .teste {
    background-color: black;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }
`
export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`

export const Links = styled.ul`
  width: 100%;
`
export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 2.5rem;

  a {
    font-size: 20px;
    margin-left: 0.5rem;
  }
`
export const Redes = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

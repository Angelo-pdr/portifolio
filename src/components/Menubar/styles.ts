import styled from 'styled-components'
import { cores } from '../../models/cores'

export const Container = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100vh;
  background-color: ${cores.white};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 1rem;
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
  padding: 0.8rem 2.5rem;
  padding-top: 0px;

  a {
    font-size: 20px;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`
export const Redes = styled.div`
  width: 100%;

  h3 {
    text-align: center;
    font-weight: 500;
  }
`

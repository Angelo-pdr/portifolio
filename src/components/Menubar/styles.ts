import styled from 'styled-components'
import { cores } from '../../models/cores'
import { Props } from "../../models/modelDark"


export const Container = styled.div<Props>`
  max-width: 250px;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.mode ? cores.black : cores.white)};
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
  text-align: center;
  margin-bottom: 0.5rem;
`

export const DarkMode = styled.div`
  width: 50px;
  height: 20px;
  background-color: transparent;
  border: 1px solid ${cores.black};
  border-radius: 1rem;
  position: relative;
  &.active {
    border: 1px solid ${cores.white};
  }

  .buttonIcon {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${cores.black};
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
  }

  .buttonIcon.active {
    background-color: ${cores.white};
    left: 32px;
  }
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
    transition: ease 0.6s;
  }
`

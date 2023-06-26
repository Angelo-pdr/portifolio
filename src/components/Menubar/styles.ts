import styled from 'styled-components'
import { cores } from '../../models/cores'
import { Props } from '../../models/modelDark'

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

  @media (max-width: 1115px) {
    min-width: 100%;
    max-height: 50px;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: inherit;
    justify-content: space-between;
  }
`

export const MobileMenu = styled.div<Props>`
  display: none;
  cursor: pointer;
  width: 20px;

  div {
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.mode ? cores.white : cores.black)};
    margin-bottom: 4px;
  }

  @media (max-width: 830px) {
    display: block;
  }
`

export const AreaImg = styled.div`
  max-width: 100%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1115px) {
    flex-direction: row;
    gap: 0.5rem;
  }

  .teste {
    background-color: black;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 1rem;
    @media (max-width: 1115px) {
      display: none;
    }
  }
`
export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
  @media (max-width: 1115px) {
    margin: 0;
  }
`
export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
  @media (max-width: 1115px) {
    display: none;
  }
`

export const Links = styled.ul<Props>`
  width: 100%;

  @media (max-width: 1115px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 12px;
    position: absolute;
    top: 8vh;
    right: 0;
    width: 50%;
    margin-top: -1.2rem;
    height: 90vh;
    background: ${(props) => (props.mode ? cores.black : cores.white)};
    transform: translateX(100%);
    border-radius: .5rem 0px  0px.5rem ;
  }

  &.active{
    transform: translateX(0%);
  }
`
export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.8rem 2.5rem;
  padding-top: 0px;

  @media (max-width: 1115px) {
    padding: 0px;
    padding-left: 5px;
  }

  @media (max-width: 830px) {
    opacity: 0;
  }

  &.active{
    opacity: 1;
  }

  a {
    font-size: 20px;
    margin-left: 0.5rem;
    cursor: pointer;
    transition: ease 0.6s;
    @media (max-width: 1115px) {
      font-size: 12px;
    }

    @media (max-width: 830px) {
      font-size: 1rem;
    }
  }
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

import styled from 'styled-components'
import { cores } from '../../models/cores'
import { Link, TagContainer } from '../Tag/styles'
import { Props } from '../../models/modelDark'

export const Container = styled.div<Props>`
  width: 80%;
  max-height: 100%;
  background-color: ${(props) => (props.mode ? cores.black : cores.white)};
  padding .5rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px 1px ${(props) =>
    props.mode ? cores.shadowDark : cores.shadowLigh};
  margin-bottom: 1rem;

  @media (max-width: 830px) {
    margin: 0px auto;
  }
`
export const CardImg = styled.div`
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
`

export const CardBody = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 1rem;
  padding: 0.5rem 0px;
`

export const About = styled.p`
  font-size: 12px;
  text-align: justify;
`

export const CardType = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${TagContainer} {
    display: inline-block;
  }
`
export const CardBottom = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${Link} {
    display: inline-block;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
  }
`

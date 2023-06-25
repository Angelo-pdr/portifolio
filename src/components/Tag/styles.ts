import styled from 'styled-components'
import { cores } from '../../models/cores'
import { Props } from "../../models/modelDark"

export const TagContainer = styled.div<Props>`
  background-color: ${(props) => (props.mode ? cores.white : cores.black)};
  font-size: 10px;
  color: ${(props) => (props.mode ? cores.black : cores.white)};
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 8px;
  display: inline-block;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
`

export const Link = styled.a<Props>`
  border: 2px solid ${(props) => (props.mode ? cores.white : cores.black)};
  background-color: ${(props) => (props.mode ? cores.black : cores.white)};
  font-size: 10px;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 8px;
  display: inline-block;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;

  &:hover {
    border: 2px solid ${(props) => (props.mode ? cores.white : cores.black)};
    background-color: ${(props) => (props.mode ? cores.white : cores.black)};
    color: ${(props) => (props.mode ? cores.black : cores.white)};
  }
`

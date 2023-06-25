import styled from 'styled-components'
import { cores } from '../../models/cores'

type Props = {
  percentage: number
  mode: boolean
}

export const Container = styled.div<Omit<Props, 'percentage'>>`
  min-width: 100%;
  max-height: 110px;
  background-color: ${(props) => (props.mode ? cores.black : cores.white)};
  padding .5rem 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px 1px $${(props) =>
    props.mode ? cores.shadowDark : cores.shadowLigh};
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`
export const CardImg = styled.div`
  width: 25%;

  img {
    display: block;
    width: 100%;
    height: 100%;
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

export const CardTop = styled.ul`
  width: 100%;
  display: flex;
  aling-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  P {
    display: block;
  }
`

export const CardType = styled.span`
  font-size: 12px;
`

export const CardBottom = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding-top: 1.5rem;

  .loading {
    width: 100%;
    height: 10px;
    background-color: ${(props) =>
      props.mode ? cores.shadowDark : cores.shadowLigh};
    border-radius: 0.8rem;

    .total {
      width: ${(props) =>
        props.percentage != 0 ? `${props.percentage}%` : '0%'};
      height: 100%;
      border-radius: 0.8rem;
      background-color: ${(props) => (props.mode ? cores.white : cores.black)};
    }
  }
`

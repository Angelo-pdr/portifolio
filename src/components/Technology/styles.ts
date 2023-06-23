import styled from 'styled-components'
import { cores } from '../../models/cores'
import { Percent } from 'lucide-react'

type Props = {
  percentage: number
}

export const Container = styled.div`
  min-width: 100%;
  max-height: 110px;
  background-color: ${cores.white};
  padding .5rem 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px 1px ${cores.shadowLigh};
  display: flex;
  gap: .5rem;
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
    background-color: #f2f2f2;
    border-radius: 0.8rem;

    .total {
      width: ${(props) =>
        props.percentage != 0 ? `${props.percentage}%` : '0%'};
      height: 100%;
      border-radius: 0.8rem;
      background-color: ${cores.black};
    }
  }
`

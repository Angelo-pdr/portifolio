import styled from 'styled-components'
import { cores } from '../../models/cores'

export const TagContainer = styled.div`
  background-color: ${cores.black};
  color: ${cores.white};
  font-size: 10px;
  font-weight: 400;
  padding: 4px 10px;
  border-radius: 8px;
  display: inline-block;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
`

export const Link = styled.a`
  border: 2px solid ${cores.black};
  background-color: ${cores.black};
  color: ${cores.white};
  font-size: 10px;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 8px;
  display: inline-block;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;

  &:hover {
    border: 2px solid ${cores.black};
    background-color: ${cores.white};
    color: ${cores.black};
  }
`

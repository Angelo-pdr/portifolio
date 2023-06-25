import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 830px) {
    width: 100%;
    margin: 1rem auto;
    padding: 0px 0.5rem;
  }
`
export const Title = styled.h1`
  width: 900px;
  margin: 2rem auto;

  @media (max-width: 830px) {
    width: 100%;
    margin: 1rem auto;
  }
`

export const AreaCads = styled.div`
  margin: 2rem auto;
  max-width: 900px;
  width: 100%;
  height: 100%;

  @media (max-width: 830px) {
    width: 100%;
    padding: 0.5rem;
    margin: 1rem auto;
  }
`

export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 830px) {
    padding: 0px 0.5rem;
    width: 100%;
    gap: 0.5rem;
    grid-template-columns: 1fr;
  }
`

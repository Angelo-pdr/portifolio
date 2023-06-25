import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const AreaSearch = styled.div`
  width: 900px;
  margin: 2rem auto;

  @media (max-width: 830px) {
    width: 100%;
    margin: 1rem auto;
  }

  h1{
    margin 1rem 0px;
  }

  input{
    max-width: 900px;
    width: 100%;
    padding 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
`

export const AreaCads = styled.div`
  margin: 2rem auto;
  max-width: 900px;
  width: 100%;
  height: 100%;
  @media (max-width: 830px) {
    width: 100%;
    margin: 1rem auto;
  }
`

export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 700px) {
    padding: 0px 0.5rem;
    width: 100%;
    gap: 0.5rem;
    grid-template-columns: 1fr;
  }
`

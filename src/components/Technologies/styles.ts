import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
`
export const AreaSearch = styled.div`
  width: 900px;
  margin: 2rem auto;

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
`

export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`

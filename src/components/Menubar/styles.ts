import styled from 'styled-components'

export const Container = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`

export const AreaImg = styled.div`
  width: 100%;
  height: 100%
  flex: 1;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .teste {
    background-color: black;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }
`
export const Title = styled.h1`
  font-size: 1rem;
`

export const Links = styled.ul`

`
export const LinkItem = styled.li`
  padding: .5rem 0px;
  text-align: center;
`
export const Redes = styled.footer`
  img{
    height: auto;
    padding 0px .5rem;
  }
`

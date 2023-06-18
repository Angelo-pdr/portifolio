import { createGlobalStyle } from 'styled-components'

const GlobalCss = createGlobalStyle`
 *{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  color: #2F51C2;
}
  body{
    width: 100%;
    height: 100%;
    background-color: #E1E7F8;
  }

  .container{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
  }

  .content{
    flex: 1;
    padding: .8rem 1rem;

  }

 `

export default GlobalCss

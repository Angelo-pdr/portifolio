import { createGlobalStyle } from 'styled-components'
import { cores } from '../models/cores'

const GlobalCss = createGlobalStyle`
 *{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    color: ${cores.black};
    list-style: none;
    text-decoration: none;
  }

  body{
    width: 100%;
    height: 100%;
    background-color: ${cores.bgLight};
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

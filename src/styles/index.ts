import { createGlobalStyle } from 'styled-components'
import { cores } from '../models/cores'
import { Props } from "../models/modelDark"

const GlobalCss = createGlobalStyle<Props>`
 *{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    color: ${(props) => (props.mode ? cores.white : cores.black)};
    list-style: none;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    transition: ease 0.6s;
  }

  body{
    width: 100%;
    height: 100vh;
    background-color: ${ (props) => props.mode ? cores.bgDark : cores.bgLight };
  }

  .container{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .content{
    width: 100%;
    height: 100%;
    position: relative;
    margin-left: 16.3rem;
    padding: .8rem 1rem;
  }
 `

export default GlobalCss

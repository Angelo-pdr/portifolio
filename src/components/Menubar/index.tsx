import { Link } from 'react-router-dom'
import { Container, AreaImg, Title, Links, LinkItem, DarkMode } from './styles'

import {
  FolderOpen,
  Home,
  LayoutDashboard,
  PhoneCall,
  UserCircle2
} from 'lucide-react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../stores'
import { changeColor } from '../../stores/reducers/buttonDark'
import { cores } from '../../models/cores'

const MenuBar = () => {
  const { buttonDark } = useSelector((state: RootState) => state.mode)
  const dispatch = useDispatch()
  console.log(buttonDark)
  return (
    <Container mode={buttonDark}>
      <AreaImg>
        <div className="teste"></div>
        <Title>Angelo Pedrosa</Title>
        <DarkMode
          onClick={(event) => dispatch(changeColor(!buttonDark))}
          className={buttonDark ? 'active' : ''}
        >
          <div
            className={buttonDark ? ' buttonIcon active' : 'buttonIcon'}
          ></div>
        </DarkMode>
      </AreaImg>
      <Links>
        <LinkItem>
          <Home
            size={20}
            style={{ transition: 'ease .6s' }}
            color={buttonDark ? cores.white : cores.black}
          />
          <Link to="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <UserCircle2
            size={20}
            style={{ transition: 'ease .6s' }}
            color={buttonDark ? cores.white : cores.black}
          />
          <Link to="/about">Sobre</Link>
        </LinkItem>
        <LinkItem>
          <PhoneCall
            size={20}
            style={{ transition: 'ease .6s' }}
            color={buttonDark ? cores.white : cores.black}
          />
          <Link to="/contact">Contato</Link>
        </LinkItem>
        <LinkItem>
          <FolderOpen
            size={20}
            style={{ transition: 'ease .6s' }}
            color={buttonDark ? cores.white : cores.black}
          />
          <Link to="/project">Projetos</Link>
        </LinkItem>
        <LinkItem>
          <LayoutDashboard
            size={20}
            style={{ transition: 'ease .6s' }}
            color={buttonDark ? cores.white : cores.black}
          />
          <Link to="/skills">Habilidades</Link>
        </LinkItem>
      </Links>
      <Title>
        &copy;2023 Portfolio - Todos direitos reservados
      </Title>
    </Container>
  )
}

export default MenuBar

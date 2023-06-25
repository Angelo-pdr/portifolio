import { Link } from 'react-router-dom'
import {
  Container,
  AreaImg,
  Title,
  Links,
  LinkItem,
  DarkMode,
  SubTitle,
  MobileMenu
} from './styles'

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
import { useState } from 'react'

const MenuBar = () => {
  const { buttonDark } = useSelector((state: RootState) => state.mode)
  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch()

  return (
    <Container mode={buttonDark}>
      <AreaImg>
        <div className="teste"></div>
        <Title>Angelo Pedrosa</Title>
        <DarkMode
          onClick={() => dispatch(changeColor(!buttonDark))}
          className={buttonDark ? 'active' : ''}
        >
          <div
            className={buttonDark ? ' buttonIcon active' : 'buttonIcon'}
          ></div>
        </DarkMode>
      </AreaImg>
      <MobileMenu mode={buttonDark} onClick={() => setShowMenu(!showMenu)}>
        <div className="lien1"></div>
        <div className="lien2"></div>
        <div className="lien3"></div>
      </MobileMenu>
      <nav>
        <Links mode={buttonDark} className={showMenu ? 'active': ''}>
          <LinkItem className={showMenu ? 'active': ''}>
            <Home
              size={20}
              style={{ transition: 'ease .6s' }}
              color={buttonDark ? cores.white : cores.black}
            />
            <Link to="/">Home</Link>
          </LinkItem>
          <LinkItem className={showMenu ? 'active': ''}>
            <UserCircle2
              size={20}
              style={{ transition: 'ease .6s' }}
              color={buttonDark ? cores.white : cores.black}
            />
            <Link to="/about">Sobre</Link>
          </LinkItem>
          <LinkItem className={showMenu ? 'active': ''}>
            <PhoneCall
              size={20}
              style={{ transition: 'ease .6s' }}
              color={buttonDark ? cores.white : cores.black}
            />
            <Link to="/contact">Contato</Link>
          </LinkItem>
          <LinkItem className={showMenu ? 'active': ''}>
            <FolderOpen
              size={20}
              style={{ transition: 'ease .6s' }}
              color={buttonDark ? cores.white : cores.black}
            />
            <Link to="/project">Projetos</Link>
          </LinkItem>
          <LinkItem className={showMenu ? 'active': ''}>
            <LayoutDashboard
              size={20}
              style={{ transition: 'ease .6s' }}
              color={buttonDark ? cores.white : cores.black}
            />
            <Link to="/skills">Habilidades</Link>
          </LinkItem>
        </Links>
      </nav>
      <SubTitle>&copy;2023 Portfolio - Todos direitos reservados</SubTitle>
    </Container>
  )
}

export default MenuBar

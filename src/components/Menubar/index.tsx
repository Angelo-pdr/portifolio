import { Link } from 'react-router-dom'
import { Container, AreaImg, Title, Links, LinkItem, Redes } from './styles'
import {
  FolderOpen,
  Home,
  LayoutDashboard,
  PhoneCall,
  UserCircle2
} from 'lucide-react'

import gitHubLight from '../../asserts/icons/bg-light/github.png'
import gmailLight from '../../asserts/icons/bg-light/gmail.png'
import linkedinLight from '../../asserts/icons/bg-light/linkedin.png'

const MenuBar = () => (
  <Container>
    <AreaImg>
      <div className="teste"></div>
      <Title>Angelo Pedrosa</Title>
      <Title>Desenvolvedor Full Stack</Title>
    </AreaImg>
    <Links>
      <LinkItem>
        <Home size={20} />
        <Link to="/">Home</Link>
      </LinkItem>
      <LinkItem>
        <UserCircle2 size={20} />
        <a href="#">Sobre</a>
      </LinkItem>
      <LinkItem>
        <PhoneCall size={20} />
        <a href="#">Contato</a>
      </LinkItem>
      <LinkItem>
        <FolderOpen size={20} />
        <a href="#">Projetos</a>
      </LinkItem>
      <LinkItem>
        <LayoutDashboard size={20} />
        <Link to="/skills">Habilidades</Link>
      </LinkItem>
    </Links>
    <Redes>
      <h3>&copy;2023 Portfolio - Todos direitos reservados</h3>
    </Redes>
  </Container>
)

export default MenuBar

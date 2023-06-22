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
        <a href="#">Home</a>
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
        <a href="#">Dashboard</a>
      </LinkItem>
    </Links>
    <Redes>
      <a href="https://github.com/Angelo-pdr">
        <img src={gitHubLight} alt="github" />
      </a>
      <a href="angelopedrosa00@gmail.com">
        <img src={gmailLight} alt="gmail" />
      </a>
      <a href="https://www.linkedin.com/in/angelo-pedrosa/">
        <img src={linkedinLight} alt="linkedin" />
      </a>
    </Redes>
  </Container>
)

export default MenuBar

import { Container, AreaImg, Title, Links, LinkItem, Redes } from './styles'
import { FolderOpen, Home, LayoutDashboard, PhoneCall, UserCircle2  } from 'lucide-react'

import gitHubLight from "../../asserts/icons/bg-light/github.png"
import gmailLight from "../../asserts/icons/bg-light/gmail.png"
import linkedinLight from "../../asserts/icons/bg-light/linkedin.png"

const MenuBar = () => (
  <Container>
    <AreaImg>
      <div className='teste'>
      </div>
      <Title>Angelo Pedrosa</Title>
      <Title>Desenvolvedor Full Stack</Title>
    </AreaImg>
    <Links>
      <LinkItem> <Home  /> <a href="#">Home</a></LinkItem>
      <LinkItem> <UserCircle2  /> <a href="#">Sobre</a></LinkItem>
      <LinkItem> <PhoneCall /> <a href="#">Contato</a></LinkItem>
      <LinkItem> <FolderOpen /> <a href="#">Projetos</a></LinkItem>
      <LinkItem> <LayoutDashboard /> <a href="#">Dashboard</a></LinkItem>
    </Links>
    <Redes>
      <img src={gitHubLight} alt="github" />
      <img src={gmailLight} alt="gmail" />
      <img src={linkedinLight} alt="linkedin" />
    </Redes>
  </Container>
)

export default MenuBar

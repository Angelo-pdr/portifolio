import { Container, Content, AreaText, AreaImg, Button } from './styles'

import pc from '../../asserts/pc.png'

const Perfil = () => (
  <Container>
    <Content>
      <AreaText>
        <span>Desenvolvedor Full Stack</span>
        <h2>Angelo Pedrosa</h2>
        <p>
          Olá mundo! Este é o meu portfólio pessoal, onde você pode encontrar um
          pouco mais sobre mim e o meu trabalho.
        </p>
        <Button>BAIXAR CURRÍCULO</Button>
      </AreaText>
      <AreaImg>
        <img src={pc} alt="Home no computador" />
      </AreaImg>
    </Content>
  </Container>
)

export default Perfil

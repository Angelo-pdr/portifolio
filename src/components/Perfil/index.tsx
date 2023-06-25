import { Container, Content, AreaText, AreaImg, Button } from './styles'

import pc from '../../asserts/pc.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores'

const Perfil = () => {
  const { buttonDark } = useSelector((state: RootState) => state.mode)
  return (
    <Container>
      <Content mode={buttonDark}>
        <AreaText>
          <span>Desenvolvedor Full Stack</span>
          <h2>Angelo Pedrosa</h2>
          <p>
            Olá mundo! Este é o meu portfólio pessoal, onde você pode encontrar
            um pouco mais sobre mim e o meu trabalho.
          </p>
          <Button mode={buttonDark}>BAIXAR CURRÍCULO</Button>
        </AreaText>
        <AreaImg>
          <img src={pc} alt="Home no computador" />
        </AreaImg>
      </Content>
    </Container>
  )
}

export default Perfil

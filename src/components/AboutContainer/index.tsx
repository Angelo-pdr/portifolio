import { Container, Content, AreaText, AreaImg } from './styles'

import noteb from '../../asserts/noteb.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores'

const AboutContainer = () => {
  const { buttonDark } = useSelector((state: RootState) => state.mode)

  return (
    <Container>
      <Content mode={buttonDark}>
        <AreaText>
          <h3>Meu nome é Angelo da Silva Pedrosa</h3>
          <p>
            Desenvolvedor de software web e mobile, apaixonado pelo mundo da
            tecnologia. Gosto de resolver problemas, quebrando-os em pequenos
            pedaços e resolvendo-os pouco a pouco. Sou entusiasta dos métodos
            ágeis, de ambientes flexíveis e desafiadores.
          </p>
          <br />
          <p>
            <b>Idade</b>: 23 <br />
            <b>Nacionalidade</b>: Brasileiro <br />
            <b>Idiomas</b>: Português fluente e Inglês iniciante <br />
            <b>Localização</b>: Minas Gerais, Brasil <br />
          </p>
        </AreaText>
        <AreaImg>
          <img src={noteb} alt="homem no computador" />
        </AreaImg>
      </Content>
    </Container>
  )
}

export default AboutContainer

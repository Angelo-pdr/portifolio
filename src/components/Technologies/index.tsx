import { useSelector } from 'react-redux'
import Technology from '../Technology'
import { Container, AreaSearch, AreaCads, Items } from './styles'
import { RootState } from '../../stores'

const Technologies = () => {
  const { technos } = useSelector((state: RootState) => state.technos)

  return (
    <Container>
      <AreaSearch>
        <h1>MY SKILLS</h1>
        <input type="text" placeholder="Pesquisa" />
      </AreaSearch>
      <AreaCads>
        <Items>
          {technos.map((techno) => (
            <li key={techno.id}>
              <Technology techno={techno} />
            </li>
          ))}
        </Items>
      </AreaCads>
    </Container>
  )
}

export default Technologies

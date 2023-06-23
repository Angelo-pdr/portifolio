import { useSelector } from 'react-redux'
import Technology from '../Technology'
import { Container, AreaSearch, AreaCads, Items } from './styles'
import { RootState } from '../../stores'
import { useState } from 'react'

const Technologies = () => {
  const { technos } = useSelector((state: RootState) => state.technos)
  const [search, setSearch] = useState('')

  function filterTechno() {
    let filtered = technos
    if (search != '') {
      filtered = filtered.filter(
        (item) =>
          item.title.toLocaleLowerCase().search(search.toLocaleLowerCase()) >= 0
      )

      return filtered
    } else {
      return technos
    }
  }

  return (
    <Container>
      <AreaSearch>
        <h1>MY SKILLS</h1>
        <input
          type="text"
          placeholder="Pesquisa..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </AreaSearch>
      <AreaCads>
        <Items>
          {filterTechno().map((techno) => (
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

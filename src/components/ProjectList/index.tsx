import { useSelector } from 'react-redux'
import Project from '../Project'
import { Container, Title, AreaCads, Items } from './styles'
import { RootState } from '../../stores'

const ProjectList = () => {
  const { projects } = useSelector((state: RootState) => state.proje)

  return (
    <Container>
      <Title>MY PROJECTS</Title>
      <AreaCads>
        <Items>
          {projects.map((proje) => (
            <li key={proje.id}>
              <Project proje={proje} />
            </li>
          ))}
        </Items>
      </AreaCads>
    </Container>
  )
}

export default ProjectList

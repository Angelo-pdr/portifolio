import ProjectProps from '../../models/proje'
import Tag from '../Tag'

import {
  Container,
  CardImg,
  CardBody,
  CardType,
  CardBottom,
  About,
  Title
} from './styles'

type Props = {
  proje: ProjectProps
}

const Project = ({ proje }: Props) => (
  <Container>
    <CardImg>
      <img src={proje.img} alt="lista de contatos" />
    </CardImg>
    <CardBody>
      <Title>{proje.title}</Title>
      <CardType>
        {proje.technos.map((techno) => (
          <Tag type="tag" key={techno}>
            {techno}
          </Tag>
        ))}
      </CardType>
      <About>{proje.about}</About>
      <CardBottom>
        <div>
          {proje.links.map((item) => (
            <Tag type="link" key={item.name} link={item.link}>
              {item.name}
            </Tag>
          ))}
        </div>
      </CardBottom>
    </CardBody>
  </Container>
)

export default Project

import TechnologyProps from '../../models/technology'
import {
  Container,
  CardImg,
  CardBody,
  CardTop,
  CardBottom,
  CardType
} from './styles'

type technoProps = {
  techno: TechnologyProps
}



const Technology = ({ techno }: technoProps) => (
  <Container>
    <CardImg>
      <img src={techno.img} alt="" />
    </CardImg>
    <CardBody>
      <CardTop>
        <p>{techno.title}</p>
        <p>{techno.percentage}%</p>
      </CardTop>
      <CardType>{techno.type}</CardType>
      <CardBottom percentage={techno.percentage}>
        <div className="loading">
          <div className="total"></div>
        </div>
      </CardBottom>
    </CardBody>
  </Container>
)

export default Technology

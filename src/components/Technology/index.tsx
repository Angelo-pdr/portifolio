import TechnologyProps from '../../models/technology'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores'
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

const Technology = ({ techno }: technoProps) => {
  const { buttonDark } = useSelector((state: RootState) => state.mode)
  return(
    <Container mode={buttonDark}>
    <CardImg>
      <img src={techno.img} alt="" />
    </CardImg>
    <CardBody>
      <CardTop>
        <p>{techno.title}</p>
        <p>{techno.percentage}%</p>
      </CardTop>
      <CardType>{techno.type}</CardType>
      <CardBottom percentage={techno.percentage} mode={buttonDark}>
        <div className="loading">
          <div className="total"></div>
        </div>
      </CardBottom>
    </CardBody>
  </Container>
  )
}
export default Technology

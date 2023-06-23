class TechnologyProps {
  id: number
  img: string
  percentage: number
  title: string
  type: string
  constructor(
    id: number,
    img: string,
    percentage: number,
    title: string,
    type: string
  ) {
    this.id = id
    this.img = img
    this.percentage = percentage
    this.title = title
    this.type = type
  }
}

export default TechnologyProps

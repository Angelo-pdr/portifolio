class ProjectProps {
  id: number
  img: string
  title: string
  about: string
  technos: string[]
  links: any[]
  constructor(
    id: number,
    img: string,
    title: string,
    about: string,
    technos: string[],
    links: any[]
  ) {
    this.id = id
    this.img = img
    this.title = title
    this.about = about
    this.technos = technos
    this.links = links
  }
}

export default ProjectProps

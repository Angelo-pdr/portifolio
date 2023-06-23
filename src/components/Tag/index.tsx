import React from 'react'
import { TagContainer, Link } from './styles'

export type Props = {
  type: 'link' | 'tag'
  link?: string
  children: string
}

const Tag = ({ type = 'tag', children, link }: Props) => {
  if(type == 'tag'){
    return(
      <TagContainer >{children}</TagContainer>
    )
  }
  return(
    <Link href={link} >{children}</Link>
  )
}

export default Tag

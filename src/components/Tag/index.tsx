import React from 'react'
import { TagContainer, Link } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores'

export type Props = {
  type: 'link' | 'tag'
  link?: string
  children: string
}

const Tag = ({ type = 'tag', children, link }: Props) => {
  const { buttonDark } = useSelector((state: RootState) => state.mode)
  if (type == 'tag') {
    return <TagContainer mode={buttonDark}>{children}</TagContainer>
  }
  return <Link mode={buttonDark} href={link}>{children}</Link>
}

export default Tag

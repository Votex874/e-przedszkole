import React from 'react'
import styled from 'styled-components'

const Item = styled.p`
 text-align: center;
 margin: 15px 0;
`

const ListItem = ({ content }) => {
  return (
    <Item>-{content}</Item>
  )
}

export default ListItem
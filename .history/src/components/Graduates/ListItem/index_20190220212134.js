import React from 'react'
import styled from 'styled-components'

const Item = styled.span`

`

const ListItem = ({ content }) => {
  return (
    <Item>{content}</Item>
  )
}

export default ListItem
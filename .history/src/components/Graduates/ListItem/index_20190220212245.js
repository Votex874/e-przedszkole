import React from 'react'
import styled from 'styled-components'

const Item = styled.p`
  text-align: center;
  margin: 10px 0;
  line-height: 20px;
  color: #fff;
`

const ListItem = ({ content }) => {
  return (
    <Item>- {content}</Item>
  )
}

export default ListItem
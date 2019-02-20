import React from 'react';
import styled from 'styled-components'

const Header = styled.header`

`
const TitleHeader = styled.h2`

`


const Content = ({ content }) => {
  return (
    <Header>
      <TitleHeader>{content}</TitleHeader>
    </Header>
  )
}

export default Content;
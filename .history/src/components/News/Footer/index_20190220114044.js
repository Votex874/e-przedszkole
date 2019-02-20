import React from 'react';
import styled from 'styled-components'

const Header = styled.header`

`
const TitleHeader = styled.h2`

`


const Footer = ({ author, date }) => {
  return (
    <Header>
      <TitleHeader>{author}</TitleHeader>
    </Header>
  )
}

export default Footer;
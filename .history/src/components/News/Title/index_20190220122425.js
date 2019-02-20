import React from 'react';
import styled from 'styled-components'

const Header = styled.header`

`
const TitleHeader = styled.h2`
  color: #fff;
  letter-spacing: 1px;
  @media (max-width: 767px){
    font-size: 16px;
  }
`


const Title = ({ title }) => {
  return (
    <Header>
      <TitleHeader>{title}</TitleHeader>
    </Header>
  )
}

export default Title;
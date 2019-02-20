import React from 'react';
import styled from 'styled-components'
import { turquoise } from '../../../constColors'

const Header = styled.header`

`
const TitleHeader = styled.h2`
  color: ${turquoise};
  @media (max-width: 767px){
    font-size: 18px;
    margin: 10px 0;
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
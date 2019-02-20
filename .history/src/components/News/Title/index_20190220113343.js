import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.header`

`
const TitleHeader = styled.h2`

`


const Title = ({title}) => {
  console.log(title)
  return (
    <Header>
      <TitleHeader>1</TitleHeader>
    </Header>
  )
}

export default Title;
import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.header`

`
const TitleHeader = styled.h2`

`


const Title = (props) => {
  console.log(props)
  return (
    <Header>
      <Title>1</Title>
    </Header>
  )
}

export default Title;
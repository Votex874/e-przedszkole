import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.header`

`
const Title = styled.h2`

`


const Title = ({ title }) => {
  return (
    <Header>
      <Title>{title.title}</Title>
    </Header>
  )
}

export default Title;
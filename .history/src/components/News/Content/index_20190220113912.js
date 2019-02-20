import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.header`

`
const TitleHeader = styled.h2`

`


const Title = ({ title }) => {
  return (
    <Header>
      <TitleHeader>{title}</TitleHeader>
    </Header>
  )
}

export default Title;
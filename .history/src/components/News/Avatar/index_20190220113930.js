import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.header`

`
const TitleHeader = styled.h2`

`


const Avatar = ({ imageName }) => {
  return (
    <Header>
      <TitleHeader>{imageName}</TitleHeader>
    </Header>
  )
}

export default Avatar;
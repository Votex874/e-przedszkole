import React, { Component } from 'react';
import styled from 'styled-components'
import { brown } from '../../constColors'

const Alink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  text-decoration: none;
  font-size: 36px;

  @media (max-width: 767px) {
    font-size: 28px;
    align-items: flex-start;
    justify-content: flex-start;
  }
`
const Span = styled.span`
  color: ${brown};
`
const Bold = styled.b`
  font-weight: bold;
`

class Logo extends Component {
  constructor(props){
    super(props)

    this.state = {
      logoLink: '#'
    }
  }
  render() {
    const { logoLink } = this.state;
    return (
      <Alink href={logoLink}>
        <Span><Bold>e</Bold> - <Bold>szkole</Bold></Span>
      </Alink>
    );
  }
}

export default Logo;
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
  font-weight: bold;
  text-decoration: none;
  font-size: 36px;
  @media (max-width: 700px) {
    font-size: 24px;
  }
`
const Span = styled.span`
  color: ${brown};
`

class Logo extends Component {
  render() {
    return (
      <Alink>
        <Span>e-szkole</Span>
      </Alink>
    );
  }
}

export default Logo;
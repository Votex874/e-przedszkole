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

  @media (max-width: 700px) {
    font-size: 24px;
    align-items: flex-start;
    margin-left: 15px;
  }
`
const Span = styled.span`
  color: ${brown};
`
const Bold = styled.b`
  font-weight: bold;
`

class Logo extends Component {
  render() {
    return (
      <Alink>
        <Span><Bold>e</Bold> - <Bold>szkole</Bold></Span>
      </Alink>
    );
  }
}

export default Logo;
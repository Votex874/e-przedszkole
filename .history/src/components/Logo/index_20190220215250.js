import React, { Component } from 'react';
import styled from 'styled-components'
import { shineOnHover, lightBlue } from '../../constColors'


const Alink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 225px;
  padding: 0 10px;
  text-decoration: none;
  font-size: 50px;
  @media (max-width: 767px) {
    width: 150px;
    height: auto;
    font-size: 28px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
  }
  @media (min-width: 768px) and (max-width: 1400px) {
    width: 150px;
    font-size: 30px;
    padding: 0;
  }
  @media (min-width: 1401px){
    ${shineOnHover}
  }
`
const Span = styled.span`
  color: ${lightBlue};
  transition: .2s;
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
        <Span id='logo' className="logo2"><Bold>e</Bold> - <Bold>szkole</Bold></Span>
      </Alink>
    );
  }
}

export default Logo;
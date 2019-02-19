import React, { Component } from 'react';
import styled from 'styled-components'

const Alink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  text-decoration: none;
  font-size: 40px;

  @media (max-width: 767px) {
    height: auto;
    font-size: 28px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 30px;
  }
`
const Span = styled.span`
  color: #fff;
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
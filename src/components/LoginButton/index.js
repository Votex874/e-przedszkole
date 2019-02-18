import React, { Component } from 'react';
import styled from 'styled-components'
import imgUser from '../../images/icons/loginUser'

const ButtonAlink = styled.a`
  width: 100px;
  height: 40px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
`

const IconImg = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const SpanText = styled.span`
  color: #fff;
`

class LoginButton extends Component {
  constructor(props){
    super(props)

    this.state = {
      loginLink: '#'
    }
  }
  render() {
    const { loginLink } = this.state;
    return (
      <ButtonAlink href={loginLink}>
        <SpanText>login</SpanText>
        <IconImg src={imgUser} />
      </ButtonAlink>
    );
  }
}

export default LoginButton;
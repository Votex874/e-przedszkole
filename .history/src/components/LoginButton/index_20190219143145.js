import React, { Component } from 'react';
import styled from 'styled-components'
import imgUser from '../../images/icons/loginUser.svg'

const ButtonAlink = styled.a`
  width: 100px;
  height: 40px;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  margin: 100px 0 0 0;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #fff;
`

const IconImg = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 26px;
  height: 26px;
  margin-left: 15px;
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
        <SpanText>zaloguj się</SpanText>
        <IconImg src={imgUser} />
      </ButtonAlink>
    );
  }
}

export default LoginButton;
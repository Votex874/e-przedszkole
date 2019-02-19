import React, { Component } from 'react';
import styled from 'styled-components'
import imgUser from '../../images/icons/loginUser.png'

const ButtonAlink = styled.a`
  width: 200px;
  height: 30px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 3px solid #fff;
  @media (max-width: 767px){      
    position: absolute;
    top: 15px;
    left: 10px;
    width: 220px;
    height: 40px;
    font-size: 24px;
  }
  @media (min-width: 768px) and (max-width: 1200px){
    width: 30px;
  }
`

const IconImg = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 15px;
  width: 14px;
  height: 14px;
  @media (max-width: 767px){
    width: 26px;
    height: 26px;
  }
  @media (min-width: 768px) and (max-width: 1200px){
    margin-left: 0;
  }
`
const SpanText = styled.span`
  color: #fff;
  display: block;
  @media (min-width: 768px) and (max-width: 1200px){
    display: none;
  }
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
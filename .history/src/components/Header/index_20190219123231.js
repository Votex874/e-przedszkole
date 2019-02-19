import React, { Component } from 'react';
import styled from 'styled-components'
import Logo from '../Logo/index'
import Navigation from '../Nav/index'

const Header = styled.header`
 max-width: 1200px;
 height: 100px;
 margin: 0 auto;
`

class HeaderMain extends Component {

  componentDidMount = () => {
    console.log(window)
  }

  render() {
    return (
      <Header>
        <Navigation />
        <Logo />
      </Header>
    ); 
  }
}

export default HeaderMain;
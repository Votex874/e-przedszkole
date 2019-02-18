import React, { Component } from 'react';
import Logo from '../Logo/index'

const Header = styled.header`
 max-width: 1200px;
 height: 100px;
 margin: 0 auto;
`

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
      </header>
    ); 
  }
}

export default Header;
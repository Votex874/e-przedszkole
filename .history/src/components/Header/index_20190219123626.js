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
  constructor(props){
    super(props)

    this.state = {
      width: 0
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  render() {
    console.log(this.state.width)
    return (
      <Header>
        <Navigation />
        <Logo />
      </Header>
    ); 
  }
}

export default HeaderMain;
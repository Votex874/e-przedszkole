import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import SingleLink from './Link/index'

const Nav = styled.nav`

`

class Navigation extends Component {
  render() {
    console.log(this.props.links) 
    const { links } = this.props;
    const listOfLinks = links.forEach(e => console.log(e))
    return (
      <Nav>
        {listOfLinks}
      </Nav>
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect(mapStateToProps)(Navigation);
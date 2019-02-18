import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import Link from './Link/index'

const Nav = styled.nav`

`

class Navigation extends Component {
  render() {
    console.log(this.props) 
    const { links } = this.props;
    return (
      <Nav>
        {links.map( link => {
          return <Link data={link} />
        })}
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
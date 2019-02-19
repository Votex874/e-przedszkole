import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import SingleLink from './Link/index'
import Hamburger from '../Hamburger/index'

const Nav = styled.nav`

`

class Navigation extends Component {
  render() {
    const { links } = this.props;
    let listOfLinks = [];
    let i = 0;
    for (const key of Object.keys(links)) {
      // console.log(key, links[key]);
      listOfLinks[i] = <SingleLink data={links[key]} key={key} />
      i++;
    }
    return (
      <Nav>
        {listOfLinks}
        <Hamburger />
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
import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import SingleLink from './Link/index'
import LoginButton from './../LoginButton/index';


const Nav = styled.nav`
  display: flex;
  
  @media (max-width: 767px){  
    flex-direction: column;
    margin-top: calc(50% -130px);
  }
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
      <React.Fragment>
        <Nav>
          {listOfLinks}
        </Nav>
        <LoginButton />  
      </React.Fragment>
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect(mapStateToProps)(Navigation);
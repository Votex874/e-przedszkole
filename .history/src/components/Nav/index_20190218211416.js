import { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

const Nav = styled.nav`

`

class Navigation extends Component {
  render() {
    console.log(this.props) 
    const { links } = this.props;
    return (
      <Nav>
        {links.map( link => {
          return 
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
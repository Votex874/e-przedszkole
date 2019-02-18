import React, { Component } from 'react';
import Link from './Link/index'
import styled from 'styled-components'
import { connect } from 'react-redux'



class Navigation extends Component {
  render() {
    console.log(this.props.links)
    return (
      1 
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect()(Navigation);
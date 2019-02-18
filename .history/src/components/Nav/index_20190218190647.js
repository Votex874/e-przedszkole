import React, { Component } from 'react';
import Link from './Link/index'
import styled from 'styled-components'
import { connect } from 'react-redux'



class Navigation extends Component {
  constructor(props){
    super(props)

    this.state = {
      links: {
        home: {
          name: 'strona główna',
          url: '/'
        },
        news: {
          name: 'aktualności',
          url: '/blog'
        },
        about: {
          name: 'o nas',
          url: '/o-nas'
        },
        contact: {
          name: 'kontakt',
          url: '/kontakt'
        },
        panel: {
          name: 'panel',
          url: '/panel'
        },
        recruitment: {
          name: 'rekrutacja',
          url: '/rekrutacja'
        }
      }
    }
  }
  render() {
    console.log(this.props.links)
    return (
      1
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect()(Navigation);
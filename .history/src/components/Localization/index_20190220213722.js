import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SectionTitle from '../SectionTitle/index'
import IconTitle from '../../images/icons/graduation.png'
import ListItem from './ListItem/index'

const SectionAbout = styled.section`
 
  @media (max-width: 767px){

  }
  @media (min-width: 768px) and (max-width: 1400px){
  }
`

class Lozalization extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'nasi absolwenci'
    }
  }

  render() {
    return (
      1
    )
  }
}

export default Lozalization;
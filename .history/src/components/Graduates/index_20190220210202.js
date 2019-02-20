import React, { Component } from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/index'
import IconTitle from '../../images/icons/graduation.png'

const SectionAbout = styled.section`
  width: 60%;
  margin: 50px auto;
  @media (max-width: 767px){
    width: 94%;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 65%;
  }
`

class Graduates extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'nasi absolwenci'
    }
  }

  render() {
    const { title, content } = this.state
    return (
      <SectionAbout>
        <SectionTitle title={title} img={IconTitle} />
      </SectionAbout>
    )
  }
}


export default Graduates;
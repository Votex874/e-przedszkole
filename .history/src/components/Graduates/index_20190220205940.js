import React, { Component } from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/index'
import IconTitle from '../../images/icons/graduation.png'
import Content from './Content/index'

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

class AboutUs extends Component {
  constructor(props) {
    super(props)

    this.state = {
     
    }
  }

  render() {
    const { title, content } = this.state
    return (
      <SectionAbout>
        <SectionTitle title={title} img={IconTitle} />
        <Content content={content} />
      </SectionAbout>
    )
  }
}


export default AboutUs;
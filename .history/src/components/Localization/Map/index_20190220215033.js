import React, { Component } from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/index'
import IconTitle from '../../images/icons/map.png'

const SectionAbout = styled.section`
 
  @media (max-width: 767px){

  }
  @media (min-width: 768px) and (max-width: 1400px){
  }
`

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <SectionAbout>
        1
      </SectionAbout>
    )
  }
}

export default Map;
import React, { Component } from 'react';
import styled from 'styled-components'
import hamburgerImg from '../../images/icons/hamburger.svg'
import times from '../../images/icons/times.svg'

const Hamburger = styled.div`
  width: 40px;
  height: 40px;
`

const HamburgerImg = styled.img`
  opacity: 1;
  transition: .2s;
`

class Hambuger extends Component {
  constructor(props){
    super(props)

    this.state = {
      imgAlt: 'hamburgerMenuIcon',
      imgSrc: hamburgerImg
    }
  }

  handleHamburger = () => {
    const { imgSrc } = this.state;
    if(imgSrc !== hamburgerImg){
      this.setState({ imgSrc: hamburgerImg })
    } else {
      console.log('tak')
      this.setState({ imgSrc: times })
    }
  }

  render() {
    const { imgAlt, imgSrc } = this.state
    return (
      <Hamburger>
        <HamburgerImg src={imgSrc} alt={imgAlt} onClick={this.handleHamburger}/>
      </Hamburger>
    );
  }
}


export default Hambuger;
import React, { Component } from 'react';
import styled from 'styled-components'
import hamburgerImg from '../../images/icons/hamburger.svg'
import times from '../../images/icons/times.svg'

const Hamburger = styled.div`
  width: 40px;
  height: 40px;
`

const HamburgerImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: .2s;
`

class Hambuger extends Component {
  constructor(props){
    super(props)

    this.state = {
      imgAlt: 'hamburgerMenuIcon',
      imgSrc: hamburgerImg,
      fade: 0
    }
  }


  handleHamburger = () => {
    const { imgSrc } = this.state;
    const idInterval = setTimeout( () => {
      if (imgSrc !== hamburgerImg) {
        this.setState({
          imgSrc: hamburgerImg,
          fade: 1,
        })
      } else {
        console.log('tak')
        this.setState({
          imgSrc: times,
          fade: 1,
        })
      }
    }, 500)
    this.setState({
      fade: 0
    })
  }

  render() {
    const { imgAlt, imgSrc, fade } = this.state
    return (
      <Hamburger>
        <HamburgerImg style={{opacity: fade}} src={imgSrc} alt={imgAlt} onClick={this.handleHamburger}/>
      </Hamburger>
    );
  }
}


export default Hambuger;
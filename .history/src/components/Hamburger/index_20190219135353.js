import React, { Component } from 'react';
import styled from 'styled-components'
import hamburgerImg from '../../images/icons/hamburger.svg'
import times from '../../images/icons/times.svg'
import { clearTimeout } from 'timers';

const Hamburger = styled.div`
  width: 40px;
  height: 40px;
`

const HamburgerImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: .4s;
`

class Hambuger extends Component {
  constructor(props){
    super(props)

    this.state = {
      imgAlt: 'hamburgerMenuIcon',
      imgSrc: hamburgerImg,
      fade: 1
    }
  }


  handleHamburger = () => {
    const { imgSrc } = this.state;
    const idTimeout = setTimeout( () => {
      if (imgSrc !== hamburgerImg) {
        this.setState({
          imgSrc: hamburgerImg,
          fade: 1,
        })
      } else {
        this.setState({
          imgSrc: times,
          fade: 1,
        })
      }
    }, 400)
    this.setState({
      fade: 0
    })
  }

  componentWillUnmount = () => {
    clearTimeout(idTimeout)
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
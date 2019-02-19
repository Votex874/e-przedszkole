import React, { Component } from 'react';
import styled from 'styled-components'
import hamburgerImg from '../../images/icons/hamburger.svg'
import times from '../../images/icons/times.svg'

const Hamburger = styled.div`
  width: 40px;
  height: 40px;
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
    console.log(imgSrc)
    console.log(hamburgerImg)
    if(imgSrc !== hamburgerImg){
      this.setState({ imgSrc: times })
    } else {
      console.log('tak')
      this.setState({ imgSrc: times })
    }
  }

  render() {
    const { imgAlt } = this.state
    return (
      <Hamburger>
        <img src={hamburgerImg} alt={imgAlt} onClick={this.handleHamburger}/>
      </Hamburger>
    );
  }
}


export default Hambuger;
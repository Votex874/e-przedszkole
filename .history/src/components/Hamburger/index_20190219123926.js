import React, { Component } from 'react';
import styled from 'styled-components'
import hamburgerImg from '../../images/icons/hamburger.svg'

const Hamburger = styled.div`
  width: 40px;
  height: 40px;
`

class Hambuger extends Component {
  constructor(props){
    super(props)

    this.state = {
      imgAlt: 'hamburgerMenuIcon'
    }
  }
  render() {
    const { imgAlt } = this.state
    return (
      <Hamburger>
        <img src={hamburgerImg} alt={imgAlt}/>
      </Hamburger>
    );
  }
}


export default Hambuger;
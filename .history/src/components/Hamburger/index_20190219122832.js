import React, { Component } from 'react';
import styled from 'styled-components'
import hamburgerImg from '../../images/icons/hamburger.svg'

const Hamburger = styled.div`

`

class Hambuger extends Component {
  render() {
    return (
      <Hamburger>
        <img src={hamburgerImg} />
      </Hamburger>
    );
  }
}


export default Hambuger;
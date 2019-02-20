import React from 'react'
import styled from 'styled-components'

const Alink = styled.a`
  text-decoration: none;
  color: #fff;
`


const SectionTitle = ({ title, img }) => {
  return (
    <header>
      <Alink href="#">
        <h2>{title}</h2>
        <img src={img} alt="ikona zespolu"/>
      </Alink>
    </header>
  )
}


export default SectionTitle;
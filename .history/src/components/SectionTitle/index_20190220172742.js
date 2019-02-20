import React from 'react'
import styled from 'styled-components'

const HeaderTitle = styled.h2`
  color: #fff;
  font-size: 32px;
  @media(max-width: 767px){
    font-size: 22px;
  }
  @media (min-width: 768px) and (max-width: 1400){
    font-size: 28px;
  }
`
const HeaderImg = styled.img`
  width: 30px;
  height: 30px;
  @media(max-width: 767px){
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) and (max-width: 1400){
    width: 26px;
    height: 26px;
  }
`

const SectionTitle = ({ title, img }) => {
  return (
    <header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderImg src={img} alt="ikona zespolu"/>
    </header>
  )
}


export default SectionTitle;
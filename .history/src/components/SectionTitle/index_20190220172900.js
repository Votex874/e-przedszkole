import React from 'react'
import styled from 'styled-components'

const HeaderTitle = styled.h2`
  color: #fff;
  font-size: 32px;
  text-transform: uppercase;
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
  margin-left: 10px;
  @media(max-width: 767px){
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) and (max-width: 1400){
    width: 26px;
    height: 26px;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`

const SectionTitle = ({ title, img }) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderImg src={img} alt="ikona zespolu"/>
    </Header>
  )
}


export default SectionTitle;
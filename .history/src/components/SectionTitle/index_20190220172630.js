import React from 'react'

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
`

const SectionTitle = ({ title, img }) => {
  return (
    <header>
      <h2>{title}</h2>
      <img src={img} alt="ikona zespolu"/>
    </header>
  )
}


export default SectionTitle;
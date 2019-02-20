import React from 'react'

const SectionTitle = ({ title, img }) => {
  return (
    <header>
      <h2>{title}</h2>
      <img src={img} alt="ikona zespolu"/>
    </header>
  )
}


export default SectionTitle;
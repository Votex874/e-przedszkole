import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({ title, img }) => {
  return (
    <header>
      <h2>{title}</h2>
      <img src={img} alt="ikona zespolu"/>
    </header>
  )
}


export default SectionTitle;
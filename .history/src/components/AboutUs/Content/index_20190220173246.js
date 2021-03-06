import React from 'react';
import styled from 'styled-components'

const Text = styled.span`
  color: #00366B;
  line-height: 28px;
  font-size: 20px;
  @media (max-width: 767px){
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    font-size: 18px;
    line-height: 24px;
  }
`

const Content = ({ content }) => {
  return (
    <Text>
      {content}...

    </Text>
  )
}

export default Content;
import React from 'react';
import styled from 'styled-components'

const Text = styled.span`
  color: #00366B;
  line-height: 24px;
`

const Content = ({ content }) => {
  return (
    <Text>{content.slice(0,499)}...</Text>
  )
}

export default Content;
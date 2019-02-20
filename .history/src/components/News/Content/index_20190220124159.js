import React from 'react';
import styled from 'styled-components'

const Text = styled.span`
  color: #333;
`

const Content = ({ content }) => {
  return (
    <Text>{content.slice(0,299)}...</Text>
  )
}

export default Content;
import React from 'react';
import styled from 'styled-components'

const Text = styled.span`

`

const Content = ({ content }) => {
  console.log(content.length)
  return (
    <Text>{content.slice(0,300)}...</Text>
  )
}

export default Content;
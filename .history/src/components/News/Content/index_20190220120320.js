import React from 'react';
import styled from 'styled-components'

const Text = styled.span`

`



const Content = ({ content }) => {
  return (
    <Text>{content}</Text>
  )
}

export default Content;
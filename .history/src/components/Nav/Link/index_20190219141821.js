import React from 'react';
import styled from 'styled-components'

const Alink = styled.a`
  text-decoration: none;
  color: #000;
  margin: 5px;
  width: auto;
`

const SingleLink = ({ data }) => {
  return (
    <Alink href={data.url}>{data.name}</Alink>
  )
}

export default SingleLink;
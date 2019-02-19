import React from 'react';
import styled from 'styled-components'

const Alink = styled.a`
  text-decoration: none;
  color: #000;
`



const SingleLink = ({ data }) => {
  console.log(data)
  return (
    <Alink href={data.url}>{data.name}</Alink>
  )
}

export default SingleLink;
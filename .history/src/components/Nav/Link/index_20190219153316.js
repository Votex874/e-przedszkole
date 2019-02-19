import React from 'react';
import styled from 'styled-components'

const Alink = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 10px 0;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
`

const SingleLink = ({ data }) => {
  return (
    <Alink href={data.url}>{data.name}</Alink>
  )
}

export default SingleLink;
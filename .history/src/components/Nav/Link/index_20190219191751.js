import React from 'react';
import styled from 'styled-components'

const Alink = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 10px;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 767px){
    font-size: 24px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    font-size: 14px;
  }
  @media (max-width: 1401px){
    &:hover{

    }
  }
`

const SingleLink = ({ data }) => {
  return (
    <Alink href={data.url}>{data.name}</Alink>
  )
}

export default SingleLink;
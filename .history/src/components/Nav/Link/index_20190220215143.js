import React from 'react';
import styled from 'styled-components'
import { shineOnHover } from '../../../constColors'
import { lightBlue } from '../../../constColors'

const Alink = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 10px 0;
  padding: 0 12px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 767px){
    font-size: 24px;
  }
  @media (min-width: 768px) and (max-width: 1050px){
    font-size: 14px;
    margin: 10px 0;
    padding: 4px;
  }
  @media (min-width: 1051px) and (max-width: 1400px){
    font-size: 18px;
    margin: 10px 0;
    padding: 0 10px;
  }
  @media (min-width: 1401px){
    ${shineOnHover}
}
`

const SingleLink = ({ data }) => {
  return (
    <Alink href={data.url}>{data.name}</Alink>
  )
}

export default SingleLink;
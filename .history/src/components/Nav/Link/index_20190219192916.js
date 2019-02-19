import React from 'react';
import styled from 'styled-components'

const Alink = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 10px 12px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 767px){
    font-size: 24px;
  }
  @media (min-width: 768px) and (max-width: 1050px){
    font-size: 14px;
    margin: 10px 4px;
  }
  @media (min-width: 1051px) and (max-width: 1400px){
    font-size: 18px;
    margin: 10px;
  }
  @media (min-width: 1401px){
    position: relative;
    overflow: hidden;
    width: 50px;
    height: 50px;
    display: inline-block;
    
    margin: 25px 0 25px 25px;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 50px;

  &:after {
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);
    
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right, 
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0.0) 100%
    );
  }


  &:hover:after {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }


  &:active:after {
    opacity: 0;
  }
}
`

const SingleLink = ({ data }) => {
  return (
    <Alink href={data.url}>{data.name}</Alink>
  )
}

export default SingleLink;
import React from 'react';
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;
  box-sizing: border-box;
  float: left;
  margin-right: 15px;
  width: 140px;
  height: 140px;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 767px){  
    width: 70px;
    height: 70px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 140px;
    height: 140px;
  }
`
const AvatarImg = styled.img `
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`


const Avatar = ({ img }) => {
  return (
    <ImageContainer>
      <AvatarImg src={require(`../../../images/news/${img}.png`)} />
    </ImageContainer>
  )
}

export default Avatar;
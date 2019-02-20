import React from 'react';
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #fff;
  @media (max-width: 767px){  
    width: 70px;
    height: 70px;
  }
`
const AvatarImg = styled.img `
  width: 90%;
  height: 90%;
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
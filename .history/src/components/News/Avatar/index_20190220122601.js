import React from 'react';
import styled from 'styled-components'

const ImageContainer = styled.div`
  @media (max-width: 767px){  
    width: 70px;
    height: 70px;
  }
`
const AvatarImg = styled.img `
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
import React from 'react';
import styled from 'styled-components'


const ImageContainer = styled.div`

`
const AvatarImg = styled.img`

`


const Avatar = ({ imageName }) => {
  const pathToImg = '../../../images/news' ;
  return (
    <ImageContainer>
      <AvatarImg src={`${pathToImg}${imageName}.png`} />
    </ImageContainer>
  )
}

export default Avatar;
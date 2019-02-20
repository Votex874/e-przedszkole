import React from 'react';
import styled from 'styled-components'


const ImageContainer = styled.div`

`
const AvatarImg = styled.img`

`


const Avatar = ({ imageName }) => {
  const pathToImg = '../../../images/news/' ;
  console.log(`${pathToImg}${imageName}.png`)
  return (
    <ImageContainer>
      <AvatarImg src={`${pathToImg}${imageName}.png`} />
    </ImageContainer>
  )
}

export default Avatar;
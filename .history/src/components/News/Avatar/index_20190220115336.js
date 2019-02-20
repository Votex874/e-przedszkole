import React from 'react';
import styled from 'styled-components'

const ImageContainer = styled.div`

`
const AvatarImg = styled.img`

`


const Avatar = ({ img }) => {
  const pathToImg = '../../../images/news/' ;
  console.log(`${pathToImg}${img}.png`)
  return (
    <ImageContainer>
      <AvatarImg src='/src/images/news/news02.png' />
    </ImageContainer>
  )
}

export default Avatar;
import React from 'react';
import styled from 'styled-components'

const Author = styled.span`

`
const DateNews = styled.span`

`


const Footer = ({ author, date }) => {
  return (
    <React.Fragment>
      <Author>
        {author}
        <DateNews>{date}</DateNews>
      </Author>
    </React.Fragment>
  )
}

export default Footer;
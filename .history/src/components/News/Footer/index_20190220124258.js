import React from 'react';
import styled from 'styled-components'

const FooterAuthor = styled.footer`
 margin-left: auto;
 @media (max-width: 767px){
   font-size: 12px;
 }
`
const DateNews = styled.span`

`


const Footer = ({ author, date }) => {
  return (
    <React.Fragment>
      <FooterAuthor>
        {author}
        <DateNews>{date}</DateNews>
      </FooterAuthor>
    </React.Fragment>
  )
}

export default Footer;
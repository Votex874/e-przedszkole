import React from 'react';
import styled from 'styled-components'

const FooterAuthor = styled.footer`
 margin-left: auto;
 display: flex;
 justify-content: flex-end;
 @media (max-width: 767px){
   font-size: 12px;
   color: #777;
 }
`
const DateNews = styled.span`
  margin-left: 10px;
  font-size: 90%;
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
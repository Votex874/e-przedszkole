import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import Title from './Title/index'
import Content from './Content/index'
import Avatar from './Avatar/index'
import Footer from './Footer/index'
import calendaryImg from '../../images/icons/calendar.png'

const HeaderIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  @media (max-width: 767px){
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 26px;
    height: 26px;
  }
`

const ArticleContainer = styled.article`
  display: block;
  height: auto;
  @media (max-width: 767px){
    padding-bottom: 5px;
    border-bottom: 2px dotted #fff;
    margin-bottom: 15px;
  } 
`

const SectionContent = styled.section`
  height: auto;
  display: block;
`

const NewsContainer = styled.section`
  margin: 30px auto 0 auto;
  width: 60%;
  height: auto;
  @media (max-width: 767px){  
    width: 94%;
    margin: 30px auto 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 65%;
    margin: 60px auto 0 auto;
  }
`

const SectionTitle = styled.h2`
  font-size: 32px;
  color: #fff;
  width: 90%;
  margin: 0 auto 30px auto;
  text-align: center;
  text-transform: uppercase;  
  font-weight: bold;
  @media (max-width: 767px){
    font-size: 22px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    font-size: 28px;
  }
`

class News extends Component {
  constructor(props){
    super(props)

    this.state = {
      newsList: []
    }
  }

  componentDidMount = () => {
    const { news } = this.props
    let listOfNews = [];
    let i = 0;
    for (const key of Object.keys(news)) {
      // console.log(key, links[key]);
      listOfNews[i] = 
      <ArticleContainer data={news[key]} key={key}>
        <Title title={news[key].title} />
        <SectionContent>
          <Avatar img={news[key].imageName} />
          <Content content={news[key].content} />
        </SectionContent>
        <Footer author={news[key].author} date={news[key].date} />
      </ArticleContainer>
      i++;
    }
    this.setState({
      newsList: listOfNews
    }) 
  }

  render() {
    const { newsList } = this.state
    return (
      <NewsContainer>
        <SectionTitle>Co u nas słychać <HeaderIcon src={calendaryImg} /></SectionTitle>
        {newsList}
      </NewsContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(News);
import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import Title from './Title/index'
import Content from './Content/index'
import Avatar from './Avatar/index'
import Footer from './Footer/index'

const ArticleContainer = styled.article`
  @media (max-width: 767px){

  }
`

const SectionContent = styled.section`

`

const NewsContainer = styled.section`
  margin: 30px 0 0 0;
  @media (max-width: 767px){  
    width: 94%;
    margin: 30px auto 0 auto;
  }
`

const SectionTitle = styled.h2`
  font-size: 18px;
  color: #fff;
  width: 90%;
  margin: 0 auto 30px auto;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 767px){
    font-size: 22px;
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
        <SectionTitle>Co u nas słychać</SectionTitle>
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
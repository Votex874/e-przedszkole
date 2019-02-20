import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

const ArticleContainer = styled.article`

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
      listOfNews[i] = <div data={news[key]} key={key} />
      i++;
    }
    console.log(listOfNews)
    this.setState({
      newsList: listOfNews
    })
  }

  render() {
    const { newsList } = this.state
    return (
      <ArticleContainer>
        {newsList}
      </ArticleContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(News);
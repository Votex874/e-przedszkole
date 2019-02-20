import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

const ArticleContainer = styled.article`

`

class News extends Component {
  constructor(props){
    super(props)

    this.state = {
      listOfNews: []
    }
  }

  componentDidMount = () => {
    const { news } = this.props
    console.log(news)
    let listOfNews = [];
    let i = 0;
    for (const key of Object.keys(news)) {
      // console.log(key, links[key]);
      // listOfNews[i] = <div data={news[key]} key={key} />
      // i++;
    }
    this.setState({ 
      listOfNews
    })
  }

  render() {
    console.log(this.state.listOfNews)
    return (
      <ArticleContainer>

      </ArticleContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect(mapStateToProps)(News);
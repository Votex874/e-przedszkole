import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

const ArticleContainer = styled.article`

`

class News extends Component {
  render() {
    const { news } = this.props
    let listOfNews = [];
    let i = 0;
    for (const key of Object.keys(links)) {
      // console.log(key, links[key]);
      listOfLinks[i] = <SingleLink data={links[key]} key={key} />
      i++;
    }
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
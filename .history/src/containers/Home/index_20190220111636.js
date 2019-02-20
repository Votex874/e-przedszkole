import React, { Component } from 'react';
import HeaderMain from '../../components/Header/index'
import News from '../../components/News/index'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderMain />
        <News />
      </React.Fragment>
    );
  }
}

export default Home;
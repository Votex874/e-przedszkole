import React, { Component } from 'react';
import HeaderMain from '../../components/Header/index'
import News from '../../components/News/index'
import AboutUs from '../../components/AboutUs/index'
import Graduates from '../../components/Graduates/index'
import Lokalization from '../../components/Localization/index'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderMain />
        <News />
        <AboutUs />
        <Graduates />
        <Lokalization />
      </React.Fragment>
    );
  }
}

export default Home;
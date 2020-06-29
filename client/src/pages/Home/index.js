import React, { Component } from 'react';
import Banner from '../../components/Hero';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';

class Home extends Component {
  state = {
    currentPage: 'Home',
  };
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
        <Wrapper></Wrapper>
      </div>
    );
  }
}

export default Home;

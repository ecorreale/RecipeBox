import React, { Component } from 'react';
import Banner from '../../Banner';
import Navigation from '../../Navigation';

class Home extends Component {
  state = {
    currentPage: 'Home',
  };
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
      </div>
    );
  }
}

export default Home;

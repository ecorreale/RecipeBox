import React, { Component } from 'react';
import Banner from '../../components/Banner';
import Navigation from '../../components/Navigation';

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

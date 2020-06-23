import React, { Component } from 'react';
import Banner from '../../components/Hero';
import Navigation from '../../components/NavBar';

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

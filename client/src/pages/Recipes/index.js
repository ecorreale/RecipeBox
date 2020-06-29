import React, { Component } from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';
// import Recipe from '../../components/Recipe'

class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navigation />
        <Wrapper></Wrapper>
      </div>
    );
  }
}
export default Recipes;

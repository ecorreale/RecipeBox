import React, { Component } from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';
import RecipeList from '../../components/RecipeList';

class RecipeListPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navigation />
        <Wrapper>
          <RecipeList />
        </Wrapper>
      </div>
    );
  }
}
export default RecipeListPage;

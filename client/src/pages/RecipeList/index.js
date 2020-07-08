import React, { Component } from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';
import RecipeList from '../../components/RecipeList';
import { Helmet } from 'react-helmet';

class RecipeListPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Recipe List</title>
        </Helmet>
        <Navigation />
        <Wrapper>
          <RecipeList />
        </Wrapper>
      </div>
    );
  }
}
export default RecipeListPage;

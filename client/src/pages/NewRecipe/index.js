import React from 'react';
import Navigation from '../../components/NavBar';
import NewRecipeForm from '../../components/NewRecipe';
import { Helmet } from 'react-helmet';

const NewRecipePage = () => {
  return (
    <article>
      <Helmet>
        <title>New Recipe</title>
      </Helmet>
      <nav>
        <Navigation />
      </nav>
      <section>
        <NewRecipeForm />
      </section>
    </article>
  );
};

export default NewRecipePage;

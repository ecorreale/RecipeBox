import React from 'react';
import Navigation from '../../components/NavBar';
import NewRecipeForm from '../../components/NewRecipe';

const NewRecipePage = () => {
  return (
    <article>
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

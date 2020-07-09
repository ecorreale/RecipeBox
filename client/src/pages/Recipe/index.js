import React, { useEffect, useState } from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';

// import { getRecipeById } from '../../services/RecipeService';

import RecipeHeader from '../../components/RecipeHeader';
import { Helmet } from 'react-helmet';

function RecipePage(props) {
  const [recipe, setRecipe] = useState({});

  // useEffect(() => {
  //   getRecipeById(props.match.params.id).then((recipe) => {
  //     setRecipe(recipe.data);
  //   });
  // }, []);

  return (
    <div>
      <Helmet>
        <title>{recipe.title}</title>
      </Helmet>
      <Navigation />
      <Wrapper>
        <RecipeHeader
          ImageSrc="/img/recipeBox.png"
          RecipeSrc={recipe.servings}
          RecipeTitle={recipe.title}
          {...recipe}
        />
      </Wrapper>
    </div>
  );
}

export default RecipePage;

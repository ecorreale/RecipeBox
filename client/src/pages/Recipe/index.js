import React, { useEffect, useState } from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';

import RecipeService from '../../services/RecipeService';

import RecipeHeader from '../../components/RecipeHeader';
import { Helmet } from 'react-helmet';

function RecipePage(props) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    RecipeService.getRecipeById(props.match.params.id).then((recipe) => {
      setRecipe(recipe.data);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>{recipe.title}</title>
      </Helmet>
      <Navigation />
      <Wrapper>
        <RecipeHeader
          ImageSrc="/img/recipeImages/MushroomSoup.webp"
          RecipeSrc={recipe.servings}
          RecipeTitle={recipe.title}
          RecipeCookTime={recipe.cookTime}
          RecipeDirections={recipe.directions}
          RecipeDescription={recipe.description}
          RecipeEquipment={recipe.equipment}
          RecipeIngredients={recipe.ingredients}
          RecipePrepTime={recipe.prepTime}
          RecipeServings={recipe.servings}
        />
      </Wrapper>
    </div>
  );
}

export default RecipePage;

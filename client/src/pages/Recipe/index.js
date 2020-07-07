import React, { useEffect, useState } from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';
import { getRecipeById } from '../../Services/recipe.service';

import RecipeHeader from '../../components/RecipeHeader';

function RecipePage(props) {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    console.log(props);
    getRecipeById(props.match.params.id).then((recipe) => {
      console.log(recipe);
      setRecipe(recipe.data);
    });
  }, []);
  return (
    <div>
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
// }
export default RecipePage;

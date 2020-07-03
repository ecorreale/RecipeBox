import React from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';

import RecipeHeader from '../../components/RecipeHeader';

function RecipePage() {
  return (
    <div>
      <Navigation />
      <Wrapper>
        <RecipeHeader
          ImageSrc="/img/recipeBox.png"
          RecipeSrc="kfn;laskdfn"
          RecipeTitle="Spices Al-la-cart"
        />
      </Wrapper>
    </div>
  );
}
// }
export default RecipePage;

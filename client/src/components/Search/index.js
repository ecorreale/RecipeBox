import React, { useState } from 'react';
import axios from 'axios';
import Glyphs from 'glyphicons';
import Recipe from '../Recipe/Recipe';
// import edmam from '../strings';

function Search() {
  // Van working on

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  const searchRecipes = () => {
    //   axios
    //     .get('/api/edamam', { params: { q: 'title:' + query } })
    //     .then((edamamRecipesData) => {
    //       console.log(edamamRecipesData);
    //       setRecipes(RecipesData.data.items);
    //     });
  };

  return (
    <div class="input-group mt-3 mb-3">
      <div class="input-group-prepend">
        <button
          type="button"
          class="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu">
          <a class="All" href="#">
            Link 3
          </a>
          <a class="Breakfast" href="#">
            Link 1
          </a>
          <a class="Lunch" href="#">
            Link 2
          </a>
          <a class="Dinner" href="#">
            Link 3
          </a>
          <a class="Snacks" href="#">
            Link 3
          </a>
        </div>
      </div>
      <input type="text" class="form-control" placeholder="Username" />
    </div>
  );
}

export default Search;

// return (
//   <div className="input-group mb-3" style={{ width: '30%' }}>
//     <div className="input-group-prepend">
//       <button
//         onClick={searchRecipes}
//         className="btn btn-outline-secondary"
//         type="button"
//         id="button-addon1"
//       >
//         Search
//       </button>
//     </div>
//     <input
//       onChange={handleChange}
//       type="text"
//       className="form-control"
//       placeholder="Search for Recipe Title"
//       aria-label="Example text with button addon"
//       aria-describedby="button-addon1"
//     />
//     {recipes.map((r) => {
//       return <Recipe recipeInfo={r} />;
//     })}
//   </div>
// );

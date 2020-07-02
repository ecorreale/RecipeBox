import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  const searchRecipes = () => {
    console.log('clicked');
    axios
      .get('/api/recipes/search', { params: { q: query } })
      .then((edamamRecipesData) => {
        console.log(edamamRecipesData);
        // setRecipes(RecipesData.data.items);
      });
  };

  return (
    <div class="input-group mt-3 mb-3">
      <div class="input-group-prepend">
        <button
          type="button"
          class="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown"
          onClick={searchRecipes}
        >
          Dropdown button
        </button>
        <div class="dropdown-menu">
          <a class="All" href="/client">
            Link 3
          </a>
          <a class="Breakfast" href="/">
            Link 1
          </a>
          <a class="Lunch" href="/">
            Link 2
          </a>
          <a class="Dinner" href="/">
            Link 3
          </a>
          <a class="Snacks" href="/">
            Link 3
          </a>
        </div>
      </div>
      <input type="text" class="form-control" placeholder="Username" />
    </div>
  );
}

export default Search;

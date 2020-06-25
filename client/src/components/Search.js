import React, { useState } from 'react';
import axios from 'axios';
import Glyphs from 'glyphicons';
import Recipe from './Recipe';

function Search() {
  // Van working on

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };
  const searchRecipes = () => {
    axios
      .get('/api/edamam', { params: { q: 'title:' + query } })
      .then((edamamRecipesData) => {
        console.log(edamamRecipesData);
        setRecipes(RecipesData.data.items);
      });
  };

  return (
    <div className="input-group mb-3" style={{ width: '30%' }}>
      <div className="input-group-prepend">
        <button
          onClick={searchRecipes}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Search
        </button>
      </div>
      <input
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Search for Recipe Title"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      {recipes.map((r) => {
        return <Recipe recipeInfo={r} />;
      })}
    </div>
  );
}

export default Search;

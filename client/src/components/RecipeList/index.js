import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../../Services/recipe.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './recipeList.css';

function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getAllRecipes().then((recipes) => {
      console.log(recipes);
      setRecipeList(recipes.data);
    });
  }, []);

  return (
    <section>
      <br />
      <h6>Recipes you have saved to your RecipeBox</h6>
      <table class="table table-hover table-sm">
        <thead class="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Servings</th>
            <th scope="col">Cook Time</th>
            <th scope="col">Prep Time</th>
          </tr>
        </thead>
        <tbody>
          {recipeList.map((row, index) => {
            return <TableRow RowData={row} RowNum={index} />;
          })}
        </tbody>
      </table>
    </section>
  );
}

function TableRow({ RowData, RowNum }) {
  return (
    <tr key={RowNum}>
      <td>
        <a href={`/Recipe/${RowData._id}`}>{RowData.title}</a>
      </td>
      <td style={{ paddingLeft: '25px' }}>{RowData.servings}</td>
      <td>{RowData.cookTime} mins</td>
      <td>{RowData.prepTime} mins</td>
    </tr>
  );
}

export default RecipeList;

import React, { useEffect, useState } from 'react';
import AuthService from '../../Services/auth.service';
import { getAllRecipes } from '../../Services/recipe.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './recipeList.css';

const IsAuthenticated = AuthService.IsAuthenticated;
const currentUser = AuthService.getCurrentUser();

function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getAllRecipes().then((recipes) => {
      console.log(recipes);
      setRecipeList(recipes.data);
    });
  }, []);
  // var data = [];
  // var TestRow = {
  //   Id: 1,
  //   name: 'Beef, ale & mushroom pie',
  //   serving: 4,
  //   cookTime: 2.5,
  //   prepTime: 1.25,
  // };
  // data.push(TestRow);

  // TestRow = {
  //   Id: 2,
  //   name: 'Beef Wellington',
  //   serving: 4,
  //   cookTime: 2.5,
  //   prepTime: 2.5,
  // };
  // data.push(TestRow);

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
      {/* <th scope="row">{RowNum}</th> */}
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

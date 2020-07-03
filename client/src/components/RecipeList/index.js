import React from 'react';
import AuthService from '../../services/auth.service';
// import {getRecipes} from '../../utils/Api'
// import UserService from "../../services/user.service";

import 'bootstrap/dist/css/bootstrap.min.css';
import './recipeList.css';

function RecipeList() {
  const currentUser = AuthService.getCurrentUser();

  // getRecipes

  var data = [];
  var TestRow = {
    Id: 1,
    name: 'Beef, ale & mushroom pie',
    serving: 4,
    cooktime: 2.5,
    preptime: 1.25,
  };
  data.push(TestRow);

  TestRow = {
    Id: 2,
    name: 'Beef Wellington',
    serving: 4,
    cooktime: 2.5,
    preptime: 2.5,
  };
  data.push(TestRow);

  return (
    <section>
      <br />
      <h6>Recipies you have saved to your RecipeBox</h6>
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
          {data.map((row, index) => {
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
        <a href={RowData.Id}>{RowData.name}</a>
      </td>
      <td style={{ paddingLeft: '25px' }}>{RowData.serving}</td>
      <td>{RowData.cooktime} Hrs</td>
      <td>{RowData.preptime} Hrs</td>
    </tr>
  );
}

export default RecipeList;

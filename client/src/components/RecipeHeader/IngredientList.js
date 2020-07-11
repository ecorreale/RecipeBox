import React from 'react';
import Styles from './RecipeHeader.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function myRow(props) {
  return (
    <tr>
      <td>{props.item.qty}</td>
      <td>{props.item.unit}</td>
      <td>{props.item.ingredient}</td>
    </tr>
  );
}

const IngredientList = ({ ingredients }) => {
  // let ingArray = []
  // ingArray = JSON.stringify(ingredients)
  // console.log("IngList")

  console.log(ingredients);
  // console.log(ingArray)

  return (
    <div>
      <table className="table table-hover table-sm">
        {ingredients.map((item) => (
          <myRow key={item._id} item={item} />
        ))}
      </table>
    </div>
  );
  // var ingArray = props.ingredients
  // ingArray.map(( ingredient,index) => {
  //             console.log(ingredient)

  //     })
  //   <div>{props.RecipeIngredients.map(RecipeIngredients => {
  //     <p>{RecipeIngredients.qty}{RecipeIngredients.unit}  {RecipeIngredients.ingredient}</p>
  //   })}</div>
};

export default IngredientList;

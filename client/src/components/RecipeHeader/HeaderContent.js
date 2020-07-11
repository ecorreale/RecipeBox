import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import Styles from './RecipeHeader.module.css';

// class HeaderContent extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }
function HeaderContent(props) {
  return (
    <article className={Styles.headerDetail_Wrapper}>
      <section className={Styles.headerDetail_Title}>
        {props.RecipeTitle}
      </section>

      <section className={Styles.effortBox}>
        <FontAwesomeIcon className={Styles.clockIcon} icon={faClock} />

        <div className={Styles.prepTime}>Prep Time:</div>
        <div>{props.RecipePrepTime}</div>

        <div className={Styles.cookTime}>Cook Time:</div>
        <div>{props.RecipeCookTime}</div>

        <div className={Styles.directions}>Directions:</div>
        <div>{props.RecipeDirections}</div>

        <div className={Styles.ingredients}>Ingredients:</div>
        {/* <div>{props.RecipeIngredients.map(RecipeIngredients => {
          <p>{RecipeIngredients.qty}{RecipeIngredients.unit}  {RecipeIngredients.ingredient}</p>
        })}</div> */}

        <div className={Styles.equipment}>Equipments:</div>
        <div>{props.RecipeEquipment}</div>
      </section>
    </article>
  );
}

export default HeaderContent;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import Styles from './RecipeHeader.module.css';
import IngredientList from './IngredientList';
import RecipeService from '../../services/RecipeService';

function Result(props) {
  console.log(props);
}

function HeaderContent(props) {
  return (
    <article className={Styles.headerDetail_Wrapper}>
      <section className={Styles.headerDetail_Title}>
        {props.RecipeTitle}
      </section>

      <div className={Styles.effortBox}>
        <FontAwesomeIcon className={Styles.clockIcon} icon={faClock} />
      </div>

      <section className={Styles.propsSection}>
        <div className={Styles.label}>
          Prep Time:
          <span className={Styles.prepTime}>{props.RecipePrepTime}</span>
        </div>

        <div className={Styles.label}>
          Cook Time:
          <span className={Styles.cookTime}>{props.RecipeCookTime}</span>
        </div>

        <div className={Styles.label}>
          Directions:
          <span className={Styles.directions}>{props.RecipeDirections}</span>
        </div>

        {/* <div className={Styles.ingredients}>Ingredients:
        <IngredientList ingredients = {props.RecipeIngredients}/>
        </div> */}

        <div className={Styles.label}>
          Equipment:
          <span className={Styles.equipment}>{props.RecipeEquipment}</span>
        </div>
      </section>
    </article>
  );
}

export default HeaderContent;

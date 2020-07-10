import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import Styles from './RecipeHeader.module.css';

class HeaderContent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <article className={Styles.headerDetail_Wrapper}>
        <section className={Styles.headerDetail_Title}>
          {this.props.RecipeTitle}
        </section>

        <section className={Styles.effortBox}>
          <FontAwesomeIcon className={Styles.clockIcon} icon={faClock} />

          <div className={Styles.prepTime}>Prep Time:</div>

          <div className={Styles.cookTime}>Cook Time:</div>
          <div className={Styles.directions}>
            Directions:
            <div>{this.props.directions}</div>
          </div>

          <div className={Styles.ingredients}>
            Ingredients:
            <div>{this.props.ingredients}</div>
            <div className={Styles.equipment}>
              Equipments:
              <div>{this.props.equipment}</div>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

export default HeaderContent;

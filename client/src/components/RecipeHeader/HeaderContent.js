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
    var cookTime = 2.5;
    var prepTime = 0.5;

    return (
      <article className={Styles.headerDetail_Wrapper}>
        <section className={Styles.headerDetail_Title}>
          {this.props.RecipeTitle}
        </section>

        <section className={Styles.effortBox}>
          <FontAwesomeIcon className={Styles.clockIcon} icon={faClock} />

          <div className={Styles.prepTime}>
            Prep Time:
            <span className={Styles.hours}>
              {' '}
              <this.getTimeFormatted time={prepTime} />
            </span>
          </div>

          <div className={Styles.cookTime}>
            Cook Time:
            <span className={Styles.hours}>
              {' '}
              <this.getTimeFormatted time={cookTime} />
            </span>
          </div>
        </section>
      </article>
    );
  }

  getTimeFormatted(props) {
    const hrs = ' HRS';
    const hr = ' HR';

    var time = props.time;
    var timeUnits;

    timeUnits = hr;
    if (time > 1) {
      timeUnits = hrs;
    }
    var displayValue = time + timeUnits;
    return displayValue;
  }
}

export default HeaderContent;

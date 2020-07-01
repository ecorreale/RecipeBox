import React, { Component } from 'react';

import HeaderImage from './HeaderImage';
import Styles from './RecipeHeader.module.css';
import HeaderContent from './HeaderContent';

class RecipeHeader extends Component {
  constructor(props) {
    super(props);
  }


  
  render() {
    return (
      <article id="header">
        <div className={Styles.headerWrapper}>
          <div className={Styles.header}>
            <section className={Styles.imageComponentWrapper}>
              <HeaderImage
                ImageSrc={this.props.ImageSrc}
                RecipeSrc={this.props.RecipeSrc}
                RecipeTitle={this.props.RecipeTitle}
              />
            </section>

            <section className={Styles.contentWrapper}>
              <HeaderContent {...this.props} />
            </section>
          </div>
        </div>
      </article>
    );
  }
}

export default RecipeHeader;

import React, { Component } from 'react';

import HeaderImage from './HeaderImage';
import Styles from './RecipeHeader.module.css';

class RecipeHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={Styles.header}>
        <div className={Styles.imageWrapper}>
          <HeaderImage
            ImageSrc={this.props.ImageSrc}
            RecipeSrc={this.props.RecipeSrc}
            RecipeTitle={this.props.RecipeTitle}
          />
        </div>
      </div>
    );
  }
}

export default RecipeHeader;

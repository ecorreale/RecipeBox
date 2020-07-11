import React from 'react';

import HeaderImage from './HeaderImage';
import Styles from './RecipeHeader.module.css';
import HeaderContent from './HeaderContent';

function RecipeHeader(props) {
  console.log('=============== Recipe Header=======================');
  console.log(props);
  return (
    <article id="header">
      <div className={Styles.headerWrapper}>
        <div className={Styles.header}>
          <section className={Styles.imageComponentWrapper}>
            {/* <HeaderImage
              ImageSrc={props.ImageSrc}

              // RecipeSrc={props.RecipeSrc}
              // RecipeTitle={props.RecipeTitle}
            /> */}
          </section>

          <section className={Styles.contentWrapper}>
            <HeaderContent {...props} />
          </section>
        </div>
      </div>
    </article>
  );
}

export default RecipeHeader;

import React from 'react';
import Styles from './RecipeHeader.module.css';

import { Card, CardBody, CardImg, CardFooter } from 'reactstrap';

function HeaderImage(props) {
  return (
    <div className={Styles.cardWrapper}>
      <Card className={Styles.card}>
        <CardBody className={Styles.cardBody}>
          <CardImg
            top
            width="100%"
            src="{props.ImageSrc}"
            // alt={props.RecipeTitle}
          />
        </CardBody>
        {/* <CardFooter className={Styles.cardFooter}>
          {props.RecipeSrc} Servings
        </CardFooter> */}
      </Card>
    </div>
  );
}

export default HeaderImage;

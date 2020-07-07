import React from 'react';

import Styles from './RecipeHeader.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

import {
  Card,
  CardBody,
  CardImg,
  CardFooter,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';

function HandleSave(props) {
  console.log('Clicked the save button');
}

function HeaderImage(props) {
  console.log('ImageWrapper');
  console.log(props);
  console.log(props.ImageSrc);
  console.log(props.RecipeSrc);
  console.log(props.RecipeTitle);

  return (
    <div className={Styles.cardWrapper}>
      <Card>
        <CardBody className={Styles.cardBody}>
          <CardImg
            top
            width="100%"
            src={props.ImageSrc}
            alt={props.RecipeTitle}
          />
        </CardBody>
        <CardFooter className={Styles.cardFooter}>
          {props.RecipeSrc} Servings
        </CardFooter>
      </Card>
    </div>
  );
}

export default HeaderImage;

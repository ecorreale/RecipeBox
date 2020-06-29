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
          {props.RecipeSrc} recipe
        </CardFooter>
      </Card>
      <div className={Styles.buttonContainer}>
        <div className={Styles.button}>
          <Button
            id="btnSave"
            className={Styles.buttonSave}
            onClick={HandleSave}
            block
          >
            Save to My Recipe Box
            <FontAwesomeIcon className={Styles.buttonIcon} icon={faBookmark} />
          </Button>
          <UncontrolledPopover
            trigger="hover"
            placement="bottom"
            target="btnSave"
          >
            <PopoverHeader>Recipe Box</PopoverHeader>
            <PopoverBody>
              Please <a href="/login">Login</a> or <a href="/SignUp">Sign Up</a>{' '}
              to save this recipe.
            </PopoverBody>
          </UncontrolledPopover>
        </div>

        <div className={Styles.button}>
          <Button
            id="btnPrint"
            className={Styles.buttonPrint}
            block
            onClick="javascript:window.print();"
          >
            <span className={Styles.buttonText}>Print</span>
            <i class="font-icon font-icon-print"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;

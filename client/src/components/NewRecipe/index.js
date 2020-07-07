import React, { useState, useRef, useContext } from 'react';

import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import RecipeService from '../../Services/recipie.service';
import AuthService from '../../Services/auth.service';
import { Textbox, Textarea } from '../../FormComponents/Fields';

import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './styles.module.css';

import { Col, Row, ButtonToggle, Label } from 'reactstrap';

// Required Field Alerter
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// New Recipe Form
const NewRecipeForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  // State Variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [equipment, setEquipment] = useState('');
  const [directions, setDirections] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState('');
  const [Servings, setServings] = useState('');

  const handleNewRecipe = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      RecipeService.Create().then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },

        (error) => {
          console.log('Registration Error:');
          console.log(error);
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className={Styles.regForm}>
      <Form onSubmit={handleNewRecipe} ref={form}>
        {!successful && (
          <div>
            <Row form>
              <Col md={12}>
                <Textbox
                  name="Title"
                  label="Recipie Title"
                  Inline={true}
                  onChange={(e) => setTitle(e.target.value)}
                  validation={['Required']}
                />
              </Col>
            </Row>

            <Row form>
              <Col md={1}>
                <Textbox
                  name="CookTime"
                  label="Cook Time"
                  onChange={(e) => setCookTime(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={1}>
                <Textbox
                  name="PrepTime"
                  label="Prep Time"
                  Inline={true}
                  onChange={(e) => setPrepTime(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={1}>
                <Textbox
                  name="Servings"
                  label="Servings"
                  Inline={true}
                  onChange={(e) => setServings(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={10}></Col>
            </Row>

            <Row form>
              <Col md={6}>
                <Textarea
                  name="Ingredients"
                  label="Ingredients List"
                  Inline={true}
                  onChange={(e) => setIngredients(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={6}></Col>
            </Row>

            <Row form>
              <Col md={6}>
                <Textarea
                  name="Directions"
                  label="Instructions"
                  Inline={true}
                  onChange={(e) => setDirections(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={6}></Col>
            </Row>

            <Row form>
              <Col md={6}></Col>
              <Col md={6}></Col>
            </Row>

            <Row form>
              <Col md={6}></Col>
              <Col md={6}></Col>
            </Row>
          </div>
        )}
      </Form>
    </div>
  );
};

export default NewRecipeForm;

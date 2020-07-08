import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { Create } from '../../Services/RecipeService';
// import AuthService from '../../Services/auth.service';
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
  const history = useHistory();

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
  const [servings, setServings] = useState('');

  const handleNewRecipe = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();
    const newRecipe = {
      title,
      ingredients,
      prepTime,
      cookTime,
      servings,
      directions,
      equipment,
    };
    // if (checkBtn.current.context._errors.length === 0) {
    Create(newRecipe).then(
      (response) => {
        setMessage(response.data.message);
        // setSuccessful(true);
        history.push('/MyRecipes');
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
                  label="Recipe Title"
                  Inline={true}
                  handleChange={(e) => {
                    console.log(e.target.value);
                    setTitle(e.target.value);
                  }}
                  validation={['Required']}
                />
              </Col>
            </Row>

            <Row form>
              <Col md={1}>
                <Textbox
                  name="CookTime"
                  label="Cook Time"
                  handleChange={(e) => setCookTime(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={1}>
                <Textbox
                  name="PrepTime"
                  label="Prep Time"
                  Inline={true}
                  handleChange={(e) => setPrepTime(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={1}>
                <Textbox
                  name="Servings"
                  label="Servings"
                  Inline={true}
                  handleChange={(e) => setServings(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={10}></Col>
            </Row>

            <Row form>
              <Col md={6}>
                <Textarea
                  name="equipment"
                  label="equipment"
                  Inline={true}
                  handleChange={(e) => setEquipment(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={6}></Col>
            </Row>

            <Row form>
              <Col md={12}>
                <RecipeRow />

                {/* <Textarea
                  name="Ingredients"
                  label="Ingredients List"
                  Inline={true}
                  handleChange={(e) => setIngredients(e.target.value)}
                  validation={['Required']}
                /> */}
              </Col>
              {/* <Col md={6}></Col> */}
            </Row>

            <Row form>
              <Col md={6}>
                <Textarea
                  name="Directions"
                  label="Instructions"
                  Inline={true}
                  handleChange={(e) => setDirections(e.target.value)}
                  validation={['Required']}
                />
              </Col>
              <Col md={6}></Col>
            </Row>

            <Row form>
              <Col md={6}>
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </Col>
              <Col md={6}></Col>
            </Row>
          </div>
        )}
      </Form>
    </div>
  );
};

const RecipeRow = (props) => {
  const CookingUnits = [
    'tsp',
    'tbsp',
    'fl oz',
    'cup',
    'pint',
    'quart',
    'oz',
    'Pound',
    'each',
  ];
  return (
    <div className="row">
      {/* Quantity */}
      <div className="col-xs-1">
        <div className="form-group formCell">
          <label className="sr-only" for="qty">
            Qty
          </label>
          <input
            type="text"
            className="form-control"
            id="qty"
            placeholder="Qty"
          />
        </div>
      </div>

      {/* Units of measure */}
      <div className="col-xs-2">
        <div className="form-group">
          <select id="units">
            {CookingUnits.map((item) => (
              <option value={item}> {item} </option>
            ))}
          </select>
        </div>
      </div>

      {/* ingredient Text */}
      <div className="col-xs-7">
        <div className="form-group">
          <label className="sr-only" for="ingredient">
            Qty
          </label>
          <input
            type="text"
            className="form-control"
            id="ingredient"
            placeholder="ingredient"
          />
        </div>
      </div>
    </div>
  );
};

export default NewRecipeForm;

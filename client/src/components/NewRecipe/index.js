import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { Create } from '../../Services/recipe.service';
import { Textarea } from '../../FormComponents/Fields';
import { IngredientInputs } from './ingredient';

import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './styles.module.css';

import { Col, Row, ButtonToggle, Label } from 'reactstrap';
import AuthService from '../../Services/auth.service';
// const IsAuthenticated = AuthService.IsAuthenticated

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

export function TextBox(props) {
  return (
    <div class="form-group" style={{ marginBottom: '2px' }}>
      <Label htmlFor={props.name}>{props.label}</Label>

      <input
        className="form-control form-control-sm"
        name={props.name}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

const NewRecipeForm = (props) => {
  // New Recipe Form
  const form = useRef();
  const checkBtn = useRef();
  const history = useHistory();

  const blankIngredient = {
    qty: '',
    unit: '',
    ingredient: '',
  };

  const [ingredientsState, setIngredientsState] = useState([
    { ...blankIngredient },
  ]);

  const IngredientHandler = (e) => {
    const newIng = [...ingredientsState];
    newIng[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
    setIngredientsState(newIng);
  };

  const addIngredient = () => {
    setIngredientsState([...ingredientsState, { ...blankIngredient }]);
  };

  // State Variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [directions, setDirections] = useState();

  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [equipment, setEquipment] = useState('');

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
      // ingredients,
      prepTime,
      cookTime,
      servings,
      directions,
      equipment,
    };

    if (checkBtn.current.context._errors.length === 0) {
      Create(newRecipe).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          history.push('/MyRecipes');
        },

        (error) => {
          console.log('New Recipe Submission Error:');
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
    <article className={Styles.formBox}>
      <div class="container">
        <Form className="form-horizontal" onSubmit={handleNewRecipe} ref={form}>
          <Row form-row>
            <Col md={8}>
              <TextBox
                name="Title"
                label="Recipe Title"
                handleChange={(e) => {
                  setTitle(e.target.value);
                }}
                validation={['Required']}
              />
            </Col>
          </Row>

          <section>
            {/* Quantity  */}
            <Row form-row>
              <Col md={8}>
                <Row form-row>
                  <Col md={3}>
                    <TextBox
                      name="CookTime"
                      label="Cook Time"
                      handleChange={(e) => setCookTime(e.target.value)}
                      validation={['Required']}
                    />
                  </Col>

                  <Col md={3}>
                    <TextBox
                      name="PrepTime"
                      label="Prep Time"
                      handleChange={(e) => setPrepTime(e.target.value)}
                      validation={['Required']}
                    />
                  </Col>

                  <Col md={6}>
                    <TextBox
                      name="Servings"
                      label="Servings"
                      handleChange={(e) => setServings(e.target.value)}
                      validation={['Required']}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>

          <Row form-row>
            <Col md={8}>
              <Row>
                <Col md={2}>
                  <label>Qty</label>
                </Col>

                <Col md={2}>
                  <label>Units</label>
                </Col>

                <Col md={8}>
                  <label>Ingredient</label>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              {ingredientsState.map((value, index) => (
                <IngredientInputs
                  IDX={index}
                  State={ingredientsState}
                  Handler={IngredientHandler}
                />
              ))}

              <a
                href="#"
                onClick={addIngredient}
                className={Styles.ingredientLink}
              >
                Add Ingredient
              </a>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <Textarea
                name="Directions"
                label="Instructions"
                handleChange={(e) => setDirections(e.target.value)}
                validation={['Required']}
              />
            </Col>
            <Col md={6}></Col>
          </Row>

          <Row form>
            <Col md={6}>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Form>
      </div>
    </article>
  );
};

export default NewRecipeForm;

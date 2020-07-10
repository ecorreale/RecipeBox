import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

// Validation components
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { Create } from '../../services/RecipeService';
import { IngredientInputs } from './ingredient';

import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './styles.module.css';
import { Col, Row, ButtonToggle } from 'reactstrap';

// Field-Validator (Required)
const Required = (value) => {
  if (!value) {
    return (
      <div
        className="alert alert-danger"
        style={{ padding: '0px' }}
        role="alert"
      >
        <span className={Styles.validatorText}>This field is required!</span>
      </div>
    );
  }
};

//  ##############################################
//               New Recipe Form
//  ##############################################
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

  // State Variables
  const [titleState, setTitleState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');
  const [directionsState, setdirectionsState] = useState();

  const [prepTimeState, setPrepTimeState] = useState('');
  const [cookTimeState, setCookTimeState] = useState('');
  const [equipmentState, setEquipmentState] = useState('');
  const [servingsState, setServingsState] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  const [ingredientsState, setIngredientsState] = useState([
    { ...blankIngredient },
  ]);

  // Ingredients Dynamic row handler
  const IngredientHandler = (e) => {
    const newIng = [...ingredientsState];
    newIng[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
    setIngredientsState(newIng);
  };

  const addIngredient = () => {
    setIngredientsState([...ingredientsState, { ...blankIngredient }]);
  };

  const handleNewRecipe = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    const newRecipe = {
      titleState,
      descriptionState,
      ingredientsState,
      prepTimeState,
      cookTimeState,
      servingsState,
      equipmentState,
      directionsState,
    };

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      console.log('Past if statement');
      Create(newRecipe).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          history.push('/MyRecipes');
        },

        (error) => {
          console.log('New Recipe Submission Error:');

          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log('Response: ' + resMessage);
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <article className={Styles.article}>
      <div className="container">
        <Form className="form-horizontal" onSubmit={handleNewRecipe} ref={form}>
          {!successful && (
            <div>
              <Row form className={Styles.row}>
                <Col md={8}>
                  <div className="form-group ">
                    <label htmlFor="Title">Recipe Title</label>

                    <Input
                      className="form-control form-control-sm"
                      name="Title"
                      type="text"
                      value={titleState}
                      onChange={(e) => {
                        setTitleState(e.target.value);
                      }}
                      validations={[Required]}
                    />
                  </div>
                </Col>
              </Row>

              <Row form className={Styles.row}>
                <Col md={8}>
                  <div className="form-group">
                    <label htmlFor="Description">
                      Please enter a brief description.
                    </label>

                    <Input
                      className="form-control form-control-sm"
                      name="Description"
                      type="text"
                      value={descriptionState}
                      onChange={(e) => {
                        setDescriptionState(e.target.value);
                      }}
                      validations={[Required]}
                    />
                  </div>
                </Col>
              </Row>

              <section className="TimesRow">
                <Row form className={Styles.row}>
                  <Col md={8}>
                    <Row form className={Styles.row}>
                      <Col md={2}>
                        <div className="form-group">
                          <label htmlFor="CookTime">Cook Time</label>
                          <Input
                            className="form-control form-control-sm"
                            name="CookTime"
                            type="text"
                            value={cookTimeState}
                            onChange={(e) => {
                              setCookTimeState(e.target.value);
                            }}
                            validations={[Required]}
                          />
                        </div>
                      </Col>
                      <Col md={2}>
                        <div className="form-group">
                          <label htmlFor="PrepTime">Prep Time</label>
                          <Input
                            className="form-control form-control-sm"
                            name="PrepTime"
                            type="text"
                            value={prepTimeState}
                            onChange={(e) => {
                              setPrepTimeState(e.target.value);
                            }}
                            validations={[Required]}
                          />
                        </div>
                      </Col>
                      <Col md={8}>
                        <div className="form-group">
                          <label htmlFor="Servings">Servings</label>
                          <Input
                            className="form-control form-control-sm"
                            name="Servings"
                            type="text"
                            value={servingsState}
                            onChange={(e) => {
                              setServingsState(e.target.value);
                            }}
                            validations={[Required]}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </section>
              <section>
                <Row form className={Styles.ingredientHeader}>
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

                <Row form>
                  <Col md={8}>
                    {ingredientsState.map((value, index) => (
                      <IngredientInputs
                        key={index}
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
                    <br />
                  </Col>
                </Row>
              </section>

              <Row form className={Styles.row}>
                <Col md={8}>
                  <label htmlFor="Equipment">Equipment</label>
                  <Input
                    type="textarea"
                    className="form-control form-control-sm"
                    name="Equipment"
                    rows={5}
                    onChange={(e) => setEquipmentState(e.target.value)}
                  />
                </Col>
              </Row>

              <Row form className={Styles.row}>
                <Col md={8}>
                  <label htmlFor="Instructions">Recipe instructions</label>
                  <textarea
                    className="form-control form-control-sm"
                    name="Directions"
                    rows={10}
                    onChange={(e) => setdirectionsState(e.target.value)}
                  />
                </Col>
                <Col md={4}></Col>
              </Row>

              <ButtonToggle type="submit" color="success" ref={checkBtn}>
                {' '}
                Save Recipe{' '}
              </ButtonToggle>
            </div>
          )}
          {message && (
            <div className="form-group">
              <div>{message.message}</div>
              <div
                className={
                  successful ? 'alert alert-success' : 'alert alert-danger'
                }
                role="alert"
              >
                {message.message}
              </div>
            </div>
          )}

          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </article>
  );
};

export default NewRecipeForm;

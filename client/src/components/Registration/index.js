import React, { Component } from 'react';
import {
  Col,
  Row,
  ButtonToggle,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from 'reactstrap';

import styles from './styles.module.css';
import recipeBoxImage from '../../img/recipeBox.png';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(event, errors, values) {
    this.setState({ errors, values });
  }

  render() {
    return (
      <div className={styles.regForm}>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="oEmailAddr">Email</Label>
                <Input
                  bsSize="sm"
                  type="email"
                  name="email"
                  id="oEmailAddr"
                  placeholder="email Address"
                />
              </FormGroup>
            </Col>
            <Col md={6}></Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="oFirstName">First Name</Label>
                <Input
                  bsSize="sm"
                  type="text"
                  name="oFirstName"
                  id="oFirstName"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="oLastName">Last Name</Label>
                <Input bsSize="sm" type="text" name="LastName" id="oLastName" />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="oPassword">Password</Label>
                <Input
                  bsSize="sm"
                  type="password"
                  name="password"
                  id="oPassword"
                  placeholder="Password"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="oPasswordConfirm">Confirm Password</Label>
                <Input
                  bsSize="sm"
                  type="password"
                  name="passwordConfirm"
                  id="oPasswordConfirm"
                  placeholder="Confirm Password"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={12}>
              <div className={styles.formHeaderGroup}>
                Where did you hear about us?
              </div>
              <ReferenceSource />
            </Col>
          </Row>

          <Row form>
            <Col md={12}>
              <div className={styles.formHeaderGroup}>Membership Rules</div>
              <RulesBlock />
              <p>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> I have read, understood, and
                    accepted the rules for membership.
                  </Label>
                </FormGroup>
              </p>
            </Col>
          </Row>
          <Row form>
            <br />
            <Col md={{ size: 10, offset: 1 }}>
              <br />
              <ButtonToggle color="success"> Sign Up </ButtonToggle>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

function RulesBlock() {
  return (
    <div>
      <ol>
        <li>Membership is available to anyone 18 years of age or older.</li>
        <li>
          You promise NOT to use to conduct any fraudulent or business activity
          or have more than one Member Account at any time.
        </li>
      </ol>
    </div>
  );
}

function ReferenceSource() {
  return (
    <div>
      Where did you hear about My Recipe Box?
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> A Friend or colleauge
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Google
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Blog Post
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Forum Post
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> News Article
        </Label>
      </FormGroup>
    </div>
  );
}

export default RegistrationForm;

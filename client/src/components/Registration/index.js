import React, { Component } from 'react';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from 'reactstrap';

import styles from './styles.module.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.regForm}>
        <Form>
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
                  placeholder="Confiorm Password"
                />
              </FormGroup>
            </Col>
          </Row>

          <Button>Sign Up</Button>
        </Form>
      </div>
    );
  }
}

export default RegistrationForm;

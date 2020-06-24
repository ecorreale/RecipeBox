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

          <Row form>
            <Col md={6}>
              <ReferenceSource />
            </Col>
            <Col md={6}>

            </Col>
          </Row>
          <br />
          <Button>Sign Up</Button>
        </Form>
      </div>
    );
  }
}

// function Source() {
//   <div>

//     <div>Where did you hear about us?</div>

//     <!-- Material checked -->

// <div class="form-check">
//       <input type="checkbox" class="form-check-input" id="materialChecked2" checked>
//         <label class="form-check-label" for="materialChecked2">Material checked</label>
// </div>


//     </div>

// }


function RulesBlock() {
  return (
    <div>
      <ol>
        <li>Membership is available to anyone 18 years of age or older.</li>
        <li>You promise NOT to use to conduct any fraudulent or business activity or have more than one Member Account at any time.</li>
      </ol>
    </div>
  );

}

function ReferenceSource() {

  return (
  <div> Where did you hear about My Recipe Box?</div>
  <FormGroup check>
    <Label check>
      <Input type="checkbox" />{' '}
        A Friend or colleauge
      </Label>
  </FormGroup>

  <FormGroup check>
    <Label check>
      <Input type="checkbox" />{' '}
        Google
      </Label>
  </FormGroup>

  <FormGroup check>
    <Label check>
      <Input type="checkbox" />{' '}
        Blog Post
      </Label>
  </FormGroup>

  <FormGroup check>
    <Label check>
      <Input type="checkbox" />{' '}
        Forum Post
      </Label>
  </FormGroup>

  <FormGroup check>
    <Label check>
      <Input type="checkbox" />{' '}
        News Article
      </Label>
  </FormGroup>
  );

}

export default RegistrationForm;

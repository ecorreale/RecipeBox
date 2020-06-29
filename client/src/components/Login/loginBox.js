import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    // this.state.IsAuthenticated = this.state.IsAuthenticated.bind(this)
  }

  // ToDo:  Define state variables for username and IsAuthetnicated
  render() {
    if (this.props.IsAuthenticated) {
      return (
        <div style={{ fontSize: '11px' }}> Welcome {this.props.UserName} </div>
      );
    } else {
      return (
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="oUsername" className="mr-sm-2">
              Email
            </Label>
            <Input
              bsSize="sm"
              type="email"
              name="email"
              id="oUsername"
              placeholder="eMail Address"
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="oPassword" className="mr-sm-2">
              Password
            </Label>
            <Input bsSize="sm" type="password" name="password" id="oPassword" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      );
    }
  }
}

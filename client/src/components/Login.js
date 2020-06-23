import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserLogin = (props) => {
  //ToDo:  Define state variables for username and IsAuthetnicated

  if (props.IsAuthenticated) {
    return <div style={{ fontSize: '11px' }}> Welcome {props.UserName} </div>;
  } else {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="oUsername" className="mr-sm-2">
            Email
          </Label>
          <Input
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
          <Input type="password" name="password" id="oPassword" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
};

export default UserLogin;

import React, { Component } from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';
import RegistrationForm from '../../components/Registration';

class Registration extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navigation />
        <Wrapper>
          <h2>New Member Signup Form</h2>
          <h4>Complete the form below to sign up for RecipeBox</h4>

          <RegistrationForm />
        </Wrapper>
      </div>
    );
  }
}

export default Registration;

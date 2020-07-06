import React from 'react';
import Navigation from '../../components/NavBar';
import Wrapper from '../../components/Wrapper';
import RegistrationForm from '../../components/Registration';

// class Registration extends Component {
//   render() {
function RegistrationPage() {
  return (
    <div>
      <Navigation />
      <Wrapper>
        <h2>New Member Signup Form</h2>
        <h6>Complete the form below to sign up for RecipeBox</h6>
        <RegistrationForm />
      </Wrapper>
    </div>
  );
}

export default RegistrationPage;

import React, { Component } from 'react';
import LoginForm from '../../components/Login';
import Wrapper from '../../components/Wrapper';
import Navigation from '../../components/NavBar';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Wrapper>
          <h2>Sign In</h2>
          <LoginForm />
        </Wrapper>
      </div>
    );
  }
}

export default LoginPage;

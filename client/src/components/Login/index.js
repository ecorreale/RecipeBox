import React, { Component } from 'react';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };
  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      // return <Redirect to='/' />
    }

    return <div>Login</div>;
  }
}

export default Login;

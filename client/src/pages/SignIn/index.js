import React from 'react';
import SignIn from '../../components/SignIn';
import Wrapper from '../../components/Wrapper';
import Navigation from '../../components/NavBar';
import { Helmet } from 'react-helmet';

function LoginPage() {
  return (
    <article>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <Navigation />
      <Wrapper>
        <SignIn />
      </Wrapper>
    </article>
  );
}

export default LoginPage;

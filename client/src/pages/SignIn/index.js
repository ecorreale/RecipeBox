import React from 'react';
import SignIn from '../../components/SignIn';
import Wrapper from '../../components/Wrapper';
import Navigation from '../../components/NavBar';

function LoginPage() {
  return (
    <article>
      <Navigation />
      <Wrapper>
        <SignIn />
      </Wrapper>
    </article>
  );
}

export default LoginPage;

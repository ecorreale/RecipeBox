import React from 'react';
import SignIn from '../../components/SignIn';
// import SignedIn from '../../components/SignIn/SignedIn';
import Wrapper from '../../components/Wrapper';
import Navigation from '../../components/NavBar';
// import AuthService from '../../Services/auth.service'

function LoginPage() {
  // const IsAuthenticated = AuthService.GetAuthStatus()

  return (
    <div>
      <Navigation />
      <Wrapper>
        <SignIn />
      </Wrapper>
    </div>
  );
}

export default LoginPage;

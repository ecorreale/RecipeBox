import React, { useContext } from 'react';
import SignInForm from './SignInForm';
import AuthService from '../../Services/auth.service';
import SignedIn from './SignedIn';

function SignIn(props) {
  const IsAuthenticated = AuthService.GetAuthStatus();

  console.log('IsAuthenticated: ' + IsAuthenticated);

  return IsAuthenticated ? <SignedIn /> : <SignInForm />;
}
export default SignIn;

import React, { useContext } from 'react';
import SignInForm from './SignInForm';
import AuthService from '../../Services/auth.service';
import SignedIn from './SignedIn';

export default function SignIn(props) {
  const IsAuthenticated = AuthService.GetAuthStatus();

  return IsAuthenticated ? <SignedIn /> : <SignInForm />;
}

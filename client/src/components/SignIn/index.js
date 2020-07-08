import React, { useContext } from 'react';
import SignInForm from './SignInForm';
import AuthService from '../../Services/auth.service';

export default function SignIn(props) {
  const IsAuthenticated = AuthService.GetAuthStatus();

  return IsAuthenticated ? (window.location.href = '/') : <SignInForm />;
}

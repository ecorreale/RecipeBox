import React from 'react';
import SignInForm from './SignInForm';
import AuthService from '../../Services/AuthService';

export default function SignIn(props) {
  const IsAuthenticated = AuthService.GetAuthStatus();

  return IsAuthenticated ? (window.location.href = '/') : <SignInForm />;
}

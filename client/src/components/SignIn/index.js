import React from 'react';
import SignInForm from './SignInForm';
import AuthService from '../../Services/auth.service.js';

export default function SignIn(props) {
  const IsAuthenticated = AuthService.GetAuthStatus();

  return IsAuthenticated ? (window.location.href = '/') : <SignInForm />;
}

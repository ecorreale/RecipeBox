import React from 'react';
import Wrapper from '../../components/Wrapper';
import Navigation from '../../components/NavBar';
import AuthService from '../../Services/auth.service';

export default function SignOutPage() {
  AuthService.SignOut();

  return (
    <div>
      <Navigation />
      <Wrapper>{(window.location.href = '/')}</Wrapper>
    </div>
  );
}

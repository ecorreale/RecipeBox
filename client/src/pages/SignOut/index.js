import React from 'react';
import Wrapper from '../../components/Wrapper';
import Navigation from '../../components/NavBar';
import AuthService from '../../Services/auth.service';

export default function SignOutPage() {
  AuthService.SignOut();

  return (
    <div>
      <Navigation />
      <Wrapper>
        <h2>Hope to see you again soon</h2>
      </Wrapper>
    </div>
  );
}

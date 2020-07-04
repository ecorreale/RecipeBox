import React, { useState } from 'react';

import GuestNavBar from './GuestNavBar';
import MemberNavBar from './MemberNavBar';
import AuthService from '../../Services/auth.service';

var IsAuthenticated = AuthService.GetAuthStatus();
function Navigation() {
  console.log('IsAuthenticated: ' + IsAuthenticated);

  if (IsAuthenticated) {
    console.log(IsAuthenticated);
    return <MemberNavBar />;
  }

  return <GuestNavBar />;
}

export default Navigation;

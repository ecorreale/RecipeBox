import React from 'react';

import GuestNavBar from './GuestNavBar';
import MemberNavBar from './MemberNavBar';
import AuthService from '../../Services/auth.service.js';

var IsAuthenticated = AuthService.GetAuthStatus();
function Navigation() {
  console.log('IsAuthenticated: ' + IsAuthenticated);

  if (IsAuthenticated) {
    return <MemberNavBar />;
  }

  return <GuestNavBar />;
}

export default Navigation;

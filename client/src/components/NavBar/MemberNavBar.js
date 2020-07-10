import React, { useState } from 'react';
import Styles from './styles.module.css';

import AuthService from '../../services/AuthService';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function GuestNavBar() {
  const { isOpen, setIsOpen } = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    AuthService.SignOut();
  };

  return (
    <div className={Styles.NavBorder}>
      <Navbar className={Styles.NavBarCustom} dark expand="md">
        <NavbarBrand href="/">My Recipe Box</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/MyRecipes">My Recipes</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/New">New Recipe</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/" onClick={logOut}>
                Sign Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

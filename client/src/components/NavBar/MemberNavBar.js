import React, { useState } from 'react';
import Styles from './styles.module.css';

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

  return (
    <div className={Styles.NavBorder}>
      <Navbar className={Styles.NavBarCustom} light expand="md">
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
              <NavLink href="/signOut">Sign Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

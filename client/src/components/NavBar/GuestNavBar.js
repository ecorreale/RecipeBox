import React, { useState } from 'react';
import styles from './styles.module.css';

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
    <div className={styles.NavBorder}>
      <Navbar className={styles.NavBarCustom} light expand="md">
        <NavbarBrand href="/">My Recipe Box</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink>My Recipies</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/SignIn">Sign In</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/SignUp">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

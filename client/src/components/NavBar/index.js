import React, { Component } from 'react';
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

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      IsAuthenticated: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleSignIn() {
    this.setState({
      IsAuthenticated: true,
    });
  }

  handleSignOut() {
    this.setState({
      IsAuthenticated: false,
    });
  }

  handleSignUp() {
    console.log('SignUp Button Clicked');
  }

  render() {
    console.log('IsAuthenticated: ' + this.state.IsAuthenticated);

    return (
      <div className={styles.NavBorder}>
        <Navbar className={styles.NavBarCustom} light expand="md">
          <NavbarBrand href="/">My Recipe Box</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/MyRecipes">My Recipies</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/SignIn">Sign In</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/SignUp">Register</NavLink>
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
}

export default Navigation;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from './styles.module.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavbarText,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

import Login from '../Login/index';

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

  AuthenticatedNav() {
    if (this.state.IsAuthenticated) {
      return (
        <NavItem>
          <NavLink href="/RecipeBox">My Recipes</NavLink>
        </NavItem>
      );
    } else {
      return (
        <div>
          <Button
            style={{ marginRight: '10px' }}
            className={'btn-sm'}
            onClick={this.handleSignIn}
            outline
            color="success"
          >
            Sign In
          </Button>

          <Button
            className={'btn-sm'}
            onClick={this.handleSignUp}
            outline
            color="success"
          >
            Sign Up
          </Button>
        </div>
      );
    }
  }

  render() {
    console.log('IsAuthenticated: ' + this.state.IsAuthenticated);

    return (
      <div className={styles.NavBorder}>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">My Recipe Box</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              {this.AuthenticatedNav()}

              <NavItem>
                <Link to={`${this.handleSignOut}`}>Sign Out</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

{
  /* <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> */
}

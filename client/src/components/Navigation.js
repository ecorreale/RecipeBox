import React, { Component } from 'react';
import icons from 'glyphicons';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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

import LoginStatus from './Login';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">The Recipe Box</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                                <NavLink href="/Home">Home</NavLink>
                            </NavItem> */}

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/Search">Search</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Saved">Saved</NavLink>
              </NavItem>

              {/* <NavbarText><LoginStatus UserName="Ernest Correale" IsAuthenticated={false}/></NavbarText> */}
              <NavItem>
                <NavLink href="/">{icons.pe} Sign-In</NavLink>
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

import React, { Component } from 'react';
import { MealTypes } from '../Strings';

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownItem,
} from 'reactstrap';

export class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownValue: 'All',
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  handleChange(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      dropdownValue: event.target.innerText,
    });
  }

  render() {
    return (
      <div className="input-group mt-3 mb-3">
        <div className="input-group-prepend">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <Button id="SearchSelector" color="secondary">
              {'Search: ' + this.state.dropdownValue}
            </Button>
            <DropdownToggle caret color="secondary" size="sm" />

            <DropdownMenu>
              {MealTypes.map((mealType, index) => (
                <DropdownItem
                  key={index}
                  onClick={this.handleChange}
                  dropdownValue={mealType}
                >
                  {mealType}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Recipe Titles"
        />
      </div>
    );
  }
}

export default SearchBox;

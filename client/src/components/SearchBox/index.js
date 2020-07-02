import React, { Component } from 'react';
import { MealTypes } from '../Strings';
import axios from 'axios';

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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchRecipes = this.searchRecipes.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownValue: 'All',
      query: '',
    };
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
    console.log(this.state.query);
  }

  searchRecipes() {
    console.log('clicked');
    axios
      .get('/api/recipes/edamam/search', { params: { q: this.state.query } })
      .then((edamamRecipesData) => {
        console.log(edamamRecipesData);
        // setRecipes(RecipesData.data.items);
      });
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
          <ButtonDropdown
            onClick={this.searchRecipes}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
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
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchBox;

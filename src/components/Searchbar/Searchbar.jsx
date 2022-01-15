import React, { Component } from "react";

import { FiSearch } from "react-icons/fi";
import { Header, Form, Input } from "./Searchbar.styled";
import IconButton from "../IconButton/IconButton";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  searchQueryChangeHandler = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);

    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: "" });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <Header>
        <Form onSubmit={this.submitHandler}>
          <Input
            onChange={this.searchQueryChangeHandler}
            value={searchQuery}
            placeholder="Search images and photos"
            type="text"
            autocomplete="off"
          ></Input>
          <IconButton>
            <FiSearch />
          </IconButton>
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

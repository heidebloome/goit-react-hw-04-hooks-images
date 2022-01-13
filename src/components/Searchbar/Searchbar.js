import React, { Component } from "react";

import { FiSearch } from "react-icons/fi";
import { Wrapper, Form, Label, Input } from "./Searchbar.styled";
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
      <Wrapper>
        <Form onSubmit={this.submitHandler}>
          <Label>
            <Input
              onChange={this.searchQueryChangeHandler}
              value={searchQuery}
            ></Input>
          </Label>
          <IconButton>
            <FiSearch />
          </IconButton>
        </Form>
      </Wrapper>
    );
  }
}

export default Searchbar;

import React, { Component } from "react";
import toast from "react-hot-toast";

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
    
    const query = this.state.searchQuery.trim();
    
    if (query !== '') {
      this.props.onSubmit(query);
    } else {
      toast.error('Enter a valid query!', {
        duration: 2000
      })
    }

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

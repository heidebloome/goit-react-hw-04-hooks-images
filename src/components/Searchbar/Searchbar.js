import React, { Component } from "react";

import { FiSearch } from "react-icons/fi";
import IconButton from "../IconButton/IconButton";

class Searchbar extends Component {
  render() {
    return (
      <form>
        <IconButton>
          <FiSearch />
        </IconButton>
        <label>
          <input></input>
        </label>
      </form>
    );
  }
}

export default Searchbar;

import React, { Component } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    searchQuery: "",
  };

  searchFormSubmitHandler = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchFormSubmitHandler} />
        <ImageGallery query={this.state.searchQuery} />
      </>
    );
  }
}

export default App;

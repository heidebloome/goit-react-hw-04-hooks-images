import React, { Component } from "react";
import { Toaster } from "react-hot-toast";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
        <Searchbar
          onSubmit={this.searchFormSubmitHandler}
          changeStatus={this.statusHAndler}
        />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <Toaster />
      </>
    );
  }
}

export default App;

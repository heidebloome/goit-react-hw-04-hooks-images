import React, { Component } from "react";
import { Toaster } from "react-hot-toast";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    searchQuery: "",
    showModal: false,
    activeImg: "",
  };

  searchFormSubmitHandler = (query) => {
    this.setState({ searchQuery: query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  activeImageHandler = (url) => {
    this.setState({ activeImg: url });
  };

  render() {
    return (
      <>
        <Searchbar
          onSubmit={this.searchFormSubmitHandler}
          changeStatus={this.statusHAndler}
        />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          onImgClick={this.toggleModal}
          activeImgHandler={this.activeImageHandler}
        />
        {this.state.showModal && (
          <Modal closeModal={this.toggleModal} url={this.state.activeImg} />
        )}
        <Toaster />
      </>
    );
  }
}

export default App;

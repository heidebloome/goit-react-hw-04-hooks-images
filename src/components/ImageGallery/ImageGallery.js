import React, { Component } from "react";

import { Gallery } from "./ImageGallery.styled";

class ImageGallery extends Component {
  render() {
    return (
      <Gallery>
        <div>
          {this.props.query
            ? `There will be pictures of ${this.props.query}`
            : "There are no pictures yet"}
        </div>
      </Gallery>
    );
  }
}

export default ImageGallery;

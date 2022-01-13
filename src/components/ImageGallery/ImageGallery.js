import React, { Component } from "react";
import getPictures from "../../services/api-service";

import { Gallery } from "./ImageGallery.styled";

class ImageGallery extends Component {
  state = {
    pictures: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      getPictures(searchQuery, 1).then((data) =>
        this.setState({ pictures: data })
      );
    }
  }

  render() {
    return (
      <Gallery>
        <div>
          {this.props.searchQuery ? (
            <ul>
              {this.state.pictures.map((el) => (
                <li key={el.id}>
                  <img src={el.webformatURL} alt={this.props.searchQuery} />
                </li>
              ))}
            </ul>
          ) : (
            "There are no pictures yet"
          )}
        </div>
      </Gallery>
    );
  }
}

export default ImageGallery;

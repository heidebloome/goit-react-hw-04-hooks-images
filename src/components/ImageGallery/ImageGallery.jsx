import React, { Component } from "react";
import toast from "react-hot-toast";

import { Gallery } from "./ImageGallery.styled";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import API_SERVICE from "../../services/api-service";
const apiService = new API_SERVICE();

class ImageGallery extends Component {
  state = {
    pictures: [],
    status: 'idle',
    loadMore: false // status for a "Load more" button
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      apiService.resetPage();
      apiService.query = searchQuery;
      this.setState({ status: 'pending' });
      setTimeout(async () => {
        const pictures = await apiService.getImages();
        
        // If a non-valid word was entered in the query, the query returns an empty array

        if (pictures.length === 0) {
          toast.error('Please, enter a valid search query!', {
            duration: 2000
          });
          this.setState({ status: 'idle' });
        } else {
          this.setState({ pictures: pictures });
        this.setState({ status: 'resolved' });
        }
        
      }, 2000)
    }
  }

  loadMorePictureBtnHandler = () => {
    this.setState({ loadMore: true });
    setTimeout(async () => {
      const newPictures = await apiService.getImages();
      this.setState(prevState => {
      return ({ pictures: [...prevState.pictures, ...newPictures] })
      });
      this.setState({ loadMore: false });
    }, 2000)

  }

  render() {
    if (this.state.status === 'idle') {
      return <div>There are no pictures yet</div>
    }

    if (this.state.status === 'pending') {
      return <Loader />
    }

    if (this.state.status === 'resolved') {
      return (<>
                <Gallery>
                  {this.state.pictures.map((el) => (
                    <ImageGalleryItem key={el.id} url={el.webformatURL} alt={this.props.searchQuery}/>
                  ))}
                </Gallery>
                {this.state.loadMore && <Loader />}
                { this.state.pictures.length >= 12 && <Button onClick={this.loadMorePictureBtnHandler}/>}</>
      )}
  }
}

export default ImageGallery;

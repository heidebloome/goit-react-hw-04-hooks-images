import React, { Component } from "react";
import toast from "react-hot-toast";

import { Gallery } from "./ImageGallery.styled";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Infobox from "../Infobox/Infobox";

import API_SERVICE from "../../services/api-service";
const apiService = new API_SERVICE();

class ImageGallery extends Component {
  state = {
    pictures: [],
    status: 'idle',
    loadMore: false, // status for a loader when we click on a "Load more" button
    button: false // status for a "Load more" button
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      apiService.resetPage();
      apiService.query = searchQuery;
      this.setState({ status: 'pending' });

      setTimeout(async () => {
        const pictures = await apiService.getImages();
        
        // if a non-valid word was entered in the query, the query returns an empty array

        if (pictures.length === 0) {
          toast.error('Please, enter a valid search query!', {
            duration: 2000
          });
          this.setState({ status: 'idle' });
        } else {
          this.setState({ pictures: pictures });
          this.setState({ status: 'resolved' });
        }

        if (pictures.length === 12) {
          this.setState({button: true})
        }
        
      }, 2000)
    }

    // scroll to the new pictures
    
    if (prevState.pictures.length !== this.state.pictures.length) {
      const list = document.querySelectorAll('#image');
      if (list.length !== 0) {
        list[list.length - 12].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }

  loadMorePictureBtnHandler = () => {
    this.setState({ loadMore: true });
    this.setState({ button: false });
    setTimeout(async () => {
      const newPictures = await apiService.getImages();

      this.setState(prevState => {
      return ({ pictures: [...prevState.pictures, ...newPictures] })
      });
      this.setState({ loadMore: false });

      if (newPictures.length === 12) {
        this.setState({button: true})
      } else {
        this.setState({button: false})
      }
    }, 2000)

  }

  render() {
    const { status, pictures, loadMore, button } = this.state;

    if (status === 'idle') {
      return <Infobox />
    }

    if (status === 'pending') {
      return <Loader />
    }

    if (status === 'resolved') {
      return (<>
                <Gallery>
                  {pictures.map((el) => (
                    <ImageGalleryItem key={el.id} url={el.webformatURL} alt={this.props.searchQuery}/>
                  ))}
                </Gallery>
                {loadMore && <Loader />}
                {button && <Button onClick={this.loadMorePictureBtnHandler} />}
              </>
      )}
  }
}

export default ImageGallery;

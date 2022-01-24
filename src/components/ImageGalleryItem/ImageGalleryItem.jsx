import React from "react";
import PropTypes from 'prop-types';

import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({url, largeImgUrl, query, id, onClick}) => {
    return (
        <Item>
            <Image
                src={url}
                alt={query}
                id={id}
                onClick={() => onClick(largeImgUrl)}
            />
        </Item>
    )
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    largeImgUrl: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem;
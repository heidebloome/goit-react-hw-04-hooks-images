import React from "react";

import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({url, largeImgUrl, query, id}) => {
    return (
        <Item><Image src={url} alt={query} data-url={largeImgUrl} id={id}/></Item>
    )
}

export default ImageGalleryItem;
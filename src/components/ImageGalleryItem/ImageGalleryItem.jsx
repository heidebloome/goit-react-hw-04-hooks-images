import react from "react";

import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({url, query}) => {
    return (
        <Item><Image src={url} alt={query}/></Item>
    )
}

export default ImageGalleryItem;
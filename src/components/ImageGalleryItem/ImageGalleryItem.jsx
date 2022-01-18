import react from "react";

import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({url, bigUrl, query, onClick}) => {
    return (
        <Item id="image"><Image src={url} alt={query} onClick={() => {onClick(bigUrl)}}/></Item>
    )
}

export default ImageGalleryItem;
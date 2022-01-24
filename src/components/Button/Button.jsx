import React from "react";
import PropTypes from 'prop-types';

import { LoadMoreButton } from "./Button.styled";

const Button = ({onClick}) => {
    return (
        <LoadMoreButton type="submit" onClick={onClick}>Load more</LoadMoreButton>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button;
import react, {Component} from "react";
import { createPortal } from "react-dom";

import { Backdrop, ModalWindow } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.closeModalHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModalHandler);
    }

    closeModalHandler = (e) => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    }

    render() {
        return createPortal(
            <Backdrop onClick={(e) => {
                if (e.target === e.currentTarget) {
                    this.props.closeModal();
                }
            }}>
                <ModalWindow src={this.props.url}></ModalWindow>
            </Backdrop>
            , modalRoot)
    }
}

export default Modal;
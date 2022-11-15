import React, { Component} from "react";
import {createPortal} from "react-dom";


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.hanleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hanleKeyDown)
    }

    hanleKeyDown = event => {
        if (event.code === 'Escape') {this.props.showModalToggle()}
    }
    
    handleBackdropClick = event => {
        if (event.target === event.currentTarget) {this.props.showModalToggle()}
    }

    render() {
        const {searchRequest, largeImageURL} = this.props
    return createPortal(<div className="Overlay" onClick={this.handleBackdropClick}>
            <div className="Modal">
                <img src={largeImageURL} alt={searchRequest} />
            </div>
        </div>, modalRoot)}
}
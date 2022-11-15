import React, { Component} from 'react';

import Modal from "../../Modal/Modal";

export default class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }
    showModalToggle = () => {
    this.setState({showModal: !this.state.showModal})
  }
    render() {
        const { showModalToggle } = this
        const { previewURL, largeImageURL } = this.props.searchResult
        const { searchRequest } = this.props
        
        return (
        <li className="ImageGalleryItem">
            <img
                src={previewURL}
                alt={searchRequest}
                onClick={() => { showModalToggle() }}
                className="ImageGalleryItem-image"
            />
            {this.state.showModal && <Modal
                showModalToggle={showModalToggle}
                largeImageURL={largeImageURL}
                searchRequest={searchRequest}
            />}
    </li>)
    }
}
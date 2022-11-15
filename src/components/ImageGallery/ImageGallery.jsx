import React, { Component } from "react";

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import Loader from '../Loader/Loader'

export default class ImageGallery extends Component {
    renderFetchedImages = (searchResults, searchbarValue) => {
            return searchResults.map(searchResult => <ImageGalleryItem key={searchResult.id} searchResult={searchResult} searchRequest={searchbarValue}/>)
        }

    render() {
        const { searchResults, status, searchbarValue} = this.props
        return (
            <div>
                <ul className="ImageGallery">
                {this.renderFetchedImages(searchResults, searchbarValue)}
                </ul>
                {status === 'loading'&& Loader()}
            </div>
        )
    }
}
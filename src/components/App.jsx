import React, { Component, Fragment } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    searchbarValue: '',
    page: 1,
    buttonNeedRender: false,
    searchResults: [],
    status: '',
  };

  componentDidUpdate(_, prevState) {
    const { searchbarValue, page } = this.state;
    if (
      prevState.searchbarValue !== searchbarValue ||
      prevState.page !== page
    ) {
      this.setState({ status: 'loading' });
      fetch(
        `https://pixabay.com/api/?q=${searchbarValue}&page=${page}&key=30336513-f1d3dcf5d3b6560ebccde30e0&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(response => {
          if (response.hits.length) {
            this.setState({
              searchResults: [...prevState.searchResults, ...response.hits],
              buttonNeedRender: true,
            });
          } else {
            this.setState({searchResults: [], buttonNeedRender: false })
            alert('no hits found');
          }
        })
        .finally(this.setState({ status: 'completed' }));
    }
  }

  onSubmit = searchbarValue => {
    this.setState({ searchbarValue: searchbarValue, searchResults: [], page: 1 });
  };
  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { searchbarValue, buttonNeedRender, status, searchResults } = this.state;
    const { onSubmit, loadMore } = this;
    return (
      <Fragment>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery
          searchbarValue={searchbarValue}
          searchResults={searchResults}
          status={status}
        />
        {buttonNeedRender && <Button loadMore={loadMore} /> }
      </Fragment>
    );
  }
}

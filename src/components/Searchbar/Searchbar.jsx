import React, { Component} from "react";

export default class Searchbar extends Component {
    state = {
    searchbarValue: ''
    }

    handleChange = (event) => {
        this.setState({searchbarValue: event.currentTarget.value})
    }

    handleSubmit = (event) => {
        const { searchbarValue } = this.state;
        event.preventDefault();
        if (this.state.searchbarValue.trim() === '') {
            alert('Please enter image for search.')
            return
        }
        else {
            this.props.onSubmit(searchbarValue)
        }
    }
    
  render() {
      const {handleSubmit, handleChange} = this
        return (
            <header className="Searchbar">
  <form className="form" onSubmit={handleSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>
    <input
      value={this.state.searchbarValue}
      onChange={handleChange}
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './searchBox.css';

class SearchBox extends Component {

    state = {
        searchedText: ''
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value.toLowerCase() });

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.state.searchedText);
    }

    render() {
        const { searchedText } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='searchedText' onChange={this.handleChange} value={searchedText} />
                <button type='submit'>Search</button>
            </form>
        );
    }
}

SearchBox.propTypes = {
    handleSearch: PropTypes.func.isRequired
  };

export default SearchBox;
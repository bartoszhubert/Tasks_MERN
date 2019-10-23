import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './searchBox.css';

class SearchBox extends Component {

    static displayName = 'SearchBox';

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
            <form style={{ padding: '20px' }} onSubmit={this.handleSubmit}>
                <input className='search' type='text' name='searchedText' onChange={this.handleChange} value={searchedText} />
                <Button type='submit' text='Submit' />
            </form>
        );
    }
}

SearchBox.propTypes = {
    handleSearch: PropTypes.func.isRequired
  };

export default SearchBox;
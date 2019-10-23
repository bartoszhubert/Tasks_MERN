import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ onClick, text, type, ...rest }) => {
    return (
        <button onClick={onClick} type={type} className='btn' { ...rest }>{text}</button>
    );
}

Button.defaultProps = {
    onClick: () => {},
    text: '',
    type: 'text'
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string
};

export default Button;
import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ name, onBlur, onChange, title, type, value }) => {
    return (  
        <div className="form-group">
            <label htmlFor={ name } className="form-label">{ title }</label>
            <input
                // className={ "form-input " + (!!formErrors[name] ? 'form-input-error' : '') }
                id={ name }
                name={ name }
                type={ type }
                value={ value }
                onBlur={ onBlur }
                onChange={ onChange }
            />
            {/* { !!formErrors[name] && <span className='form-error'>{ formErrors[name] }</span> } */}
        </div>
    );
}

Input.displayName = 'Input';

Input.defaultProps = {
    type: 'text',
  }

Input.propTypes = {
    // formErrors: PropTypes.shape({
    //     email: PropTypes.string,
    //     name: PropTypes.string,
    //     username: PropTypes.string
    // }).isRequired,
    // PropTypes.shape(ITASK).isRequired
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default Input;
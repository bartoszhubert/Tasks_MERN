import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const  DATA_FORMAT = '(DD.MM.RRRR)';

const Input = ({ errorMsg, name, onBlur, onChange, title, type, value, ...rest }) => {
    return (  
        <div className="form-group">
            <label htmlFor={ name } className="form-label">{ name }{ name === 'data' && <span className='infoData'>{DATA_FORMAT}</span> }</label>
            <input
                style={{ minWidth: '170px' }}
                id={ name }
                name={ name }
                type={ type }
                value={ value }
                onBlur={ onBlur }
                onChange={ onChange }
                { ... rest }
            />
            { !!errorMsg && <span className='form-error'>{ errorMsg }</span> }
        </div>
    );
}

Input.displayName = 'Input';

Input.defaultProps = {
    errorMsg: '',
    onBlur: () => {},
    onChange: () => {},
    type: 'text'
  }

Input.propTypes = {
    errorMsg: PropTypes.string,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string
};

export default Input;
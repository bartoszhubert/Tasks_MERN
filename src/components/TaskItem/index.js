import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ITASK } from '../../utility/constant';

import './taskItem.css';

class TaskItem extends Component {

    render() {
        const { data, kategoria, opis, priorytet, temat } = this.props.task;
        return (
            <div className='item-container'>
                <h3>{temat}</h3>
                <span>{opis}</span>
                <span>{kategoria}</span>
                <span>{data}</span>
                <span>{priorytet}</span>
                <div>
                    <button>ROZPOCZNIJ</button>
                    <button>ZAKONCZ</button>
                </div>
            </div>
        )
    }
}

TaskItem.propTypes = {
    task: PropTypes.shape(ITASK).isRequired
};

export default TaskItem;
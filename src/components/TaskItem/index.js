import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { ITASK } from '../../utility/constant';
import { getActualFormattedDate, setBtnColor } from '../../utility/function';

import './taskItem.css';

class TaskItem extends Component {

    getDetailsPage = async () => {
        const { fetchSelectedTaskAPI, history, task: { _id } } = this.props;
        await fetchSelectedTaskAPI(_id);
        history.push(`/details/${_id}`);
    }

    render() {
        const { data, kategoria, opis, priorytet, temat } = this.props.task;
        return (
            <div className='item-container'>
                <div onClick={this.getDetailsPage} className='item-infoWrap'>
                    <h2 className='item-important'>{temat}</h2>
                    <div style={{padding: '10px'}}>{opis}</div>
                </div>
                <div className='item-infoWrap'>
                    <span>Kategoria: <span className='item-important'>{kategoria}</span></span>
                    <span>Data: <span className='item-important'>{data}</span></span>
                    <span style={{color: setBtnColor(priorytet)}}>{priorytet}</span>
                </div>
                <div className='item-btnWrap'>
                    <button className='item-btn' onClick={() => {}}>ROZPOCZNIJ</button>
                    <button className='item-btn' onClick={() => {}}>ZAKONCZ</button>
                </div>
            </div>
        );
    }
}

TaskItem.propTypes = {
    fetchSelectedTaskAPI: PropTypes.func.isRequired,
    task: PropTypes.shape(ITASK).isRequired
};

export default withRouter(TaskItem);
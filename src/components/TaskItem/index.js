import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { ITASK } from '../../utility/constant';
import { setBtnColor } from '../../utility/function';

import './taskItem.css';

const START = ['ROZPOCZNIJ', 'ROZPOCZETE'];
const END = 'ZAKONCZ';

class TaskItem extends Component {

    static displayName = 'TaskItem';

    getDetailsPage = async () => {
        const { fetchSelectedTaskAPI, history, task: { _id } } = this.props;
        await fetchSelectedTaskAPI(_id);
        history.push(`/details/${_id}`);
    }

    setTaskDate = action => {
        if (this.makingRequest) return;
        this.makingRequest = true;
        const { setTaskDateAPI, task } = this.props;
        setTaskDateAPI(task, action);
        this.makingRequest = false;
    }

    render() {
        const { data, kategoria, opis, priorytet, start, stop, temat } = this.props.task;
        const isStartDisabled = start && start.length > 0;
        const isStopDisabled = stop && stop.length > 0;
        return (
            <div className='item-container'>
                <div onClick={this.getDetailsPage} className='item-infoWrap clickable'>
                    <h2 className='item-important'>{temat}</h2>
                    <div style={{padding: '10px'}}>{opis}</div>
                </div>
                <div className='item-infoWrap'>
                    <span>Kategoria: <span className='item-important'>{kategoria}</span></span>
                    <span>Data: <span className='item-important'>{data}</span></span>
                    <span style={{color: setBtnColor(priorytet)}}>{priorytet}</span>
                </div>
                <div className='item-btnWrap'>
                    <button 
                        className='item-btn' 
                        disabled={isStartDisabled} 
                        onClick={() => this.setTaskDate('start')}>
                            {isStartDisabled ? START[1] : START[0]}
                    </button>
                    <button 
                        className='item-btn' 
                        disabled={isStopDisabled || !isStartDisabled} 
                        onClick={() => this.setTaskDate('stop')}>
                            {END}
                    </button>
                </div>
            </div>
        );
    }
}

TaskItem.propTypes = {
    fetchSelectedTaskAPI: PropTypes.func.isRequired,
    setTaskDateAPI: PropTypes.func.isRequired,
    task: PropTypes.shape(ITASK).isRequired
};

export default withRouter(TaskItem);
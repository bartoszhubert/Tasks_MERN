import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskItem from '../TaskItem';
import { ITASK } from '../../utility/constant';

import './tasksList.css';

class TasksList extends Component {

    renderTaskItem = () => {
        return this.props.tasks.map(task => {
            return (
                <TaskItem key={task.email} task={task} />
            );
        });
    }

    renderView = () => {
        const { fetchingData, tasks } = this.props;
        if (fetchingData) {
            return <div>Loading...</div>
        }
        if (!fetchingData && tasks.length === 0) {
            return <div>no results</div>
        }
        return this.renderTaskItem();
    }

    render() {
        return (
            <div className='list-container'>
                {this.renderView()}
            </div>
        );
    }
}

TasksList.propTypes = {
    fetchingData: PropTypes.bool.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape(ITASK)),
};

export default TasksList;
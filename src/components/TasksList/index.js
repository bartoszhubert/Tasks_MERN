import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskItem from '../TaskItem';
import { ITASK } from '../../utility/constant';

import './tasksList.css';

class TasksList extends Component {

    static displayName = 'TasksList';

    renderTaskItem = () => {
        const { fetchSelectedTaskAPI, setTaskDateAPI, tasks } = this.props;
        const activeTasks = tasks.filter(task => !Boolean(task.stop));
        return activeTasks.map(task => {
            return (
                <TaskItem key={task.email} fetchSelectedTaskAPI={fetchSelectedTaskAPI} setTaskDateAPI={setTaskDateAPI} task={task} />
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
    fetchSelectedTaskAPI: PropTypes.func.isRequired,
    setTaskDateAPI: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape(ITASK)),
};

TasksList.defaultProps = {
    tasks: []  
}

export default TasksList;
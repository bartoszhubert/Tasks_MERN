import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSelectedTaskAPI, fetchTasksAPI, setTaskDateAPI } from '../../action';

import SearchBox from '../SearchBox';
import TasksList from '../TasksList';

import './homePage.css';

class HomePage extends Component {

    state = {
        fetchingData: false
    }

    componentDidMount = () => {
        this.props.tasks.length === 0 && this.handleSearch();
    }

    handleSearch = async data => {
        if (this.state.fetchingData) return;
        this.setState({ fetchingData: true });
        await this.props.fetchTasksAPI(data);
        this.setState({ fetchingData: false });
    }

    render() {
        const { fetchSelectedTaskAPI, setTaskDateAPI, tasks } = this.props;
        const { fetchingData } = this.state;
        return (
            <div className='home-container'>
                <SearchBox handleSearch={this.handleSearch} />
                <Link to='/create'>
                    <button>Create a new task</button>
                </Link>
                <TasksList fetchingData={fetchingData} fetchSelectedTaskAPI={fetchSelectedTaskAPI} setTaskDateAPI={setTaskDateAPI} tasks={tasks} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.controlPanel.tasks
});

export default connect(mapStateToProps, { fetchTasksAPI, fetchSelectedTaskAPI, setTaskDateAPI })(HomePage);
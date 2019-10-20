import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTasksAPI } from '../../action';

import SearchBox from '../SearchBox';
import TasksList from '../TasksList';

import './homePage.css';

class HomePage extends Component {

    state = {
        fetchingData: true
    }

    componentDidMount = async () => {
        this.handleSearch();
    }

    handleSearch = async data => {
        this.setState({ fetchingData: true });
        await this.props.fetchTasksAPI(data);
        this.setState({ fetchingData: false });
    }

    render() {
        const { tasks } = this.props;
        const { fetchingData } = this.state;
        return (
            <div className='home-container'>
                <SearchBox handleSearch={this.handleSearch} />
                <Link to='/create'>
                    <button>Create a new task</button>
                </Link>
                <TasksList fetchingData={fetchingData} tasks={tasks} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.controlPanel.tasks
});

export default connect(mapStateToProps, { fetchTasksAPI })(HomePage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasksAPI, updateSelectedTaskAPI } from '../../action';
import { editTaskInputs } from '../../utility/constant';

import './taskDetails.css';

class TaskDetails extends Component {

    state = {
        imie: '',
        nazwisko: '',
        email: '',
        temat: '',
        opis: '',
        data: '',
        kategoria: '',
        priorytet: '',
        uwagi: ''
    }

    componentDidMount = () => {
        this.isRequesting = false;
        const { selectedTask: { imie, nazwisko, email, temat, opis, data, kategoria, priorytet, uwagi } } = this.props;
        this.setState({ imie, nazwisko, email, temat, opis, data, kategoria, priorytet, uwagi });
    }

    backToHomePage = () => this.props.history.push('/');

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleSubmit = async e => {
        e.preventDefault();
        if (!this.isRequesting) {
            this.isRequesting = true;
            const { fetchTasksAPI, selectedTask: { _id }, updateSelectedTaskAPI } = this.props;
            const data = { ...this.state, _id };
            await updateSelectedTaskAPI(data);
            await fetchTasksAPI();
            this.backToHomePage();
            this.isRequesting = false;
        }
    }

    renderInput = () => {
        return editTaskInputs.map(input => {
            const isEditableInput = input === 'uwagi';
            return isEditableInput ?
                <div key={input}>
                    <label htmlFor={input}>{input}</label>
                    <input id={input} type='text' name={input} value={this.state[input]} onChange={this.handleChange} />
                </div> :
                <div key={input}>
                    <label htmlFor={input}>{input}</label>
                    <input id={input} type='text' readOnly name={input} defaultValue={this.state[input]}/>
                </div>
        });
    }

    render() {
        return (
            <div className='details-container'>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput()}
                    <button className='item-btn' type='submit'>Zapisz</button>
                </form>
                <button className='item-btn' onClick={this.backToHomePage}>Powrot</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedTask: state.controlPanel.selectedTask
});

export default connect(mapStateToProps, { fetchTasksAPI, updateSelectedTaskAPI })(TaskDetails);
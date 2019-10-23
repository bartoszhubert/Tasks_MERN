import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasksAPI, updateSelectedTaskAPI } from '../../action';
import { editTaskInputs } from '../../utility/constant';

import Button from '../Button';
import Input from '../Input';

import './taskDetails.css';

class TaskDetails extends Component {

    static displayName = 'TaskDetails';

    state = {
        imie: '',
        nazwisko: '',
        email: '',
        temat: '',
        opis: '',
        data: '',
        kategoria: '',
        priorytet: '',
        uwagi: '',
        isFormValid: true,
    }

    componentDidMount = () => {
        this.isRequesting = false;
        const { selectedTask: { imie, nazwisko, email, temat, opis, data, kategoria, priorytet, uwagi } } = this.props;
        this.setState({ imie, nazwisko, email, temat, opis, data, kategoria, priorytet, uwagi });
    }

    backToHomePage = () => this.props.history.push('/');

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value, isFormValid: value.length > 10 });

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
                <Input key={input} id={input} type='text' name={input} value={this.state[input]} onChange={this.handleChange} />
                    :
                <div className='form-group' key={input}>
                    <label htmlFor={input} className='form-label'>{ input }</label>
                    <input id={input} type='text' readOnly name={input} defaultValue={this.state[input]}/>
                </div>
        });
    }

    render() {
        const { isFormValid } = this.state;
        return (
            <div className='details-container'>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput()}
                    <Button className='item-btn' type='submit' text='Zapisz' disabled={!isFormValid} />
                </form>
                <Button className='item-btn' onClick={this.backToHomePage} text='Powrot' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedTask: state.controlPanel.selectedTask
});

export default connect(mapStateToProps, { fetchTasksAPI, updateSelectedTaskAPI })(TaskDetails);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTaskAPI } from '../../action';
import { errorsText, ITASK, priorytet } from '../../utility/constant';

import Button from '../Button';
import Input from '../Input';

import './createTask.css';

class CreateTask extends Component {

    static displayName = 'CreateTask';

    state = {
        task: {
            imie: '',
            nazwisko: '',
            email: '',
            temat: '',
            opis: '',
            data: '',
            kategoria: '',
            priorytet: '',
            uwagi: ''
        },
        inputErrors: {
            imie: '',
            nazwisko: '',
            email: '',
            temat: '',
            opis: '',
            data: '',
            kategoria: '',
            priorytet: '',
            uwagi: ''
        },
        isFormValid: false
    }

    goToHomePage = () => this.props.history.push('/');

    handleChange = ({ target: { name, value } }) => this.setState({ task: { ...this.state.task, [name]: value } }, () => this.validateField(name, value));

    submitForm = async e => {
        e.preventDefault();
        const { isFormValid } = this.state;
        if (!isFormValid || this.makingReq) return;
        this.makingReq = true;
        const { addNewTaskAPI } = this.props;
        const newTask = { ...this.state.task, start: '', stop: '' };
        await addNewTaskAPI(newTask);
        this.goToHomePage();
        this.makingReq = false;
    }

    validateField = (name, value) => {
        const inputErrors = { ...this.state.inputErrors };
      
        switch (name) {
            case 'imie':
            case 'nazwisko':
            case 'temat':
            case 'kategoria':
                inputErrors[name] = value.length < 3 ? errorsText[name] : '';
            break;

            case 'email':
              if (value.length === 0) {
                    inputErrors.email = 'Wpisz prawidlowa wartosc';
              } else {
                    inputErrors.email = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})/i).test(value) ? '' : errorsText[name];
              }
            break;

            case 'priorytet':
                inputErrors.priorytet = priorytet.indexOf(value) > -1 ? '' : errorsText[name];
            break;

            case 'data':
            case 'opis':
            case 'uwagi':
                inputErrors.data = value.length < 10 ? errorsText[name] : '';
            break;

          default:
            break;
        }
        this.setState({ inputErrors }, () => this.validateForm());
    }
      
    validateForm = () => {
        const { inputErrors } = this.state;
        const errors = Object.values(inputErrors).filter(err => err.length > 0);
        const hasErrors = errors.length > 0;
        this.setState({ isFormValid: !hasErrors });
    }

    renderInputs = () => {
        const { inputErrors } = this.state;
        return Object.keys(ITASK).slice(0, -2).map(name => {
            return (
                <Input 
                    key={name} 
                    errorMsg={inputErrors[name]}
                    name={name} 
                    value={this.state[name]} 
                    onBlur={this.handleTouched} 
                    onChange={this.handleChange}
                    type={ name === 'data' ? 'date' : 'text' }
                />
            );
        });
    }
 
    render() {
        const { isFormValid } = this.state;
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    {this.renderInputs()}
                    <div className='btn-wrapper'>
                        <Button type='submit' text='Utworz zadanie' disabled={!isFormValid}/>
                    </div>
                </form>
                <div className='btn-wrapper'>
                    <Button onClick={this.goToHomePage} text='Powrot' />
                </div>
            </div>
        );
    }
}

export default connect(null, { addNewTaskAPI })(CreateTask);
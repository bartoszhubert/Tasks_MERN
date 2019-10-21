import React, { Component } from 'react';
import { ITASK, priorytet } from '../../utility/constant';

import Input from '../Input';

import './createTask.css';

class CreateTask extends Component {

    static displayName = 'CreateTask';

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
        inputTouched: {
            imie: false,
            nazwisko: false,
            email: false,
            temat: false,
            opis: false,
            data: false,
            kategoria: false,
            priorytet: false,
            uwagi: false
        },
        formValid: false
    }

    goToHomePage = () => this.props.history.push('/');

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value }, () => this.validateField(name, value));

    handleTouched = ({ target: { name } }) => this.setState({ inputTouched: { ...this.state.inputTouched, [name]: true } });

    submitForm = e => {
        e.preventDefault();

    }

    validateField = (name, value) => {
        const inputErrors = { ...this.state.inputErrors };
      
        switch (name) {
            case 'imie':
            case 'nazwisko':
            case 'temat':
            case 'kategoria':
                inputErrors[name] = value.length < 3 ? 'Wpisz prawidlowa wartosc' : '';
            break;

            case 'email':
              if (value.length === 0) {
                    inputErrors.email = 'Wpisz prawidlowa wartosc';
              } else {
                    inputErrors.email = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})/i).test(value) ? '' : 'Nieprawidlowa wartosc email';
              }
            break;

            case 'priorytet':
                inputErrors.priorytet = priorytet.indexOf(value) > -1 ? '' : 'Jedno z: ERROR, INFO, WARNING';
            break;

            case 'data':
                inputErrors.data = value.length < 10 ? 'Podaj prawidlowa date' : '';
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
        this.setState({ formValid: !hasErrors });
    }

    renderInputs = () => {
        return Object.keys(ITASK).slice(0, -2).map(name => {
            return (
                <Input key={name} name={name} title={name} value={this.state[name]} onBlur={this.handleTouched} onChange={this.handleChange}/>
            );
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    {this.renderInputs()}
                    <button type='submit'>Utworz zadanie</button>
                </form>
                <button onClick={this.goToHomePage}>Powrot</button>
            </div>
        );
    }
}

export default CreateTask;
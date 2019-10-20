import PropTypes from 'prop-types';

export const addUserInputs = [
    {
        name: 'name',
        title: 'Name',
        type: 'text'
    },
    {
        name: 'email',
        title: 'Email',
        type: 'text'
    },
    {
        name: 'username',
        title: 'Username',
        type: 'text'
    }
];

export const editUserInputs = [
    {
        name: 'name',
        title: 'Name',
        type: 'text'
    },
    {
        name: 'username',
        title: 'Username',
        type: 'text'
    },
    {
        name: 'email',
        title: 'Email',
        type: 'text'
    },
    {
        name: 'city',
        title: 'City',
        type: 'text'
    }
];

export const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const errors = {
    email: 'Email is required',
    name: 'Name is required',
    username: 'Username is required'
};

export const tableHeader = ['id', 'name', 'username', 'email', 'city', 'edit', 'delete'];

export const validBtnText = ['Add new', 'Cancel', 'Delete', 'Edit', 'Submit'];

export const validBtnVariant = ['add', 'cancel', 'cancelM', 'delete', 'edit', 'submit'];

export const ITASK = {
    imie: PropTypes.string,
    nazwisko: PropTypes.string,
    email: PropTypes.string,
    temat: PropTypes.string,
    opis: PropTypes.string,
    data: PropTypes.string,
    kategoria: PropTypes.string,
    priorytet: PropTypes.oneOf(['ERROR', 'INFO', 'WARNING']),
    uwagi: PropTypes.string,
    start: PropTypes.bool,
    stop: PropTypes.bool
}
import PropTypes from 'prop-types';

// export const addUserInputs = [
//     {
//         name: 'name',
//         title: 'Name',
//         type: 'text'
//     },
//     {
//         name: 'email',
//         title: 'Email',
//         type: 'text'
//     },
//     {
//         name: 'username',
//         title: 'Username',
//         type: 'text'
//     }
// ];


export const baseUrl = "http://localhost:5000";

// export const errors = {
//     email: 'Email is required',
//     name: 'Name is required',
//     username: 'Username is required'
// };

export const editTaskInputs = ['imie', 'nazwisko', 'email', 'temat', 'opis', 'data', 'kategoria', 'priorytet', 'uwagi'];

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
    start: PropTypes.string,
    stop: PropTypes.string
}
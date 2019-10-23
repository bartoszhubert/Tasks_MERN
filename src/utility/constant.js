import PropTypes from 'prop-types';

export const baseUrl = "http://localhost:5000";

export const errorsText = {
    imie: 'Wpisz prawidlowa wartosc',
    nazwisko: 'Wpisz prawidlowa wartosc',
    email: 'Nieprawidlowa wartosc email',
    temat: 'Wpisz prawidlowa wartosc',
    opis: 'Wpisz prawidlowa wartosc',
    data: 'Wybierz date zdarzenia',
    kategoria: 'Wpisz prawidlowa wartosc',
    priorytet: 'Jedno z: ERROR, INFO, WARNING',
    uwagi: 'Wpisz prawidlowa wartosc'
};

export const editTaskInputs = ['imie', 'nazwisko', 'email', 'temat', 'opis', 'data', 'kategoria', 'priorytet', 'uwagi'];

export const priorytet = ['ERROR', 'INFO', 'WARNING'];

export const ITASK = {
    imie: PropTypes.string,
    nazwisko: PropTypes.string,
    email: PropTypes.string,
    temat: PropTypes.string,
    opis: PropTypes.string,
    data: PropTypes.string,
    kategoria: PropTypes.string,
    priorytet: PropTypes.oneOf(priorytet),
    uwagi: PropTypes.string,
    start: PropTypes.string,
    stop: PropTypes.string
}
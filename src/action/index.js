// import axios from 'axios';
// import store from "../store";
// import { baseUrl } from '../utility/constant';

// SET SEARCHED PHRASE and FETCH TASKS
export const FETCH_TASKS = 'FETCH_TASKS';
const fetchTasks = data => {
    return {
        type: FETCH_TASKS,
        data
    };
};
export const fetchTasksAPI = searchedText => dispatch => {
    // return axios.get(`${baseUrl}`).then(data => {
        const api = [
            {
                imie: 'Bartosz',
                nazwisko: 'Grab',
                email: 'bart21@gmail.com',
                temat: 'naprawa',
                opis: 'Ot is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                data: '20.10.2019',
                kategoria: 'czesci',
                priorytet: 'WARNING',
                uwagi: '',
                start: false,
                stop: false
            },
            {
                imie: 'Hubert',
                nazwisko: 'Grab',
                email: 'hubcio@gmail.com',
                temat: 'wymiana',
                opis: 'Ot is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                data: '20.01.2020',
                kategoria: 'czesci',
                priorytet: 'INFO',
                uwagi: '',
                start: false,
                stop: false
            },
            {
                imie: 'Janek',
                nazwisko: 'Grab',
                email: 'janekjanek@gmail.com',
                temat: 'wymiana',
                opis: 'Ot is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                data: '20.05.2020',
                kategoria: 'calosc',
                priorytet: 'ERROR',
                uwagi: '',
                start: false,
                stop: false
            }
        ]
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(api);
              }, 1000);
        }).then(t => {
            const filteredTasks = t.filter(task => task.temat.match(searchedText));
            const tasks = filteredTasks.sort((a, b) => new Date(b.date) - new Date(a.date));
            const data = { searchedText, tasks };
            dispatch(fetchTasks(data));
    });
};
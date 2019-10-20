import axios from 'axios';
import store from "../store";
import { baseUrl } from '../utility/constant';

// addUser
export const ADD_USER = "ADD_USER";
export const addUserAPI = data => dispatch => {
    return axios.post(baseUrl, data).then(({ status }) => {
        if (status === 201) {
            dispatch(addUser(data));
        };
    });
};
const addUser = data => {
    return {
        type: ADD_USER,
        data
    };
};

// deleteUser
export const DELETE_USER = "DELETE_USER";
export const deleteUserAPI = id => dispatch => {
    return axios.delete(`${baseUrl}/${id}`).then(({ status }) => {
        if (status === 200) {
            dispatch(deleteUser(id));
        };
    });
};
const deleteUser = id => {
    return {
        type: DELETE_USER,
        data: id
    };
};

// editUser
export const EDIT_USER = 'EDIT_USER';
export const editUserAPI = user => dispatch => {
    const { id } = user;
    return axios.put(`${baseUrl}/${id}`, user).then(({ data, status }) => {
        if (status === 200) {
            dispatch(editUser(data));
        };
    });
};
const editUser = data => {
    const users = store.getState().dashboard.users;
    const index = users.findIndex(user => user.id === data.id);
    return {
        type: EDIT_USER,
        data,
        index
    };
};

// fetchUsers
export const FETCH_USERS = "FETCH_USERS";
const setUsers = data => {
    return {
        type: FETCH_USERS,
        data
    };
};
export const fetchUsersAPI = () => dispatch => {
    return axios.get(baseUrl).then(({ data, status }) => {
        if (status === 200) {
            dispatch(setUsers(data));
        };
    });
};

// setSelectedUser
export const SET_SELECTED_USER = "SET_SELECTED_USER";
export const setSelectedUser = data => {
    return {
        type: SET_SELECTED_USER,
        data
    };
};




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
            const tasks = t.filter(task => task.temat.match(searchedText));
            const data = { searchedText, tasks };
            dispatch(fetchTasks(data));
    });
};
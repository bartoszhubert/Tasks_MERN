import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_TASKS, FETCH_USERS, SET_SELECTED_USER } from '../action';

const initialState = {
  searchedPhrase: '',
  selectedUser: null,
  users: [],
  tasks: []
};
  
export default (state = initialState, action) => {
  const { data, index, type } = action;
  switch (type) {

    case ADD_USER: 
      return {
        ...state,
        users: [...state.users, data]
      }

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== data)
      }

    case EDIT_USER:
        const copyUsers = [...state.users];
        copyUsers.splice(index, 1, data);
      return {
        ...state,
        users: copyUsers
      }

    case FETCH_USERS:
      return {
        ...state,
        users: data
      };

    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: data
      };

    case FETCH_TASKS:
      return {
        ...state,
        searchedPhrase: data.searchedText,
        tasks: data.tasks
      };


    default:
      return state;
  };
};
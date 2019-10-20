import { FETCH_TASKS } from '../action';

const initialState = {
  searchedPhrase: '',
  tasks: []
};
  
export default (state = initialState, action) => {
  const { data, type } = action;
  switch (type) {

    // case EDIT_USER:
    //     const copyUsers = [...state.users];
    //     copyUsers.splice(index, 1, data);
    //   return {
    //     ...state,
    //     users: copyUsers
    //   }

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
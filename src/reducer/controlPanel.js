import { FETCH_TASKS, SET_SELECTED_TASK, SET_TASK_DATE, UPDATE_SELECTED_TASK } from '../action';

const initialState = {
  searchedPhrase: '',
  selectedTask: null,
  tasks: []
};
  
export default (state = initialState, action) => {
  const { data, type } = action;
  switch (type) {

    case FETCH_TASKS:
      return {
        ...state,
        searchedPhrase: data.searchedText,
        tasks: data.tasks
      };
    
    case SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: data
      };
    
    case SET_TASK_DATE:
      return {
        ...state,
        tasks: data
      }

    case UPDATE_SELECTED_TASK:
      return {
        ...state,
        tasks: data
      }

    default:
      return state;
      
  };
};
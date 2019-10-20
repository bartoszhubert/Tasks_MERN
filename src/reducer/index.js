import { combineReducers } from "redux";

import ControlPanelReducer from './controlPanel';

const rootReducer = combineReducers({
  controlPanel: ControlPanelReducer
});

export default rootReducer;
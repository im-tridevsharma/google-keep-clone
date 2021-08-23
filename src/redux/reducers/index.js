import { combineReducers } from "redux";
import noteReducer from "../reducers/noteReducer";

const reducers = combineReducers({
  allNotes: noteReducer,
});

export default reducers;

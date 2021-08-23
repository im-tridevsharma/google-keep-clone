import { NoteAction } from "../constants/action-types";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NoteAction.ADD_NEW_NOTE:
      return { ...state, notes: [...state.notes, payload] };
    case NoteAction.FETCH_NOTES:
      return { ...state, notes: payload };
    case NoteAction.REMOVE_NOTE:
      let notes = state.notes.filter((note) => note.id !== payload);
      return { ...state, notes };
    default:
      return state;
  }
};

export default noteReducer;

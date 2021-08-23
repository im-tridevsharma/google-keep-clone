import { NoteAction } from "../constants/action-types";
import NoteService from "../../services/NoteService";

export const addNewNote = (note) => {
  const response = NoteService.saveNote(note);
  return {
    type: NoteAction.ADD_NEW_NOTE,
    payload: response,
  };
};

export const fetchNotes = () => {
  const response = NoteService.getNotes();
  return {
    type: NoteAction.FETCH_NOTES,
    payload: response,
  };
};

export const removeNote = (id) => {
  const response = NoteService.removeNote(id);
  return {
    type: NoteAction.REMOVE_NOTE,
    payload: response,
  };
};

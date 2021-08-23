import { reactLocalStorage as LDB } from "reactjs-localstorage";

const NoteService = {
  saveNote: (note) => {
    if (note) {
      let notes = LDB.get("notes");
      if (notes) {
        notes = JSON.parse(notes);
        notes.push(note);
        LDB.set("notes", JSON.stringify(notes));
        return note;
      } else {
        let notes = [];
        notes.push(note);
        LDB.set("notes", JSON.stringify(notes));
        return note;
      }
    } else {
      return {};
    }
  },
  getNotes: () => {
    const notes = LDB.get("notes");
    return notes ? JSON.parse(notes) : [];
  },
};

export default NoteService;

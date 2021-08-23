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
  removeNote: (id) => {
    let notes = LDB.get("notes");
    if (notes) {
      notes = JSON.parse(notes);
      notes = notes.filter((note) => note.id !== id);
      LDB.set("notes", JSON.stringify(notes));
      return id;
    }
  },
};

export default NoteService;

import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewNote,
  fetchNotes,
  removeNote,
} from "../redux/actions/noteActions";
import { v4 as uuidv4 } from "uuid";

import styles from "../assets/css/notes.module.css";

export default function Notes() {
  const [isFocused, setIsFocused] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const notes = useSelector((state) => state.allNotes.notes);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      let newNote = {
        id: uuidv4(),
        title,
        text,
      };
      dispatch(addNewNote(newNote));
      setTitle("");
      setText("");
    }
  };

  const handleRemove = (id) => {
    if (id && id !== "") {
      dispatch(removeNote(id));
    }
  };

  function useOutsideDismiss(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsFocused(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideDismiss(wrapperRef);

  function adjustHeight(e, minHeight) {
    setText(e.target.value);
    const el = e.target;
    var outerHeight = parseInt(window.getComputedStyle(el).height, 10);
    var diff = outerHeight - el.clientHeight;
    el.style.height = 0;
    el.style.height = Math.max(minHeight, el.scrollHeight + diff) + "px";
  }

  useEffect(() => {
    dispatch(fetchNotes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.notes}>
      <form
        className={styles.notes__add_form}
        ref={wrapperRef}
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <div className={isFocused ? styles.form__group : styles.hide}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.form__group}>
          <textarea
            type="text"
            name="note_text"
            placeholder="Take a note..."
            className={isFocused ? styles.focused : styles.collapse}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => adjustHeight(e, 15)}
            style={{ height: !isFocused && "15px" }}
            value={text}
            id="text"
          ></textarea>
        </div>
        {isFocused && <button type="submit">Save</button>}
      </form>
      {/* list notes */}

      <div className={styles.notes_list}>
        {Object.keys(notes).length > 0 ? (
          notes
            .slice(0)
            .reverse()
            .map((note) => {
              return (
                <div className={styles.note_item} key={note.id}>
                  <span className={styles.top_info}></span>
                  <div className={styles.note_card}>
                    <h3>{note.title}</h3>
                    <p>{note.text}</p>
                    <div className={styles.note_action}>
                      <div className={styles.note_action_options}>
                        <i className="fas fa-bell" title="Remind me"></i>
                        <i
                          className="fas fa-trash-alt"
                          title="Remove Note"
                          onClick={() => handleRemove(note.id)}
                        ></i>
                        <i className="fas fa-archive" title="Archive Note"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          <p style={{ color: "gray" }}>Your notes will appear here!</p>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import NoteForm from "./NoteForm";
import firebase from "../firebase";
import { AuthContext } from "../Auth.js";
import Ul from "./Ul";
import NotesWrapper from "../containers/NotesWrapper";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const logDate = () => {
    return Date.now();
  };
  useEffect(() => {
    const db = firebase.firestore();

    return db.collection("notes").orderBy("date").onSnapshot((snapshot) => {
      const notesData = [];
      snapshot.forEach((doc) => notesData.push({ ...doc.data(), id: doc.id }));
      setNotes(notesData);
    });
  }, []);

  const addNote = (note) => {
    const id = uuidv4();
    setNotes([...notes, { note, id, currentUser }]);
    const db = firebase.firestore();
    db.collection("notes").add({ note, id, currentUser: currentUser.uid, date: logDate() });
  };

  const removeNote = (e) => {
    setNotes(notes.filter((note) => note.id !== e.target.id));
    const db = firebase.firestore();
    db.collection("notes").doc(e.target.id).delete();
  };

  const editNote = (e, content) => {
    setNotes(
      notes.map((note) => {
        if (note.id !== e.target.id) return note;
        return { ...note, note: content };
      })
    );
  };
  
  let currentUserNotes = [];

  const setCurrentUserNotes = () => {
    currentUserNotes = notes.filter(
      (note) => note.currentUser === currentUser.uid
    );
  };

  setCurrentUserNotes();

  return (
    <NotesWrapper>
      <NoteForm addNote={addNote} />
      <Ul>
        {currentUserNotes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            note={note.note}
            addNote={addNote}
            removeNote={removeNote}
            editNote={editNote}
          />
        ))}
      </Ul>
    </NotesWrapper>
  );
};

export default Notes;

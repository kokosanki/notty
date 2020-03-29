import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import NoteForm from "./NoteForm";
import styled from "styled-components";
import firebase from "../firebase";
import { AuthContext } from "../Auth.js";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const db = firebase.firestore();
    return db.collection("notes").onSnapshot(snapshot => {
      const notesData = [];
      snapshot.forEach(doc => notesData.push({ ...doc.data(), id: doc.id }));
      setNotes(notesData);
    });
  }, []);

  const addNote = note => {
    const id = uuidv4();
    setNotes([...notes, { note, id, currentUser }]);
    const db = firebase.firestore();
    db.collection("notes").add({ note, id, currentUser: currentUser.uid });
  };

  const removeNote = e => {
    setNotes(notes.filter(note => note.id !== e.target.id));
    const db = firebase.firestore();
    db.collection("notes")
      .doc(e.target.id)
      .delete();
  };

  const editNote = (e, content) => {
    setNotes(
      notes.map(note => {
        if (note.id !== e.target.id) return note;
        return { ...note, note: content };
      })
    );
  };
  let currentUserNotes = [];

  const setCurrentUserNotes = () => {
    currentUserNotes = notes.filter(
      note => note.currentUser === currentUser.uid
    );
  };

  setCurrentUserNotes();

  return (
    <div>
      <NoteForm addNote={addNote} />
      <Ul>
        {currentUserNotes.map(note => (
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
    </div>
  );
};

export default Notes;

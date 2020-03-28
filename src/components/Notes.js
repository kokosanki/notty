import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import NoteForm from "./NoteForm";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes([...notes, { note, id: uuidv4() }]);
  };

  const removeNote = e => {
    setNotes(notes.filter(note => note.id !== e.target.id));
  };

  const editNote = (e, content) => {
    setNotes(
      notes.map(note => {
        if (note.id !== e.target.id) return note;
        return { ...note, note: content };
      })
    );
  };

  return (
    <div>
      <NoteForm addNote={addNote} />
      <Ul>
        {notes.map(note => (
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

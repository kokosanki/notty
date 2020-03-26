import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import NoteForm from "./NoteForm";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes([...notes, { note, id: uuidv4() }]);
  };
  return (
    <div>
      <ul>
        {notes.map(note => (
          <Note key={note.id} note={note.note} />
        ))}
      </ul>
      <NoteForm addNote={addNote} />
    </div>
  );
};

export default Notes;

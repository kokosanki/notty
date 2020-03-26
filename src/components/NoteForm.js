import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [noteContent, setNote] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addNote(noteContent);
    setNote("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add a note:</label>
      <input
        type="text"
        value={noteContent}
        required
        onChange={e => setNote(e.target.value)}
      />

      <input type="submit" value="add note" />
    </form>
  );
};

export default NoteForm;

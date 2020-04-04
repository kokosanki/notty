import React, { useState } from "react";
import Textarea from "./formfields/Textarea";
import Form from "./Form";
import Button from "./buttons/Button";

const NoteForm = ({ addNote }) => {
  const [noteContent, setNote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(noteContent);
    setNote("");
  };
  return (
    <Form handleSubmit={handleSubmit}>

      <Textarea
        value={noteContent}
        required
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here"
      />

      <Button type="submit">add note</Button>
    </Form>
  );
};

export default NoteForm;

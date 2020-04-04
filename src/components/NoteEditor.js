import React, { useState } from "react";
import firebase from "../firebase";
import Textarea from "./formfields/Textarea";
import Button from "./buttons/Button";
import Form from "./Form";

const NoteEditor = ({ note, editNote, id, changeActive }) => {
  const [noteContent, setNote] = useState(note);
  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(e, noteContent);
    changeActive(false);
    const db = firebase.firestore();
    db.collection("notes").doc(id).update({ note: noteContent });
  };
  return (
    <Form handleSubmit={handleSubmit}>
      <Textarea
        value={noteContent}
        required
        onChange={(e) => setNote(e.target.value)}
      />
      <Button>save</Button>
    </Form>
  );
};

export default NoteEditor;

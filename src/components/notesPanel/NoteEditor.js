import React, { useState } from "react";
import firebase from "../../firebase";
import Textarea from "../formfields/Textarea";
import Button from "../buttons/Button";
import Form from "../Form";

const NoteEditor = ({ note, editNote, id, changeActive }) => {
  const [content, setContent] = useState(note);

  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(e, content);
    changeActive(false);
    const db = firebase.firestore();
    db.collection("notes").doc(id).update({ note: content });
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <Textarea
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
      />
      <Button>save</Button>
    </Form>
  );
};

export default NoteEditor;

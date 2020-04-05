import React, { useState } from "react";
import Textarea from "../formfields/Textarea";
import Form from "../Form";
import Button from "../buttons/Button";

const NoteForm = ({ addNote }) => {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(content);
    setContent("");
  };
  return (
    <Form handleSubmit={handleSubmit}>
      <Textarea
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here"
      />

      <Button type="submit">add note</Button>
    </Form>
  );
};

export default NoteForm;

import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Textarea = styled.textarea`
  width: 70vw;
  height: 200px;
  text-align: center;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.input`
  background-color: #00c48f;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
`;

const NoteForm = ({ addNote }) => {
  const [noteContent, setNote] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addNote(noteContent);
    setNote("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        value={noteContent}
        required
        onChange={e => setNote(e.target.value)}
        placeholder="Write your note here"
      />

      <Button type="submit" value="add note" />
    </Form>
  );
};

export default NoteForm;

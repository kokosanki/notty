import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../firebase";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
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
  &:active {
    background-color: #3eedad;
  }
  &:focus {
    outline: none;
  }
`;

const EditNote = ({ note, editNote, id, changeActive }) => {
  const [noteContent, setNote] = useState(note);
  const handleClick = e => {
    e.preventDefault();
    editNote(e, noteContent);
    changeActive(false);
    const db = firebase.firestore();
    db.collection("notes")
      .doc(id)
      .update({ note: noteContent });
  };
  return (
    <Form>
      <Textarea
        value={noteContent}
        required
        onChange={e => setNote(e.target.value)}
      />

      <Button onClick={handleClick} id={id} type="submit" value="save" />
    </Form>
  );
};

export default EditNote;

import React, { useState } from "react";
import styled from "styled-components";
import EditNote from "./EditNote";

const Container = styled.div`
  width: 70vw;
`;

const Panel = styled.div`
  padding: 10px;
  font-size: 15px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: flex-end;
`;

const Li = styled.li`
  padding: 10px;
  list-style: none;
  font-size: 15px;
  border: 1px solid #696969;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  background: #00c48f;
  border: none;
  padding: 5px 8px;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #3eedad;
  }
`;

const Note = ({ note, removeNote, id, editNote }) => {
  const [isActive, changeActive] = useState(false);

  const handleClickDelete = e => {
    removeNote(e);
  };

  const handleClickChange = () => {
    changeActive(true);
  };

  return (
    <Container>
      <Panel>
        <Button onClick={handleClickChange}>Edit</Button>
        <Button id={id} onClick={e => handleClickDelete(e)}>
          Delete
        </Button>
      </Panel>
      <div>
        <Li>
          {isActive ? (
            <EditNote
              note={note}
              editNote={editNote}
              id={id}
              changeActive={changeActive}
            />
          ) : (
            note
          )}
        </Li>
      </div>
    </Container>
  );
};

export default Note;

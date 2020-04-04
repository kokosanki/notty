import React, { useState } from "react";
import styled from "styled-components";
import NoteEditor from "./NoteEditor";
import SecondaryButton from './buttons/SecondaryButton';
import Li from './Li';
import EditPanel from '../containers/EditPanel';

const Container = styled.div`
  width: 100%;
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
      <EditPanel>
        <SecondaryButton onClick={handleClickChange}>Edit</SecondaryButton>
        <SecondaryButton id={id} onClick={(e) => handleClickDelete(e)}>
          Delete
        </SecondaryButton>
      </EditPanel>
      <div>
        <Li>
          {isActive ? (
            <NoteEditor
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

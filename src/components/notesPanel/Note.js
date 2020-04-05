import React, { useState } from "react";
import styled from "styled-components";
import NoteEditor from "./NoteEditor";
import SecondaryButton from "../buttons/SecondaryButton";
import Li from "../Li";
import EditPanel from "../../containers/EditPanel";

const Container = styled.div`
  width: 100%;
`;

const Note = ({ note, removeNote, id, editNote }) => {
  const [isActive, setActive] = useState(false);

  return (
    <Container>
      <EditPanel>
        <SecondaryButton onClick={() => setActive(true)}>Edit</SecondaryButton>
        <SecondaryButton id={id} onClick={(e) => removeNote(e)}>
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
              changeActive={setActive}
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

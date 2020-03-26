import React from "react";
import styled from "styled-components";

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

const Note = ({ key, note }) => {
  return (
    <Container>
      <Panel>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Panel>
      <div>
        <Li key={key}>{note}</Li>
      </div>
    </Container>
  );
};

export default Note;

import React from "react";

const Note = ({ key, note }) => {
  return <li key={key}>{note}</li>;
};

export default Note;

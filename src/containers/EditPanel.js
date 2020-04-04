import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  padding: 10px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.basic};
  background-image: ${({ theme: { backgroundImages } }) =>
    backgroundImages.main};
  color: #fff;
  display: flex;
  justify-content: flex-end;
`;

const EditPanel = ({ children }) => {
  return <Panel>{children}</Panel>;
};

export default EditPanel;

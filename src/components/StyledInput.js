import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid ${({ theme: { colors } }) => colors.main};
  border-radius: 5px;
  padding: 5px 10px;;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`;

const StyledInput = ({name, type, placeholder}) => {
    return ( 
        <Input
        name={name}
        type={type}
        placeholder={placeholder}></Input>
     );
}
 


export default StyledInput;
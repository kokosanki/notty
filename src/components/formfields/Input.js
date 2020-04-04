import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid ${({ theme: { colors } }) => colors.main};
  border-radius: 5px;
  padding: 5px 10px;;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`;

const 
Input = ({name, type, placeholder}) => {
    return ( 
        <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}></StyledInput>
     );
}
 


export default 
Input;
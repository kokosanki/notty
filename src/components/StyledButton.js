import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.main};
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  width: 100px;
  padding: 5px 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const StyledButton = ({children}) => {
    return ( 
        <Button type="submit">{children}</Button>
     );
}
 
export default StyledButton;
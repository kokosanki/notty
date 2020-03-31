import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ theme: { colors } }) => colors.main};
  text-align: center;
  width: 100%;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

const StyledH1 = ({children}) => {
    return ( 
        <H1>{children}</H1>
     );
}
 
export default StyledH1;
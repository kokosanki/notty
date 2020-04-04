import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  margin-top: 0;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: normal;
`;

const H3 = ({children}) => {
    return ( 
        <StyledH3>{children}</StyledH3>
     );
}
 
export default H3;
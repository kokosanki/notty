import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`;

const StyledH2 = ({children}) => {
    return ( 
        <H2>{children}</H2>
     );
}
 
export default StyledH2;
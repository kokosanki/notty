import React from 'react';
import styled from 'styled-components';


const Link = styled.div`
  border: 2px solid #fff;
  border-radius: 15px;
  padding: 5px 10px;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
  }
  &:hover {
    background-color: #fff;
    a {
      color: ${({ theme: { colors } }) => colors.main};
      font-weight: bold;
    }
    @media (max-width: 500px) {
      margin-bottom: 10px;
    }
  }
`;

const StyledLink = ({children}) => {
    return ( 
        <Link>{children}</Link>
     );
}
 
export default StyledLink;
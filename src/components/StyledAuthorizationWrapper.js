import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  background-image: ${({ theme: { backgroundImages } }) => backgroundImages.basic};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
`;

const Authorization = styled.div`
  min-height: 50vh;
  background-color: #fcfcfc;
  border-radius: 10px;
  width: 80vw;
  display: flex;
  justify-content: space-around;
  font-family: 'Baloo Thambi 2', cursive;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

const StyledAuthorizationWrapper = ({children}) => {
    return ( 
        <Wrapper>
            <Authorization>{children}</Authorization>
        </Wrapper>
     );
}
 
export default StyledAuthorizationWrapper;
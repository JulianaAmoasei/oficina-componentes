import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export default function MenuPage({children}) {
  return (
    <Main>
      {children}
    </Main> 
 )
}
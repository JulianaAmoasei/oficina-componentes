import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: gray;
  display: flex;
  justify-content: center;
  width: 50vw;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function MenuArea({children}) {
  return (
    <Section>
      {children}
    </Section> 
 )
}
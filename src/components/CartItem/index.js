import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  border: 1px solid black;
  background-color: green;
  width: 80%;
  padding: 10px;
`;

export default function CartItem(props) {
    return (
      <Article key={props.id}>
        <p>{props.nome}</p>
        <p>{props.preco}</p>
      </Article> 
   )
}

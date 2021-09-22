import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  width: 20%;
  margin: 10px;
`;

export default function ItemCard({id, onClick, img, nome, descricao, preco}) {
  return (
    <Article key={id} onClick={onClick}>
      <img src={img} alt='descrição'></img>
      <p>{nome}</p>
      <p>{descricao}</p>
      <p>{preco}</p>
    </Article>
 )
}

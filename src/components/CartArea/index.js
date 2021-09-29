import React from 'react';
import styled from 'styled-components';
import CartItem from '../CartItem';

const Section = styled.section`
  background-color: red;
  width: 50vw;
  padding: 10px;
`;

export default function CartArea({ arrItem, removeButton }) {
  return (
    <Section>
      {arrItem.map((item) => {
        return (
          <CartItem
            key={item.id}  
            nome={item.nome}
            preco={item.preco}
            remove={removeButton}
          />)
      })}
    </Section> 
  )
}

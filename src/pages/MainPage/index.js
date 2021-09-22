import React, {useState} from 'react';
import MenuArea from '../../components/MenuArea';
import MenuPage from '../../components/MenuPage';
import ItemCard from '../../components/ItemCard';
import CartArea from '../../components/CartArea';
import cardapio from '../../data/cardapio';

export default function MainPage() {

  const [addItem, setAddItem] = useState([])

  return (
  <>
    <h1>título da página</h1>
    <MenuPage>
      <MenuArea {...cardapio}>
        {cardapio.map((item) => {
          return (
            <ItemCard
              img={item.img}
              key={item.id}
              nome={item.nome}
              descricao={item.descricao}
              preco={item.preco}
              onClick={() => {
                setAddItem([...addItem, {nome: item.nome, preco: item.preco}])
              }}
            />)
        })}
      </MenuArea>
      <CartArea arrItem={addItem}>
      </CartArea>
    </MenuPage>
  </>
  )};

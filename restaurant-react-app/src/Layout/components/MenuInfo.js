import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import { Container} from "react-bootstrap";
import items from './MenuItems';
import '../css/MenuInfo.css';

const allCategories = ['всички', ...new Set(items.map(item => item.category))];

export default function MenuInfo() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    console.log('click', category);
    if(category ==='всички'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Container className='menu-container'>
      <section className="menu section">
        <div className="title">
          <h2 className='menu-main-title'>Нашето Меню</h2>
          <div className="underline" />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </Container>
  );
}


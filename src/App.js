import React, { useState } from 'react';
import Menu from './component/Menu';
import Categories from './component/Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category))];

function App() {
  
  const [menuItem, setMenuItem] = useState(items);
  const [categories,] = useState(allCategories);

  const filterMenu = (category)=>{
    if (category === 'all'){
      setMenuItem(items);
      return;
    }
     const newMenu = items.filter((item)=> item.category === category);
     setMenuItem(newMenu);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;

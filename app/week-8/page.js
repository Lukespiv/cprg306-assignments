"use client"

import { useState } from 'react';
import NewItem from './new-item';
import { ItemList } from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const handleItemSelect = (item) => 
  {
    const cleanItemName = item.name.split(",")[0].trim();
    setSelectedItemName(cleanItemName);
  };

  return (
    <main className="p-6 flex">
      <div>
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect}/>
      </div>

      <div className='flex-1 p-6'>
        <MealIdeas ingredient={selectedItemName}/>
      </div>
    </main>
  );
}
export default Page;
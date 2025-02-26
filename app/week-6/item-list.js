'use client';
import Item from "./item";
import {useState} from "react";
import items from "./items.json";

export function ItemList()
{
  const [sortBy,setSortBy] = useState("name");
  const sortedItems = [...items].sort ((a,b) => 
    {
    if (sortBy === "name")
  {
    return a.name.localeCompare(b.name);
  }
  else
  {
    return a.category.localeCompare(b.category);
  }
});

return(
  <div>
    <button onClick={() => setSortBy("name")} 
      className={`px-4 py-2 rounded-lg transition-all m-2 ${sortBy == "name" ? "bg-blue-500 text-black shadow-md": "bg-red-500 text-black"}`}> Name</button>

    <button onClick={() => setSortBy("category")}
      className={`px-4 py-2 rounded-lg transition-all m-2 ${sortBy == "category" ? "bg-blue-500 text-black shadow-md": "bg-red-500 text-black"}`}> Category</button>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
  </div>
)
}

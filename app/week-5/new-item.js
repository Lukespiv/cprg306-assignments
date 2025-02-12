"use client";

import { useState } from "react";

export default function NewItem()
{
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    
    const increment = () => 
    {
        setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () =>
    {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();

        const item =
        {
            name,
            quantity,
            category
        };

        console.log("New item", item);
        alert (`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <form onSubmit={handleSubmit} 
        className="flex flex-col items-center p-6 bg-white rounded-xl p-6 w-64 space-y-4 border-grey-200">

                <h2 className="text-2x1 font-semibold text-grey-800 text-center">New Item</h2>

{/* Name*/}
                <input type="text" 
                placeholder="Enter item name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-black-300 rounded-lg w-full text-black "/>

{/* Quantity */}
<h2 className="text-lg font-semibold mb-4 text-black">Quantity </h2>
            <div className="flex items-center space-x-2">
                <button type="button" 
                onClick={decrement} 
                disabled={quantity ===1} 
                className="bg-red-500 text-black disabled:opacity-50 rounded-lg px-4">-</button>
                
                <button type="button" 
                onClick={increment} 
                disabled={quantity === 20} 
                className="bg-blue-500 text-black disabled:opacity-50 rounded-lg px-4">+</button>
                
                <span className="text-xl font-bold">{quantity}</span>
            </div>

{/* Category */}
                <select value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 text-black border border-gray-300 rounded-lg w-full bg-white focus:ring-2 focus:ring-blue-400 outline-none">
                
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
                </select>

{/* Submit Button */}
                <button type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all">
                    Add Item
                </button>
            </form>
    )
}
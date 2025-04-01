"use client";

import { useState } from "react";

export default function NewItem({onAddItem})
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

        if (name.trim() === "") {
            alert("Please enter an item name.");
            return;
        }

        const item =
        {
            name,
            quantity,
            category
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <form onSubmit={handleSubmit} 
        className="flex flex-col items-center p-6 rounded-xl p-6 space-y-6">

{/* Name*/}
                <input type="text" 
                placeholder="item name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-lg w-full text-black "/>

            <div className="flex space-x-4 w-full">
{/* Quantity */}
            <div className="flex items-center space-x-4 bg-white rounded-lg w-1/2 text-black border border-gray-300 py-2 px-2">
                <button type="button" 
                onClick={decrement} 
                disabled={quantity ===1} 
                className="bg-red-500 text-black disabled:bg-grey-500 rounded-lg px-4">-</button>
                
                <button type="button" 
                onClick={increment} 
                disabled={quantity === 20} 
                className="bg-blue-500 text-black disabled:bg-grey-500 rounded-lg px-4">+</button>
                
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

            </div>
{/* Submit Button */}
                <button type="submit"
                className="bg-green-500 text-white w-1/2 py-2 px-4 rounded-lg hover:bg-green-600 transition-all">
                    +
                </button>
            </form>
    )
}
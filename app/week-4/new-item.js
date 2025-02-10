"use client";

import { useState } from "react";

export default function NewItem()
{
    const [quantity, setQuantity] = useState(1);
    
    const incerment = () => 
    {
        setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
    }

    const decrement = () =>
    {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
    }

    return(
        <div className="flex flex-col items-center p-6 bg-white rounded-xl w-64">
            <h2 className="text-lg font-semibold mb-4 text-black">Quantity </h2>
                <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-red-300 text-gray-700 rounded-lg disabled:opacity-50" 
                    onClick={decrement} disabled={quantity ===1}>
                        -
                    </button>
                    <span className="text-xl font-bold">{quantity}</span>
                    <button className="px-4 py-2 bg-blue-500 text-black rounded-lg disabled:opacity-50"
                    onClick={incerment} disabled={quantity === 20}>
                        +
                    </button>
                </div>
        </div>
    )
}
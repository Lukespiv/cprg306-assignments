"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MealIdeas({ ingredient }) 
{
    const [meals, setMeals] = useState([]);

    useEffect(() => 
        {
        if (ingredient) 
            {
            async function loadMealIdeas() 
            {
                const onlineMeals = await fetchMealIdeas(ingredient);
                setMeals(onlineMeals);
            }
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
  {meals.length > 0 ? (
    <div>
      <h2>Here are some meal ideas using {ingredient}:</h2>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <h3>{meal.strMeal}</h3>
          <Image 
            src={meal.strMealThumb} 
            alt={meal.strMeal} 
            width={200} 
            height={200} 
            priority
          /> 
        </div>
      ))}
    </div>
  ) : (
    <p>No meals found for {ingredient}</p>
  )}
</div>
    );
}

async function fetchMealIdeas(ingredient) 
{
    try 
    {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) 
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data.meals || [];
    } catch (error) 
    {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

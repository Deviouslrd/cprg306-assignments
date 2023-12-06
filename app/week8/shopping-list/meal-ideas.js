"use client"

import { useEffect, useState } from 'react'

async function fetchMealIdeas (ingredient) {
    try {
        const mealIdeas = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        //const mealIdeas = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=bananas`);

        const response = await mealIdeas.json()
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default function MealIdeas ({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas () {
        try {
            //setMeals([]);
            const data = await fetchMealIdeas(ingredient)
            setMeals(data);
            console.log(meals)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        loadMealIdeas()
    }, [ingredient]);

    return (
        <div className="ml-5">
            <h1>List of meals</h1>
            <ul>
				{ meals.length == 0 ? (
                    meals.map((meal) => (
                        <li className="border bg-slate-800 my-2 p-2" key={meal.idMeal}>
                            <p>{meal.strMeal}</p>
                        </li>
                    ))
                ) : ( 
                    <li className="border bg-slate-800 my-2 p-2">
                        <p>No meals found</p>
                    </li>
                )}
			</ul>
        </div>
    )
}       
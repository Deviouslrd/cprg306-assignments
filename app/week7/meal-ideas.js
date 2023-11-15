"use client"

import { useEffect, useState } from 'react'

async function fetchMealIdeas (ingredient) {
    try {
        //const mealIdeas = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const mealIdeas = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`);

        const response = mealIdeas.json()
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default function MealIdeas ({ ingredient }) {
    const [meals, setMeals] = useState([]);

    function loadMealIdeas () {
        setMeals([...meals, fetchMealIdeas(ingredient)]);
    }

    useEffect(() => {
        return loadMealIdeas()
    }, [ingredient]);

    return (
        <div>
            <h1>List of meals</h1>
            <ul>
				{ meals.map((meal) => (
					<li className="bg-slate-800 my-3" key={meal.idMeal}>
						<p>{meal.strMeal}</p>
					</li>
				))}
			</ul>
        </div>
    )
}       
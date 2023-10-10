'use client'

import { useState } from 'react';

export default function NewItem () {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit (event) {
        event.preventDefault();

        const newItem = { name, quantity, category };

        console.log(newItem);

        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");

    }

    return (
        <form className="p-6">
            <label>Name: </label>
            <input className="text-black m-1 p-1 rounded" type="text" value={name} onChange={e => setName(e.target.value)} required/><br/>
            <label>Quantity: </label>
            <input className="text-black m-1 p-1 rounded" type="number" value={quantity} min="1" max="99" onChange={e => setQuantity(parseInt(e.target.value))} required/><br/>
            <label>Category: </label>
            <select className="text-black m-1 p-1 rounded" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select><br/>

            <button type="submit" onClick={e => handleSubmit(e)} className="text-white rounded bg-slate-600 p-1 mt-2 hover:bg-white hover:text-black">Submit</button>
        </form>
    )
}
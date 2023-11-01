"use client"
import { useState } from 'react';

import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from './items.json'

export default function SortList() {
	const [items, setItems] = useState(itemsData);

	function handleAddItem (newItem) {
		setItems(...items, newItem);
		console.log(items)
	}

	console.log(items)

    return (
		<main className="min-h-screen flex-col items-center justify-between p-24">
				<h1 className="text-3xl">My Shopping List</h1>
				<NewItem value={e => handleAddItem(e.target.value)}></NewItem>

				<ItemList value={items} />
		</main>
    )
}

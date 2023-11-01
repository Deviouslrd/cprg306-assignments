"use client"
import { useState } from 'react';

import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from './items.json';

export default function SortList() {
	const [itemList, setItemList] = useState(itemsData);

	function handleAddItem (newItem) {
		setItemList([...itemList, newItem]);
	}

    return (
		<main className="min-h-screen flex-col items-center justify-between p-24">
				<h1 className="text-3xl">My Shopping List</h1>
				<NewItem onAddItem={e => handleAddItem(e)}></NewItem>

				<ItemList items={itemList} />
		</main>
    )
}

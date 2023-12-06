"use client"

import { useState, useEffect } from 'react';

import ItemList from './item-list'
import NewItem from './new-item'
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function SecuredDbShopping({ user }) {
	const [itemList, setItemList] = useState([]);
	const [selectedItemName, setSelectedItemName] = useState("");

	function handleAddItem (newItem) {
		setItemList([...itemList, newItem]);
		addItem(user.uid, newItem)
	}

	function handleItemSelect (selectedItem) {
		setSelectedItemName(selectedItem.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, ''));
	}

	async function loadItems() {
		setItemList(await getItems(user.uid))
	}

	useEffect(() => {
		loadItems();
	}, [itemList]);

    return (
		<main className="min-h-screen flex-col items-center justify-between p-24">
				<h1 className="text-3xl">My Shopping List</h1>
				<div className="flex">
					<NewItem onAddItem={e => handleAddItem(e)} />
					<ItemList items={itemList} onItemSelect={() => handleItemSelect(e.target.innerText)} />	
					<MealIdeas ingredient={selectedItemName} />
			</div>
		</main>
    )
}

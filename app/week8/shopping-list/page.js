"use client"

import { useState } from 'react';

import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function SecuredShopping() {
	const [itemList, setItemList] = useState(itemsData);
	const [selectedItemName, setSelectedItemName] = useState("");

	function handleAddItem (newItem) {
		setItemList([...itemList, newItem]);
	}

	function handleItemSelect (selectedItem) {
		console.log(selectedItem)
		console.log(selectedItemName)
		setSelectedItemName(selectedItem.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, ''));
		console.log(selectedItemName)
	}

    return (
		<main className="min-h-screen flex-col items-center justify-between p-24">
				<h1 className="text-3xl">My Shopping List</h1>
				<div className="flex">
					<NewItem onAddItem={e => handleAddItem(e)}></NewItem>
					<ItemList items={itemList} onItemSelect={() => /*handleItemSelect(e.target.innerText)*/ console.log("yes")}/>	
					<MealIdeas ingredient={selectedItemName}/>
			</div>
		</main>
    )
}

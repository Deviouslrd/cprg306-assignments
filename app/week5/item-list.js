"use client"
import Item from './item';
import items from './items.json'
const { useState } = require('react');

export default function ItemList ({name, quantity, category}) {
	const [sortBy, setSortBy] = useState("name");
	//let itemList = [];

	function sortByName () {
		let newList = items.sort((a, b) => {
			if (a.name > b.name) {
				return 1;
			}

			if (a.name < b.name) {
				return -1;
			}

			return 0;
		});

		return newList;
	}

	function sortByCategory () {
		
	}



    return (
        <ul>
			{ items.map((item) => (
				<li className="bg-slate-800 my-3" key={item}>
					<Item name={item.name} quantity={item.quantity} category={item.category}></Item>
				</li>
			))}
        </ul>
    )
}
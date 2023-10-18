"use client"
import Item from './item';
import itemData from './items.json'
const { useState } = require('react');

export default function ItemList ({name, quantity, category}) {
	const [sortBy, setSortBy] = useState("name");

	const itemList = [...itemData].sort((a, b) => {
		if (sortBy === 'name') {
			return a.name.localeCompare(b.name);
		} else if (sortBy === 'category') {
			return a.category.localeCompare(b.category);
		}

		return 0;
	});

    return (
		<div>
			<button className="bg-white p-1 text-black rounded border-4 border-slate-600 mr-2" onClick={() => setSortBy('name')}>Sort By Name</button>
      		<button className="bg-white p-1 text-black rounded border-4 border-slate-600 mr-2" onClick={() => setSortBy('category')}>Sort By Category</button>
			<ul>
				{ itemList.map((item) => (
					<li className="bg-slate-800 my-3" key={item.id}>
						<Item name={item.name} quantity={item.quantity} category={item.category}></Item>
					</li>
				))}
			</ul>
		</div>
    )
}
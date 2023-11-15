export default function Item ({name, quantity, category, onSelect}) {
    return (
      <div onClick={onSelect}>
        <ul className="border p-2 my-2">
          <li className="font-bold">{name}</li>
          <li className="text-gray-400">Category: {category}</li>
          <li className="text-gray-400">Quantity: {quantity}</li>
        </ul>
      </div>
    )
}
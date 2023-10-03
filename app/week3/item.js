export default function Item ({name, quantity, category}) {
    return (
        <li className="border p-2 my-2">
        <div className="font-semibold">{name}</div>
        <div className="text-gray-600">Category: {category}</div>
        <div className="text-gray-600">Quantity: {quantity}</div>
      </li>
    )
}
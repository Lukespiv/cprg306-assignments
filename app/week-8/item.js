export default function Item({ name, quantity, category, onSelect  }) {
    return (
      <li className="p-2 border-b border-gray-200 hover:bg-gray-100"
      onClick={onSelect}
      aria-label={`Item: ${name}`}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-gray-600" aria-label={`Quantity: ${quantity}, Category: ${category}`}>{quantity} x {category}</span>
        </div>
      </li>
    );
}


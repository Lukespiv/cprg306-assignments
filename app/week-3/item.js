export default function Item({ name, quantity, category }) {
    return (
      <li className="p-2 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-gray-600">{quantity} x {category}</span>
        </div>
      </li>
    );
}


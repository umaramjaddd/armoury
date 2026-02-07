// src/components/ProductCard.jsx
import Link from "next/link"

export default function ProductCard({ product }) {
  return (
    <Link href={`/productView/${product.id}`}>
      <div className="group border max-w-[300px] w-full border-zinc-800 overflow-hidden shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:border-amber-500 cursor-pointer ">
        
        {/* Product Image */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-md">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 bg-zinc-900/5 group-hover:bg-zinc-900/10 transition">
          <h3 className="font-heading text-lg text-zinc-900 group-hover:text-amber-600 transition">
            {product.name}
          </h3>
          <p className="text-zinc-500 text-sm mt-1">{product.material}</p>
          <p className="text-amber-700 font-semibold mt-2">PKR {product.price}</p>
        </div>
      </div>
    </Link>
  )
}

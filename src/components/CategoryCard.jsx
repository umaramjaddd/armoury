// src/components/CategoryCard.jsx
import Link from "next/link"
import Image from "next/image"

export default function CategoryCard({ category }) {
  const isLocal = category.image?.startsWith("/")

  return (
    <Link
      href={`/categories/${category.id}`}
      className="group border max-w-[300px] w-full border-zinc-800 overflow-hidden shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:border-amber-500"
    >
      {/* Image */}
      {category.image && (
        <div className="relative w-full aspect-square  overflow-hidden">
          {isLocal ? (  
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
      )}

      {/* Text */}
      <div className="p-4 bg-zinc-900/5 group-hover:bg-zinc-900/10 transition">
        <h3 className="font-heading text-lg text-zinc-900 group-hover:text-amber-600 transition">
          {category.name}
        </h3>
        <p className="text-sm text-zinc-500 mt-2">{category.description}</p>
      </div>
    </Link>
  )
}

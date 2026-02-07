"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { subCategories } from "@/constants/subcategories"
import { products } from "@/constants/products"
import ProductCard from "@/components/ProductCard"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = Number(params.id)

  const filteredSubCategories = subCategories.filter(
    (sub) => sub.categoryId === categoryId
  )

  const [selectedSub, setSelectedSub] = useState(
    filteredSubCategories[0]?.id || null
  )

  const filteredProducts = products.filter(
    (p) => p.subCategoryId === selectedSub
  )

  if (!filteredSubCategories.length)
    return <p className="text-zinc-400">No subcategories found</p>

  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="font-heading text-3xl mb-8">
        Subcategories
      </h1>

      {/* Subcategory Tabs */}
      <div className="flex gap-4 mb-8">
        {filteredSubCategories.map((sub) => (
          <button
            key={sub.id}
            className={`px-4 py-2 border  transition
              ${
                selectedSub === sub.id
                  ? "bg-amber-700 text-white"
                  : "bg-zinc-800 text-zinc-300"
              }`}
            onClick={() => setSelectedSub(sub.id)}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Products for selected subcategory */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-zinc-400">No products in this subcategory</p>
        ) : (
          filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))
        )}
      </div>
    </main>
  )
}

// src/components/ProductsSection.jsx
import ProductCard from "./ProductCard"
import { products } from "@/constants/products"

export default function AllProducts({ title = "Our Products" }) {
  return (
    <section >
      <h2 className="font-heading text-3xl md:text-4xl text-zinc-900 mb-8 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="text-zinc-400 text-center">No products found</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  )
}

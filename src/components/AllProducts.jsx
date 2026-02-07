"use client";

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function AllProducts({ title = "Our Products" }) {
  const { products, loading } = useSelector((state) => state.products);

  return (
    <section>
      <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">
        {title}
      </h2>

      {loading && products.length === 0 ? (
        <p className="text-zinc-400 text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

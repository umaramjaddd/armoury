"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../Redux/Slices/productsSlice";

export default function ProductViewPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    // Fetch only if products are empty
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!product) return <p className="text-red-500">Product not found</p>;

  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="font-heading text-3xl mb-4">{product.name}</h1>

      <img
        src={product.thumbnail}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded-md"
      />

      <p className="text-zinc-400 mb-2">{product.material}</p>
      <p className="text-amber-700 font-semibold mb-2">
        PKR {product.price}
      </p>
      <p className="text-zinc-300">{product.description}</p>
    </main>
  );
}

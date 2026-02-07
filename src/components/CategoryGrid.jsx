"use client";

import { useSelector } from "react-redux";
import CategoryCard from "@/components/CategoryCard";

export default function CategoryGrid() {
  const { categories, loading } = useSelector((state) => state.products);

  if (loading && categories.length === 0)
    return <p className="text-center text-zinc-400">Loading categories...</p>;

  return (
    <div className="flex gap-6 justify-center flex-wrap">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
    </div>
  );
}

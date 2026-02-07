"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchSubCategories, fetchProducts } from "../../Redux/Slices/adminSlice";
import CategoryTab from "./CategoryTab";
import SubCategoryTab from "./SubCategoryTab";
import ProductTab from "./ProductTab";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("categories");
  const dispatch = useDispatch();
  const { categories, subCategories, products, loading } = useSelector(state => state.admin);

  useEffect(() => {
    if (categories.length === 0) dispatch(fetchCategories());
    if (subCategories.length === 0) dispatch(fetchSubCategories());
    if (products.length === 0) dispatch(fetchProducts());
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["categories", "subCategories", "products"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border rounded ${
              activeTab === tab ? "bg-amber-500 text-white" : "bg-zinc-800 text-zinc-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && <p>Loading data...</p>}

      {/* Tab content */}
      {!loading && (
        <div>
          {activeTab === "categories" && <CategoryTab categories={categories} />}
          {activeTab === "subCategories" && <SubCategoryTab subCategories={subCategories} />}
          {activeTab === "products" && <ProductTab products={products} />}
        </div>
      )}
    </div>
  );
}

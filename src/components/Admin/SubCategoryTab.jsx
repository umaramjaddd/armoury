"use client"

export default function SubCategoryTab({ subCategories }) {
  if (!subCategories) return <p>No subcategories found</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {subCategories.map(sub => (
        <div key={sub.id} className="p-4 border rounded shadow-sm">
          <h3 className="font-semibold">{sub.name}</h3>
          <p className="text-sm text-zinc-500">Category ID: {sub.category_id}</p>
        </div>
      ))}
    </div>
  );
}

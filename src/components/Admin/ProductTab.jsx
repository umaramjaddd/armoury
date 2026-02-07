"use client"

export default function ProductTab({ products }) {
  if (!products) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(prod => (
        <div key={prod.id} className="p-4 border rounded shadow-sm">
          <h3 className="font-semibold">{prod.name}</h3>
          <p className="text-sm text-zinc-500">{prod.material}</p>
          <p className="text-amber-600 font-semibold">PKR {prod.price}</p>
          {prod.thumbnail && (
            <img src={prod.thumbnail} alt={prod.name} className="w-full h-32 object-cover mt-2 rounded" />
          )}
        </div>
      ))}
    </div>
  );
}

import { categories } from "@/constants/categories"
import CategoryCard from "@/components/CategoryCard"

export default function CategoryGrid() {
  return (
      <div className="flex gap-6 justify-center ">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    
  )
}

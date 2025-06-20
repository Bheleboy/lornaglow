import ProductCard from "./product-card"

const products = [
  {
    id: 1,
    name: "Premium Collagen Peptides - 250ml",
    price: 499,
    originalPrice: 599,
    image: "/placeholder.svg?height=300&width=300",
    description: "Pure Type I & Type III collagen peptides in premium glass jar with gold lid",
    benefits: ["Skin elasticity", "Hair growth", "Joint health", "Anti-aging"],
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Premium Collagen Peptides - 500ml",
    price: 899,
    originalPrice: 1099,
    image: "/placeholder.svg?height=300&width=300",
    description: "Larger size premium collagen for extended use",
    benefits: ["Skin elasticity", "Hair growth", "Joint health", "Anti-aging"],
    inStock: true,
    featured: false,
  },
  {
    id: 3,
    name: "Collagen Starter Pack - 250ml",
    price: 449,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    description: "Perfect introduction to premium collagen supplementation",
    benefits: ["Beginner friendly", "Full benefits", "Premium quality"],
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Collagen Bundle - 2x 250ml",
    price: 899,
    originalPrice: 998,
    image: "/placeholder.svg?height=300&width=300",
    description: "Save with our popular bundle pack",
    benefits: ["Best value", "Extended supply", "Free shipping"],
    inStock: true,
    featured: true,
  },
]

export default function ProductGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye } from "lucide-react"
import PayFastButton from "@/components/payfast/payfast-button"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number | null
  image: string
  description: string
  benefits: string[]
  inStock: boolean
  featured: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative">
          <Link href={`/shop/product/${product.id}`}>
            <div className="aspect-square relative overflow-hidden rounded-t-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {product.featured && <Badge className="absolute top-2 left-2 bg-amber-600 text-white">Featured</Badge>}

          {discountPercentage > 0 && (
            <Badge className="absolute top-2 right-2 bg-red-600 text-white">-{discountPercentage}%</Badge>
          )}

          <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-4">
          <Link href={`/shop/product/${product.id}`}>
            <h3 className="font-semibold text-gray-900 mb-2 hover:text-amber-600 transition-colors">{product.name}</h3>
          </Link>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

          <div className="flex flex-wrap gap-1 mb-3">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {benefit}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">R{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">R{product.originalPrice}</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Link
              href={`/shop/product/${product.id}`}
              className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 px-3 rounded-md text-sm font-medium transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Link>

            {product.inStock ? (
              <PayFastButton
                amount={product.price}
                itemName={product.name}
                itemDescription={product.description}
                customStr1={`product_id:${product.id}`}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm py-2 h-auto"
              />
            ) : (
              <Button size="sm" disabled className="w-full">
                Out of Stock
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

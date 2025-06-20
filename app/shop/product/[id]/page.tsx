import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, Shield, Award, Heart, Minus, Plus } from "lucide-react"
import PayFastButton from "@/components/payfast/payfast-button"
import Footer from "@/components/footer"

// This would typically come from a database or API
const products = [
  {
    id: 1,
    name: "Premium Collagen Peptides - 250ml",
    price: 499,
    originalPrice: 599,
    image: "/placeholder.svg?height=500&width=500",
    description: "Pure Type I & Type III collagen peptides in premium glass jar with gold lid",
    benefits: ["Skin elasticity", "Hair growth", "Joint health", "Anti-aging"],
    inStock: true,
    featured: true,
    fullDescription:
      "A protein essential for skin, nails, hair, bones and connective tissue. Our premium Type I & Type III collagen supports anti-aging, joint health, and tissue repair. Made from the highest quality bovine collagen, our peptides are easily absorbed and provide maximum bioavailability.",
    ingredients: ["Hydrolyzed Collagen Peptides (Type I & III)", "No additives", "No preservatives", "Gluten-free"],
    usage: "Mix 1-2 tablespoons daily in water, smoothies, or food. Best taken on an empty stomach or between meals.",
  },
  {
    id: 2,
    name: "Premium Collagen Peptides - 500ml",
    price: 899,
    originalPrice: 1099,
    image: "/placeholder.svg?height=500&width=500",
    description: "Larger size premium collagen for extended use",
    benefits: ["Skin elasticity", "Hair growth", "Joint health", "Anti-aging"],
    inStock: true,
    featured: false,
    fullDescription:
      "Our larger 500ml jar provides excellent value for regular collagen users. Same premium quality Type I & Type III collagen peptides in a convenient larger size.",
    ingredients: ["Hydrolyzed Collagen Peptides (Type I & III)", "No additives", "No preservatives", "Gluten-free"],
    usage: "Mix 1-2 tablespoons daily in water, smoothies, or food. Best taken on an empty stomach or between meals.",
  },
  {
    id: 3,
    name: "Collagen Starter Pack - 250ml",
    price: 449,
    originalPrice: null,
    image: "/placeholder.svg?height=500&width=500",
    description: "Perfect introduction to premium collagen supplementation",
    benefits: ["Beginner friendly", "Full benefits", "Premium quality"],
    inStock: true,
    featured: false,
    fullDescription:
      "Perfect for those new to collagen supplementation. This starter pack contains the same premium quality collagen at an introductory price.",
    ingredients: ["Hydrolyzed Collagen Peptides (Type I & III)", "No additives", "No preservatives", "Gluten-free"],
    usage: "Mix 1-2 tablespoons daily in water, smoothies, or food. Best taken on an empty stomach or between meals.",
  },
  {
    id: 4,
    name: "Collagen Bundle - 2x 250ml",
    price: 899,
    originalPrice: 998,
    image: "/placeholder.svg?height=500&width=500",
    description: "Save with our popular bundle pack",
    benefits: ["Best value", "Extended supply", "Free shipping"],
    inStock: true,
    featured: true,
    fullDescription:
      "Our most popular bundle pack includes two 250ml jars of premium collagen peptides. Perfect for couples or for extended personal use.",
    ingredients: ["Hydrolyzed Collagen Peptides (Type I & III)", "No additives", "No preservatives", "Gluten-free"],
    usage: "Mix 1-2 tablespoons daily in water, smoothies, or food. Best taken on an empty stomach or between meals.",
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return {
      title: "Product Not Found - Lorna Glow",
    }
  }

  return {
    title: `${product.name} - Lorna Glow`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link href="/shop" className="text-amber-600 hover:text-amber-700">
              Return to Shop
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/shop" className="inline-flex items-center text-amber-600 hover:text-amber-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.featured && <Badge className="absolute top-4 left-4 bg-amber-600 text-white">Featured</Badge>}
              {discountPercentage > 0 && (
                <Badge className="absolute top-4 right-4 bg-red-600 text-white">-{discountPercentage}%</Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">R{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">R{product.originalPrice}</span>
                )}
                {discountPercentage > 0 && (
                  <Badge className="bg-red-100 text-red-800">Save {discountPercentage}%</Badge>
                )}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quality Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber-600" />
                <span className="text-gray-700">Pure, additive-free formula</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-gray-700">Type I & Type III Collagen</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="text-gray-700">Premium glass jar with gold lid</span>
              </div>
            </div>

            {/* Purchase Section */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Quantity</span>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">1</span>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <PayFastButton
                      amount={product.price}
                      itemName={product.name}
                      itemDescription={product.description}
                      customStr1={`product_id:${product.id},source:product_page`}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3"
                    >
                      Buy Now - R{product.price}
                    </PayFastButton>
                    <Button variant="outline" size="icon" className="bg-white text-gray-700">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 text-center">Free shipping on orders over R1000</p>
                </div>
              </CardContent>
            </Card>

            {/* Product Details Tabs */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700">{product.fullDescription}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Ingredients</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Usage Instructions</h3>
                <p className="text-gray-700">{product.usage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

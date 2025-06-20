import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Award } from "lucide-react"
import PayFastButton from "@/components/payfast/payfast-button"

export default function ProductShowcase() {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Premium Collagen Peptides Powder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Type I & Type III Collagen in elegant 250ml glass jars with gold lids
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full h-48 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-lg relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-20">
                    <Image
                      src="/images/lorna-glow-logo.png"
                      alt="Product"
                      width={64}
                      height={80}
                      className="opacity-80"
                    />
                  </div>
                </div>
                <div className="w-full h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-lg relative">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                </div>
              </div>
              <div className="mt-8">
                <div className="w-full h-64 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-xl relative">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full shadow-lg"></div>
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-24">
                    <Image
                      src="/images/lorna-glow-logo.png"
                      alt="Product"
                      width={80}
                      height={96}
                      className="opacity-80"
                    />
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-xs text-amber-800 font-semibold">250ml</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Premium Quality</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Additive-Free</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bulk Collagen Peptides Powder</h3>
              <p className="text-gray-600 mb-6">
                A protein essential for skin, nails, hair, bones and connective tissue. Our premium Type I & Type III
                collagen supports anti-aging, joint health, and tissue repair.
              </p>
            </div>

            <div className="space-y-4">
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

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">R499</span>
                  <span className="text-sm text-gray-500">250ml jar</span>
                </div>
                <div className="space-y-3">
                  <Link
                    href="/shop/product/1"
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 px-4 rounded-md text-center font-medium transition-colors"
                  >
                    View Product Details
                  </Link>
                  <PayFastButton
                    amount={499}
                    itemName="Premium Collagen Peptides - 250ml"
                    itemDescription="Pure Type I & Type III collagen peptides in premium glass jar"
                    customStr1="product_id:1"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">Free shipping on orders over R750</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

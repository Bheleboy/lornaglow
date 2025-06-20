import type { Metadata } from "next"
import ShopHeader from "@/components/shop/shop-header"
import ProductGrid from "@/components/shop/product-grid"
import ShopFilters from "@/components/shop/shop-filters"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Shop - Lorna Glow Collagen",
  description:
    "Premium collagen peptides powder for radiant skin, strong hair, and healthy nails. Shop our collection of Type I & Type III collagen products.",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <ShopHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ShopFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

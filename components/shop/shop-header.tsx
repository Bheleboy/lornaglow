import Image from "next/image"

export default function ShopHeader() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <Image src="/images/lorna-glow-logo.png" alt="Lorna Glow" width={200} height={100} className="mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Collagen Collection</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our range of premium collagen peptides, carefully crafted for your wellness journey. All products
          shipped within South Africa.
        </p>
      </div>
    </div>
  )
}

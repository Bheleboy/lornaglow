import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <Image
                src="/images/lorna-glow-logo.png"
                alt="Lorna Glow"
                width={300}
                height={150}
                className="mx-auto lg:mx-0"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Premium Collagen
              <span className="block text-amber-600">For Radiant You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Pure, additive-free collagen peptides powder in elegant 250ml glass jars. Essential protein for skin,
              nails, hair, bones and connective tissue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg" asChild>
                <Link href="/shop">Shop Now - From R449</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-gray-700 border-gray-300 px-8 py-3" asChild>
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-20"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-48 h-64 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-2xl relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full shadow-lg"></div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-32">
                    <Image
                      src="/images/lorna-glow-logo.png"
                      alt="Lorna Glow Logo on Jar"
                      width={96}
                      height={128}
                      className="opacity-80"
                    />
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-xs text-amber-800 font-semibold">250ml</p>
                    <p className="text-xs text-amber-700">Premium Collagen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

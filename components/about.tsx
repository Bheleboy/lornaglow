import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Collagen</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Collagen is the most abundant protein in our body, making up about 30% of our total protein content.
                It's the building block that gives structure to our skin, hair, nails, bones, and connective tissues.
              </p>
              <p>
                As we age, our natural collagen production decreases by about 1% per year after age 25. This decline
                leads to visible signs of aging, joint discomfort, and weakened connective tissues.
              </p>
              <p>
                Our premium Type I & Type III collagen peptides are specifically chosen for their superior
                bioavailability and effectiveness in supporting your body's natural collagen production.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Type I Collagen</h3>
                <p className="text-gray-600 mb-4">The most abundant collagen in our body, essential for:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    Skin elasticity and hydration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    Bone strength and density
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    Tendon and ligament health
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Type III Collagen</h3>
                <p className="text-gray-600 mb-4">Works alongside Type I collagen for:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    Hair growth and strength
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    Skin structure and firmness
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    Blood vessel integrity
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8">
            <div className="mb-6">
              <Image src="/images/lorna-glow-logo.png" alt="Lorna Glow" width={200} height={100} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">REPAIR | RENEW | RADIATE</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the Lorna Glow difference with our premium collagen formula, designed to help you repair,
              renew, and radiate from within.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

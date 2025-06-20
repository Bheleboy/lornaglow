import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Zap, Shield } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-amber-600" />,
      title: "Skin, Hair & Nail Health",
      description: "Improves skin elasticity, promotes hair growth, and strengthens nails for a radiant appearance.",
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-600" />,
      title: "Bone & Joint Strength",
      description: "Strengthens bones and supports joint health for better mobility and reduced discomfort.",
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-600" />,
      title: "Tissue Repair & Elasticity",
      description: "Boosts tissue repair and maintains elasticity for faster recovery and youthful vitality.",
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Anti-Aging Support",
      description: "Supports anti-aging processes and helps maintain youthful skin and connective tissue.",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformative power of premium collagen peptides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suggested Usage & Dosage</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <p className="text-gray-700">Mix 1-2 tablespoons daily in water, smoothies, or food</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <p className="text-gray-700">Use consistently for best results</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <p className="text-gray-700">Best taken on an empty stomach or between meals</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Perfect for:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Morning smoothies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Coffee or tea
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Yogurt or oatmeal
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Baking recipes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

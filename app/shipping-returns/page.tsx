import type { Metadata } from "next"
import Link from "next/link"
import { Truck, RotateCcw, Shield, Clock } from 'lucide-react'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Shipping & Returns - Lorna Glow",
  description: "Learn about our shipping and returns policy for South Africa. Free shipping on orders over R1000.",
}

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping & Returns</h1>
            <p className="text-xl text-gray-600">
              We deliver premium collagen products across South Africa with care and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Truck className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Shipping Information</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Delivery Areas</h3>
                  <p className="text-gray-700">
                    We deliver to all major cities and towns across South Africa, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Johannesburg & Gauteng</li>
                    <li>Cape Town & Western Cape</li>
                    <li>Durban & KwaZulu-Natal</li>
                    <li>Port Elizabeth & Eastern Cape</li>
                    <li>Bloemfontein & Free State</li>
                    <li>All other provinces</li>
                  </ul>
                  <p className="mt-2 text-red-600 font-semibold">Note: We currently only ship within South Africa.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Shipping Costs</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>
                      • <strong>FREE shipping</strong> on orders over R1000
                    </li>
                    <li>• Standard delivery: R120 (3-5 business days)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <RotateCcw className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Returns Policy</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">30-Day Return Window</h3>
                  <p className="text-gray-700">
                    We offer a 30-day return policy from the date of delivery. Products must be unopened and in original
                    packaging for hygiene and safety reasons.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Return Process</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Contact us at returns@lornaglow.co.za</li>
                    <li>Receive return authorization number</li>
                    <li>Package item securely with authorization</li>
                    <li>Send via courier (customer pays return shipping)</li>
                    <li>Refund processed within 7-10 business days</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Clock className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
              <p className="text-gray-600">Orders processed within 1-2 business days</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Shield className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Packaging</h3>
              <p className="text-gray-600">Products carefully packaged to prevent damage</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Truck className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Tracking Included</h3>
              <p className="text-gray-600">Track your order from dispatch to delivery</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you ship outside South Africa?</h3>
                <p className="text-gray-700">
                  Currently, we only ship within South Africa. We're working on expanding to other countries in the
                  future.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if my order arrives damaged?</h3>
                <p className="text-gray-700">
                  Contact us immediately at support@lornaglow.co.za with photos of the damage. We'll arrange a replacement
                  or full refund at no cost to you.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I change my delivery address after ordering?</h3>
                <p className="text-gray-700">
                  Contact us within 2 hours of placing your order to change the delivery address. Once processed, address
                  changes may not be possible.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept all major credit cards, debit cards, and EFT payments through our secure PayFast payment
                  gateway.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions about shipping or returns?</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center py-16">
        <div className="max-w-md mx-auto text-center px-4">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. You will receive a confirmation email shortly with your order details and tracking
            information.
          </p>
          <div className="space-y-4">
            <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

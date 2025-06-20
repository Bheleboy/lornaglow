import Link from "next/link"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center py-16">
        <div className="max-w-md mx-auto text-center px-4">
          <XCircle className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>
          <p className="text-gray-600 mb-8">
            Your payment was cancelled. Your order has not been processed. You can try again or contact us if you need
            assistance.
          </p>
          <div className="space-y-4">
            <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
              <Link href="/shop">Try Again</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

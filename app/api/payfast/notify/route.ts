import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())

    // Verify PayFast signature (implement signature verification)
    // Process the payment notification
    // Update order status in database

    console.log("PayFast notification received:", data)

    // Respond with 200 OK to acknowledge receipt
    return new NextResponse("OK", { status: 200 })
  } catch (error) {
    console.error("PayFast notification error:", error)
    return new NextResponse("Error", { status: 500 })
  }
}

"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

interface PayFastButtonProps {
  amount: number
  itemName: string
  itemDescription: string
  customStr1?: string
  onSuccess?: () => void
  onCancel?: () => void
  className?: string
  children?: React.ReactNode
}

export default function PayFastButton({
  amount,
  itemName,
  itemDescription,
  customStr1,
  onSuccess,
  onCancel,
  className,
  children,
}: PayFastButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      // Generate a unique order ID
      const orderId = `LG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      // Create PayFast payment form data
      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID || "10000100",
        merchant_key: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY || "46f0cd694581a",
        amount: amount.toFixed(2),
        item_name: itemName,
        item_description: itemDescription,
        return_url: `${window.location.origin}/payment/success`,
        cancel_url: `${window.location.origin}/payment/cancel`,
        notify_url: `${window.location.origin}/api/payfast/notify`,
        custom_str1: customStr1 || "",
        custom_str2: orderId,
        email_confirmation: "1",
        confirmation_address: "orders@lornaglow.co.za",
        name_first: "",
        name_last: "",
        email_address: "",
        cell_number: "",
      }

      // Create form and submit to PayFast
      const form = document.createElement("form")
      form.method = "POST"
      form.action =
        process.env.NODE_ENV === "production"
          ? "https://www.payfast.co.za/eng/process"
          : "https://sandbox.payfast.co.za/eng/process"

      // Add all payment data as hidden inputs
      Object.entries(paymentData).forEach(([key, value]) => {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = key
        input.value = value
        form.appendChild(input)
      })

      // Submit form to PayFast
      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)
    } catch (error) {
      console.error("Payment error:", error)
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handlePayment} disabled={isLoading} className={className}>
      {isLoading ? (
        "Processing..."
      ) : children ? (
        children
      ) : (
        <>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Buy Now - R{amount.toFixed(2)}
        </>
      )}
    </Button>
  )
}

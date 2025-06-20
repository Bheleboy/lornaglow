"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Price Range (ZAR)</h3>
            <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>R{priceRange[0]}</span>
              <span>R{priceRange[1]}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Product Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="collagen-powder" />
                <label htmlFor="collagen-powder" className="text-sm">
                  Collagen Powder
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="type-1" />
                <label htmlFor="type-1" className="text-sm">
                  Type I Collagen
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="type-3" />
                <label htmlFor="type-3" className="text-sm">
                  Type III Collagen
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Size</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="250ml" />
                <label htmlFor="250ml" className="text-sm">
                  250ml
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="500ml" />
                <label htmlFor="500ml" className="text-sm">
                  500ml
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

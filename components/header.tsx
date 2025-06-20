"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/lorna-glow-logo.png"
                alt="Lorna Glow"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-amber-600 transition-colors">
              Shop
            </Link>
            <a href="#benefits" className="text-gray-700 hover:text-amber-600 transition-colors">
              Benefits
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-white text-gray-700 border-gray-300">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/shop"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <a
                href="#benefits"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full bg-white text-gray-700 border-gray-300">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Cart (0)
                </Button>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/shop">Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

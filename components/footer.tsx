import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, Mail, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/lorna-glow-logo.png"
                alt="Lorna Glow"
                width={180}
                height={90}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium collagen peptides for radiant skin, strong hair, healthy nails, and overall wellness. Repair,
              renew, and radiate with Lorna Glow.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/lornaglowcollagen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://facebook.com/lornaglowcollagen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">083 346 6467</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">@lornaglowcollagen</span>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">@lornaglowcollagen</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">info@lornaglow.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Lorna Glow. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping-returns" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Shipping & Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

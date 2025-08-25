import type React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Our Story */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-200 leading-relaxed mb-4">
              Mankind has always turned back to Mother Earth for disease free pure & simple Life – Pura Vida. At Pura
              Vida, We believe in the Veda philosophy, which says that nature has always an abundance of plants, roots,
              flowers and herbs rich in vitamins, enzymes, proteins and minerals that have been used in body and
              skin-care in Indian system of medicine Ayurveda.
            </p>
            <Link href="/about" className="text-orange-400 hover:text-orange-300 font-semibold">
              Read More
            </Link>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-200 hover:text-white transition-colors">
                  OUR BUSINESS
                </Link>
              </li>
              <li>
                <Link href="/advantage" className="text-gray-200 hover:text-white transition-colors">
                  PURA VIDA ADVANTAGE
                </Link>
              </li>
              <li>
                <Link href="/facility" className="text-gray-200 hover:text-white transition-colors">
                  FACILITY & CERTIFICATION
                </Link>
              </li>
              <li>
                <Link href="/industry" className="text-gray-200 hover:text-white transition-colors">
                  INDUSTRY
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-200 hover:text-white transition-colors">
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
                  REACH US
                </Link>
              </li>
            </ul>
          </div>

          {/* Touch Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Touch Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-gray-200">
                    <strong>Add:</strong> 169, Uttam Nagar West, New Delhi - 110059
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-gray-200">
                    <strong>Email:</strong> rk@puravida.org.in
                    <br />
                    qualitypuravida@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="text-gray-200">
                    <strong>Mob:</strong> +91-9811647596
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 PuraVida. All rights reserved. | GST No: 27PURPV2018H1ZX | IEC: PURPV2018H
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

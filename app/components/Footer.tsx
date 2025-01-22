'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Subscribe Newsletter</h3>
            <p className="text-sm text-gray-300">Subscribe newsletter to get 5% on all products.</p>
          </div>
          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded px-4 py-2 text-black"
            />
            <button className="rounded bg-red-600 px-6 py-2 font-medium hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 gap-8 border-t border-gray-800 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo Section */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold">
                Capital <span className="text-gray-400">Shop</span>
              </span>
            </Link>
          </div>

          {/* Shop Men */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Shop Men</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Clothing Fashion</Link></li>
              <li><Link href="#" className="hover:text-white">Winter</Link></li>
              <li><Link href="#" className="hover:text-white">Summer</Link></li>
              <li><Link href="#" className="hover:text-white">Formal</Link></li>
              <li><Link href="#" className="hover:text-white">Casual</Link></li>
            </ul>
          </div>

         
          <div>
            <h4 className="mb-4 text-lg font-semibold">Shop Women</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Clothing Fashion</Link></li>
              <li><Link href="#" className="hover:text-white">Winter</Link></li>
              <li><Link href="#" className="hover:text-white">Summer</Link></li>
              <li><Link href="#" className="hover:text-white">Formal</Link></li>
              <li><Link href="#" className="hover:text-white">Casual</Link></li>
            </ul>
          </div>

        
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Track Your Order</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white">Carrier</Link></li>
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>

      
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 text-sm text-gray-400 md:flex-row">
          <p>
            Copyright ©2025 All rights reserved
           
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-white">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


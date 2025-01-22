'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Search, User, ShoppingCart } from 'lucide-react'
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'
import { auth, db } from '../lib/firebase.config'
import { doc, getDoc, DocumentData } from 'firebase/firestore'

interface UserData {
  name: string;
  email: string;
  imgUrl?: string; 
}

export default function Header() {
  const [user, setUser] = useState<UserData | null>(null)
  const [cartCount] = useState(1)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: FirebaseUser | null) => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid)
        const userDoc = await getDoc(userDocRef)
        if (userDoc.exists()) {
          setUser(userDoc.data() as UserData)
        }
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-[70px] py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-[100px] w-[100px] sm:h-20 sm:w-20 lg:h-[100px] lg:w-[170px]">
            <Image 
              src="/logo.webp" 
              alt="Capital Shop Logo" 
              layout="fill"
              className="rounded object-contain"
            />
          </div>
        </Link>

        <nav 
          className={`lg:flex lg:items-center lg:gap-8 absolute top-0 right-0 bottom-0 left-0 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:static lg:transform-none lg:relative ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
        >
          <div className="flex flex-col items-center gap-6 pt-20 lg:flex-row lg:pt-0">
            <Link href="/" className="font-medium hover:text-gray-600">Home</Link>
            <Link href="/men" className="font-medium hover:text-gray-600">Men</Link>
            <Link href="/women" className="font-medium hover:text-gray-600">Women</Link>
            <Link href="/baby" className="font-medium hover:text-gray-600 flex items-center">
              Baby Collection
              <span className="ml-1 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-medium text-white">New</span>
            </Link>
          
            <Link href="/contact" className="font-medium hover:text-gray-600">Contact</Link>
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 hover:text-gray-600">
            <Search className="h-5 w-5" />
          </button>

          <button className="relative p-2 hover:text-gray-600">
            <ShoppingCart className="h-5 w-5" />
          </button>

          <Link href={'/login'}>
            <button className="p-2 hover:text-gray-600">
              {user ? (
                user.imgUrl ? (

                  <Link href={'/profile'}>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                   
                   <img
                    src={user.imgUrl} 
                    alt="User Profile" 
                  
                    className="object-cover"
                    
                    />
                  </div>
                    </Link>
                ) : (
                  <User className="h-5 w-5" />
                )
              ) : (
                <User className="h-5 w-5" />
              )}
            </button>
          </Link>

        

          <button 
            className="lg:hidden relative z-50 w-10 h-10 focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle Menu</span>
            <div className="absolute left-1/2 top-1/2 w-5 transform -translate-x-1/2 -translate-y-1/2">
              <span 
                aria-hidden="true" 
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span 
                aria-hidden="true" 
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span 
                aria-hidden="true" 
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { auth, db } from '../lib/firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { signOut, onAuthStateChanged } from 'firebase/auth'

export default function ProfilePage() {
  const [userData, setUserData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Set up the auth state change listener
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        
        const userRef = doc(db, 'users', user.uid)
        const userDoc = await getDoc(userRef)
        if (userDoc.exists()) {
          setUserData(userDoc.data())
        }
      } else {
        // If no user is logged in, redirect to the login page
        router.push('/login')
      }
    })

    // Clean up the auth state listener when the component is unmounted
    return () => {
      unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/login') // Redirect to login after signing out
    } catch (error) {
      console.error('Error signing out: ', error)
      alert('Error signing out')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Profile</h1>
          <p className="mt-2 text-sm text-gray-600">Your profile information</p>
        </div>

        {userData ? (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col items-center">
              {userData.imgUrl ? (
                <Image
                  src={userData.imgUrl}
                  alt="Profile Image"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-white text-2xl">
                  {userData.name?.charAt(0) || "?"}
                </div>
              )}
              <div className="mt-4">
                <p className="text-lg font-semibold">{userData.name}</p>
                <p className="text-sm text-gray-600">{userData.email}</p>
              </div>
            </div>

            {/* Sign Out Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSignOut}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

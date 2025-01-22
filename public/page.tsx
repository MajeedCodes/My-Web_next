import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { db } from "@/app/lib/firebase.config"
import { doc, getDoc } from "firebase/firestore"
import Loader from "@/app/components/Loader"

// Define types for the product data
interface Product {
  title: string
  description: string
  price: number
  originalPrice?: number
  imageUrl?: string
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()
  const { slug } = router.query // Access the dynamic slug from the URL

  useEffect(() => {
    if (slug) {
      const fetchProductDetails = async () => {
        setIsLoading(true)
        const docRef = doc(db, "products", slug as string) // Fetch product using slug as the document ID
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setProduct(docSnap.data() as Product)
        } else {
          console.error('No such product!')
        }
        setIsLoading(false)
      }
      fetchProductDetails()
    }
  }, [slug]) // Run effect when `slug` changes

  if (isLoading) return <Loader /> // Show loader while fetching product details

  if (!product) return <div>Product not found</div> // Handle case where product is not found

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.title}
            className="w-full max-w-sm object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-lg mt-4">{product.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-semibold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button className="mt-8 bg-red-500 text-white py-2 px-4 rounded-md">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

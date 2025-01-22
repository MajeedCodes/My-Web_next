'use client';

import { useState, useEffect } from "react";
import { db } from "@/app/lib/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import Loader from "@/app/components/Loader";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Resolve the `params` Promise
  const { id } = use(params);

  // Fetch product data from Firestore based on the product ID
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row bg-red-500 p-8">
        <div className="w-full md:w-1/3">
          <img
            src={product?.imageUrl || "/placeholder.svg"}
            alt={product?.title || "Product"}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-2/3 pl-0 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-white text-3xl font-medium mb-2">{product?.title}</h1>
          <p className="text-white text-sm mb-4">By {product?.author || "Unknown Author"}</p>
          <div className="flex items-center mb-4">
            <p className="text-white text-2xl font-bold">${product?.price?.toFixed(2)}</p>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white ml-2">
                ({product?.reviews || 0} Reviews)
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Add To Cart
            </button>
            <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold">Description</h2>
        <br />
        <p className="text-gray-600 leading-relaxed">{product?.description}</p>
      </div>
    </div>
  );
}

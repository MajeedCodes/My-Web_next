'use client';
import { useState, useEffect } from "react";
import { db } from "@/app/lib/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import Loader from "@/app/components/Loader";
import Link from "next/link";

interface Product {
  id: string;
  category: string;
  imageUrl: string;
  title: string;
  price: number;
  originalPrice?: number;
}

const categories = ["Men", "Women", "Baby", "Fashion"];

export default function TrendingSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Men"); // Default category set to "Men"
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "products"));
      const fetchedProducts: Product[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];

      // Filter products based on the active category (default is "Men")
      const filteredProducts = fetchedProducts.filter(
        (product) => product.category === activeCategory
      );

      setProducts(filteredProducts);
      setIsLoading(false);
    };

    fetchProducts();
  }, [activeCategory]); // Fetch products whenever activeCategory changes

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-medium text-gray-900">Trending This Week</h2>
        <div className="flex gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative pb-2 text-sm ${activeCategory === category
                ? "text-red-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-red-500"
                : "text-gray-500 hover:text-gray-900"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <Link href={`/${product.id}`}>
                  <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100">
                    <img
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.title}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm text-gray-700">{product.title}</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

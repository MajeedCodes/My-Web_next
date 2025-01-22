'use client'
import { useState } from "react";
import { db } from "@/app/lib/firebase.config";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    rating: "",
    reviews: "",
    description: "",
    imageUrl: "",
    category: "",  // Added category to formData state
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProduct = async (e:any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        ...formData,
        price: parseFloat(formData.price),
        reviews: parseInt(formData.reviews),
      });
      alert("Product added successfully!");
      setFormData({
        title: "",
        author: "",
        price: "",
        rating: "",
        reviews: "",
        description: "",
        imageUrl: "",
        category: "",  // Reset category after form submission
      });
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Product Display Section */}
      <div className="flex flex-col md:flex-row bg-red-100 p-6 rounded-lg shadow-lg">
        <img
          src={formData.imageUrl || "https://via.placeholder.com/300"}
          alt="Product"
          className="w-full md:w-1/3 object-cover rounded-lg"
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-red-700">{formData.title || "Product Title"}</h1>
          <p className="text-lg text-gray-600">By {formData.author || "Author Name"}</p>
          <h2 className="text-2xl font-semibold mt-2">${formData.price || "0.00"}</h2>
          <p className="text-yellow-500 mt-1">⭐ {formData.rating || "5.0"} ({formData.reviews || "0"} Reviews)</p>
          <p className="mt-1 text-lg text-gray-800"><strong>{formData.category || "Category not selected"}</strong></p> {/* Fixed error: added closing </p> tag */}
          <button className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-700">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Description Tabs */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{formData.description || "Product description goes here..."}</p>
      </div>

      {/* Add Product Form */}
      <form onSubmit={addProduct} className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Add Product</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
            placeholder="Reviews Count"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="mt-4 p-2 border border-gray-300 rounded w-full"
          required
        ></textarea>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="mt-4 p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Header from "../component/header";
// import { FaHeart, FaRegHeart, FaInfoCircle } from "react-icons/fa"; // Uncomment if using react-icons

const sampleProducts = [
  {
    id: 1,
    name: "Elite Sausage",
    image: "/3301983030.jpg",
    price: 1500,
    info: "Premium quality sausage made with natural spices.",
  },
  {
    id: 2,
    name: "Frozen Cutlet",
    image: "/3301983030.jpg",
    price: 1200,
    info: "Easy to cook semi-finished meat cutlet.",
  },
  {
    id: 3,
    name: "Frozen Cutlet",
    image: "/3301983030.jpg",
    price: 1800,
    info: "Easy to cook semi-finished meat cutlet.",
  },
  {
    id: 4,
    name: "Frozen Cutlet",
    image: "/3301983030.jpg",
    price: 3200,
    info: "Easy to cook semi-finished meat cutlet.",
  },
];

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Ապրանքներ
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="relative border rounded-2xl shadow-sm p-4 bg-white hover:shadow-md transition duration-300"
            >
              {/* Like & Info Buttons */}
              <div className="absolute top-3 right-3 flex items-center gap-3 z-10">
                <button className="focus:outline-none"></button>
                <div className="relative"></div>
              </div>

              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Product Info */}
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {product.name}
              </h2>
              <p className="text-gray-600 text-lg mb-3">
                {product.price.toLocaleString()} ֏
              </p>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {}}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  −
                </button>
                <span className="w-6 text-center"></span>
                <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"></button>
                <button className="ml-auto bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
                  Ավելացնել զամբյուղում
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

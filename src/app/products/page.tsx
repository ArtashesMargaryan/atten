"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  const [basket, setBasket] = useState<{ [key: number]: number }>({});
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});
  const [hoveredInfo, setHoveredInfo] = useState<number | null>(null);

  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const changeCount = (id: number, delta: number) => {
    setBasket((prev) => {
      const count = Math.max(0, (prev[id] || 0) + delta);
      return { ...prev, [id]: count };
    });
  };

  return (
    <div>
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
                <button
                  onClick={() => toggleLike(product.id)}
                  className="focus:outline-none"
                >
                  {/* {liked[product.id] ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />} */}
                  {/* Replace with icon */}
                </button>
                <div
                  onMouseEnter={() => setHoveredInfo(product.id)}
                  onMouseLeave={() => setHoveredInfo(null)}
                  className="relative"
                >
                  {/* <FaInfoCircle className="text-gray-500 cursor-pointer" /> */}
                  ℹ️ {/* Replace with icon */}
                  {hoveredInfo === product.id && (
                    <div className="absolute right-6 top-0 w-48 p-2 text-sm bg-white border rounded shadow-lg text-gray-700 z-20">
                      {product.info}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Image */}
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
                  onClick={() => changeCount(product.id, -1)}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  −
                </button>
                <span className="w-6 text-center">
                  {basket[product.id] || 0}
                </span>
                <button
                  onClick={() => changeCount(product.id, 1)}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  +
                </button>
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

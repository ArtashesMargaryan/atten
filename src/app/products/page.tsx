"use client";

import React, { useState } from "react";
import ProductCard from "../component/product";
import Header from "../component/header";
import Footer from "../component/footer";

const ProductsPage = () => {
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(100);

  const product = {
    image: "/3301771763.jpg",
    alt: "Beef Chuck Roast",
    rating: 4,
  };

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category and Subcategory Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Meat & Poultry</h1>
          <p className="text-gray-600">Beef / Chuck Roast</p>
        </div>

        <div className="flex">
          {/* Sidebar Filters */}
          <aside className="w-1/4 pr-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Categories</h2>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <input type="checkbox" /> Beef
                </li>
                <li>
                  <input type="checkbox" /> Pork
                </li>
                <li>
                  <input type="checkbox" /> Chicken
                </li>
                <li>
                  <input type="checkbox" /> Sausages
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Price Range</h2>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceFrom}
                  onChange={(e) => setPriceFrom(Number(e.target.value))}
                  placeholder="From"
                  className="w-1/2 px-2 py-1 border rounded text-sm"
                />
                <input
                  type="number"
                  value={priceTo}
                  onChange={(e) => setPriceTo(Number(e.target.value))}
                  placeholder="To"
                  className="w-1/2 px-2 py-1 border rounded text-sm"
                />
              </div>
              <div className="text-sm text-gray-600 mt-1">
                ${priceFrom} - ${priceTo}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">More Filters</h2>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <input type="checkbox" /> USDA Choice
                </li>
                <li>
                  <input type="checkbox" /> Organic
                </li>
                <li>
                  <input type="checkbox" /> Grass-fed
                </li>
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;

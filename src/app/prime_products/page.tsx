"use client";
import React from "react";
import Header from "../component/header";

export default function Prim() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-red-100 p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Փրայմ մսամթերք
          </h1>
          <p className="text-lg md:text-xl">Պրեմիում տեսակի նրբերշիկներ</p>
        </section>

        {/* Product Categories */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Sausages</h2>
            <p>Crafted with premium meats and natural spices.</p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Կիսաֆաբրիկատներ</h2>
            <p>Convenient, delicious, and ready to cook at home.</p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Elite Cuts</h2>
            <p>Top-tier meat cuts selected for gourmet quality.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 p-10 text-center">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>243567665432</p>
          <p>pentagon@gmail.com</p>
        </section>
      </main>
    </div>
  );
}

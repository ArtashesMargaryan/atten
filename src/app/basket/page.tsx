"use client";

import React, { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export default function BasketPage() {
  const [basket, setBasket] = useState<Product[]>([
    { id: 1, name: "Elite Sausage", quantity: 2, price: 1500 },
    { id: 2, name: "Semi-Finished Cutlet", quantity: 1, price: 1200 },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const total = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />
      <main className="min-h-screen p-10 bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Your Basket</h1>

        {basket.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <div className="space-y-6">
            {basket.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>
                    {item.price} ֏ × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}

            <div className="text-right text-xl font-bold">Total: {total} ֏</div>

            <div className="text-right">
              <button className="mt-4">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

"use client";
import React from "react";
import Header from "../component/header";

export default function ContactUsPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-gray-800 px-4 py-8 md:px-10">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Contact Us
          </h1>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-2">
                Phone:{" "}
                <a href="tel:+37493120624" className="text-red-600 font-medium">
                  +374 93 00 99 00
                </a>
              </p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:ateck@atenck.com"
                  className="text-red-600 font-medium"
                >
                  ateck@atenck.com
                </a>
              </p>
              <p className="mb-6">Address: Yerevan, Armenia</p>

              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-2xl hover:scale-110 transition"
                >
                  {/* <FaFacebookF /> */}
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-2xl hover:scale-110 transition"
                >
                  {/* <FaInstagram /> */}
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-2xl hover:scale-110 transition"
                >
                  {/* <FaYoutube /> */}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2"
                  rows={4}
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

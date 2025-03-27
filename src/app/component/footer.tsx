import React from "react";
import { Facebook, Instagram, Linkedin } from "./ui/social";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company Info</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Contact Us</li>
            <li>Help Center / FAQs</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* Categories / Shop */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Garden</li>
            <li>Beauty & Health</li>
            <li>Sports & Outdoors</li>
            <li>See All Categories →</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-lg font-semibold mb-4">My Account</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Sign In / Register</li>
            <li>My Orders</li>
            <li>Wishlist</li>
            <li>Track Order</li>
            <li>Account Settings</li>
          </ul>
        </div>

        {/* Payment & Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Payment & Legal</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Payment Methods</li>
            <li>Delivery Information</li>
            <li>Installment Plans</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <div className="flex space-x-4 mb-4">
            <Facebook />
            <Instagram />
            {/* <Tiktok />
            <Youtube /> */}
            <Linkedin />
          </div>
          <p className="text-sm text-gray-300 mb-2">
            Subscribe for updates, deals & more
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-black text-sm w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-md text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* App Download & Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <a href="#" className="hover:underline">
            Download on the App Store
          </a>
          <a href="#" className="hover:underline">
            Get it on Google Play
          </a>
        </div>
        <p>© 2025 Atenck. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

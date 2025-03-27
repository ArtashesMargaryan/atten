"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const categories = [
    {
      name: "Երշիկեղեն",
      href: "/products/sausage",
      sub: ["Ապխտած", "Պարենային"],
    },
    {
      name: "Կիսաֆաբրիկատներ",
      href: "/products/semi-finished",
      sub: ["Պելմենի", "Կոտլետ"],
    },
    { name: "Սառեցված", href: "/products/frozen", sub: [] },
    { name: "Նորույթներ", href: "/products/new", sub: [] },
  ];

  const navLinks = [
    { name: "Գլխավոր", href: "/" },
    { name: "Աթենք փրայմ", href: "/prime_products" },
    { name: "Իրադարձություններ", href: "/event" },
    { name: "Կապ", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div>
      <header className="w-full bg-white shadow-sm py-4 px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" width={80} height={80} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium ${
                  isActive(link.href)
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer text-gray-700 hover:text-red-600 font-medium">
                <Link
                  href={"/products"}
                  className={`block px-4 py-2 text-sm text-gray-800 hover:text-red-600`}
                >
                  {" "}
                  Մեր տեսականին
                </Link>
              </span>
              {/* <div className="absolute top-full left-0 hidden group-hover:block bg-white border rounded shadow-md z-50 mt-2 min-w-[200px]">
                {categories.map((cat, i) => (
                  <div key={i} className="group relative">
                    <Link
                      href={cat.href}
                      className={`block px-4 py-2 text-sm text-gray-800 hover:text-red-600 ${
                        isActive(cat.href) ? "text-red-600 font-semibold" : ""
                      }`}
                    >
                      {cat.name}
                    </Link>
                    {cat.sub.length > 0 && (
                      <div className="absolute left-full top-0 mt-0 bg-white border rounded shadow-lg min-w-[160px] hidden group-hover:block">
                        {cat.sub.map((subItem, j) => (
                          <Link
                            key={j}
                            href={`${cat.href}/${subItem}`}
                            className="block px-4 py-2 text-sm text-gray-800 hover:text-red-600"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div> */}
            </div>
          </nav>

          {/* Basket + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Որոնել..."
              className="hidden sm:block px-3 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Link href="/myBasket">
              <button className="relative" type="submit">
                <Image
                  src="/shopping-basket.png"
                  alt="Basket"
                  width={24}
                  height={24}
                />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
            </Link>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2 font-medium ${
                  isActive(link.href)
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <details className="px-2">
              <summary className="cursor-pointer text-gray-700 hover:text-red-600 font-medium">
                Մեր տեսականին
              </summary>
              <div className="ml-4 mt-2 space-y-1">
                {categories.map((cat, i) => (
                  <div key={i}>
                    <Link
                      href={cat.href}
                      className={`block text-sm hover:text-red-600 ${
                        isActive(cat.href) ? "text-red-600 font-semibold" : ""
                      }`}
                    >
                      {cat.name}
                    </Link>
                    {cat.sub.length > 0 && (
                      <div className="ml-4 space-y-1">
                        {cat.sub.map((subItem, j) => (
                          <Link
                            key={j}
                            href={`${cat.href}/${subItem}`}
                            className="block text-sm text-gray-700 hover:text-red-600"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </details>
          </div>
        )}
      </header>
    </div>
  );
}

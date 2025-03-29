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
    { name: "Մեր տեսականին", href: "/products" },
    { name: "Աթենք փրայմ", href: "/prime_products" },
    { name: "Իրադարձություններ", href: "/event" },
    { name: "Կապ", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  const [selectedLang, setSelectedLang] = useState("am");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const languages: { [key: string]: { name: string; flag: string } } = {
    am: { name: "Հայերեն", flag: "/icons/64px-Flag_of_Armenia.svg.png" },
    en: {
      name: "English",
      flag: "/icons/64px-Flag_of_the_United_Kingdom_(3-5).svg.png",
    },
    ru: { name: "Русский", flag: "/icons/64px-Flag_of_Russia.svg.webp" },
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLang(lang);
    setShowLangDropdown(false);
    // Optional: apply i18n language switch logic here
  };

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
          </nav>

          {/* Basket + Language + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link href={"/"}>
              <Image
                src="/icons/placeholder.png"
                alt="Map"
                width={20}
                height={20}
                className="mr-2"
              />
            </Link>
            {/* Search */}
            <input
              type="text"
              placeholder="Որոնել..."
              className="hidden sm:block px-3 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Basket */}
            <Link href="/basket">
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

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center space-x-1"
              >
                <Image
                  src={languages[selectedLang].flag}
                  alt={languages[selectedLang].name}
                  width={30}
                  height={16}
                />
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-md z-50">
                  {Object.entries(languages).map(([key, lang]) =>
                    key !== selectedLang ? (
                      <button
                        key={key}
                        onClick={() => toggleLanguage(key)}
                        className="flex items-center px-3 py-2 hover:bg-gray-100 w-full"
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          width={24}
                          height={16}
                        />
                        <span className="ml-2 text-sm">{lang.name}</span>
                      </button>
                    ) : null
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
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

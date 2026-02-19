"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About us" },
    { href: "#packages", label: "Packages" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/Logo/logo.png"
              alt="Manodaya Tours"
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className={`text-xl font-semibold transition-colors ${
              isScrolled ? "text-(--warm-gray-900)" : "text-white"
            }`}>
              Manodaya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? "text-(--warm-gray-600) hover:text-(--primary-dark)" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-(--warm-gray-600) hover:text-(--primary-dark)" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </Link>
            <a
              href="https://wa.me/917310554723?text=Namaste!%20I%20want%20to%20plan%20my%20Yatra."
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 ${
                isScrolled
                  ? "bg-primary text-(--warm-gray-900) hover:bg-(--primary-light)"
                  : "bg-white text-(--warm-gray-900) hover:bg-primary"
              }`}
            >
              Plan Yatra
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-(--warm-gray-900)" : "text-white"
            }`}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 py-6 rounded-2xl ${
            isScrolled ? "bg-white shadow-lg" : "bg-white/10 backdrop-blur-md"
          }`}>
            <nav className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    isScrolled 
                      ? "text-(--warm-gray-700) hover:bg-(--warm-gray-100)" 
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/917310554723"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center bg-primary text-(--warm-gray-900) px-5 py-3 rounded-full font-semibold"
              >
                Plan Your Yatra
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

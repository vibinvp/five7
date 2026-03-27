"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Brands", href: "/brands" },
  { label: "Collections", href: "/collections" },
  { label: "Stores", href: "/stores" },
  { label: "Export", href: "/export" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add subtle shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" aria-label="Five7 — Home">
          <Image
            src="/images/logo/five7-logo.png"
            alt="Five7 Logo"
            width={150}
            height={55}
            priority
            className="h-auto w-[120px] object-contain sm:w-[150px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative font-[family-name:var(--font-body)] text-sm font-medium tracking-wide text-brand-black uppercase transition-colors duration-200 hover:text-brand-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className="flex w-6 flex-col items-end gap-[5px]">
            <span
              className={`block h-[2px] bg-brand-black transition-all duration-300 ease-in-out ${
                mobileMenuOpen
                  ? "w-6 translate-y-[7px] rotate-45"
                  : "w-6"
              }`}
            />
            <span
              className={`block h-[2px] w-4 bg-brand-black transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "scale-0 opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] bg-brand-black transition-all duration-300 ease-in-out ${
                mobileMenuOpen
                  ? "w-6 -translate-y-[7px] -rotate-45"
                  : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[80px] z-40 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-6 pt-16">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`transition-all duration-300 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${index * 60 + 100}ms`
                  : "0ms",
              }}
            >
              <Link
                href={link.href}
                className="font-[family-name:var(--font-body)] text-lg font-medium tracking-widest text-brand-black uppercase transition-colors duration-200 hover:text-brand-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

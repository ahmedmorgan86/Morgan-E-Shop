"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Heart, Menu, X, User, Search } from "lucide-react";
import { CartDrawer } from "./cart-drawer";
import { useWishlist } from "@/contexts/wishlist-context";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Sale", href: "/sale" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { count } = useWishlist();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-white"}`}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-[0.2em] uppercase">
            Morgan
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 relative group ${link.href === "/sale" ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-gray-900"}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${link.href === "/sale" ? "bg-red-500" : "bg-gray-900"}`} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden sm:flex relative p-2.5 rounded-full hover:bg-gray-50 transition-colors"
            >
              <Search className="w-[18px] h-[18px] text-gray-700" strokeWidth={1.5} />
            </button>
            <Link href="/wishlist" className="hidden sm:flex relative p-2.5 rounded-full hover:bg-gray-50 transition-colors">
              <Heart className="w-[18px] h-[18px] text-gray-700" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[9px] font-bold rounded-full flex items-center justify-center">{count}</span>
              )}
            </Link>
            <Link href="/account" className="hidden sm:flex relative p-2.5 rounded-full hover:bg-gray-50 transition-colors">
              <User className="w-[18px] h-[18px] text-gray-700" strokeWidth={1.5} />
            </Link>
            <CartDrawer />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-gray-50 transition-colors"
            >
              {isOpen ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40">
          <div className="mx-auto max-w-[600px] px-5 py-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-black/30 z-40" onClick={() => setIsOpen(false)} />
      )}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out relative z-50 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-5 pb-6 space-y-0.5 bg-white border-t border-gray-100">
          <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`); setIsOpen(false); setSearchQuery(""); } }} className="pt-3 pb-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>
          </form>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 text-[13px] font-medium tracking-[0.08em] uppercase rounded-lg transition-colors ${link.href === "/sale" ? "text-red-500 hover:bg-red-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 mt-2 pt-3 px-4 space-y-2">
            <Link href="/account" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-gray-900">My Account</Link>
            <Link href="/orders" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-gray-900">My Orders</Link>
            <Link href="/wishlist" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-gray-900">Wishlist</Link>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-gray-900">FAQs</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

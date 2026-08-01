"use client";

import { useCart } from "@/contexts/cart-context";
import { X, Minus, Plus, ArrowRight, Tag, Truck, Check } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

const FREE_SHIPPING_THRESHOLD = 100;

export function CartDrawer() {
  const { items, addToCart, removeFromCart, updateQuantity, total, itemCount, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  const shippingProgress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);
  const suggested = products.filter((p) => !items.find((i) => i.id === p.id)).slice(0, 3);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handlePromo = () => {
    if (promoCode.toUpperCase() === "SUMMER" || promoCode.toUpperCase() === "MORGAN10") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
      setPromoApplied(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="relative p-2.5 rounded-full hover:bg-gray-50 transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        {itemCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gray-900 text-[10px] font-semibold text-white animate-scale-in">
            {itemCount}
          </span>
        )}
      </button>

      <div className={`fixed inset-0 z-[100] transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/30" onClick={() => setIsOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-[420px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 shrink-0">
            <h2 className="text-[15px] font-semibold">Shopping Bag ({itemCount})</h2>
            <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-full hover:bg-gray-50 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {items.length > 0 && (
            <div className="px-6 pt-4 pb-3 shrink-0">
              {total >= FREE_SHIPPING_THRESHOLD ? (
                <div className="flex items-center gap-2 text-[12px] text-green-600 font-medium">
                  <Check className="w-4 h-4" />
                  You&apos;ve unlocked free shipping!
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-[12px] text-gray-500 mb-1.5">
                    <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Free shipping</span>
                    <span>${amountToFreeShipping.toFixed(2)} away</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full transition-all duration-500" style={{ width: `${shippingProgress}%` }} />
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                </div>
                <p className="font-medium text-gray-900">Your bag is empty</p>
                <p className="text-[13px] text-gray-500">Add items to get started</p>
                <button onClick={() => setIsOpen(false)} className="mt-2 px-6 py-2.5 bg-gray-900 text-white text-[13px] font-medium rounded-full hover:bg-gray-800 transition-colors">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 animate-fade-in">
                    <div className="relative w-[72px] h-[72px] rounded-xl overflow-hidden bg-gray-100 shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-[13px] text-gray-900 truncate">{item.name}</h3>
                      <p className="text-[12px] text-gray-500 mt-0.5">{item.category}</p>
                      {(item.selectedSize || item.selectedColor) && (
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {[item.selectedColor, item.selectedSize].filter(Boolean).join(" / ")}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 border border-gray-200 rounded-full">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[12px] font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-[13px] font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-gray-600 transition-colors self-start mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                {suggested.length > 0 && (
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">You might also like</p>
                    <div className="space-y-3">
                      {suggested.slice(0, 2).map((p) => (
                        <div key={p.id} className="flex gap-3 items-center">
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                            <Image src={p.image} alt={p.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[12px] font-medium text-gray-900 truncate">{p.name}</p>
                            <p className="text-[12px] text-gray-500">${p.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => { addToCart(p, 1); }}
                            className="text-[11px] font-medium text-gold hover:text-gold-dark transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-5 space-y-3 shrink-0">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => { setPromoCode(e.target.value); setPromoError(""); setPromoApplied(false); }}
                  placeholder="Promo code"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-[13px] focus:outline-none focus:border-gray-400"
                />
                <button onClick={handlePromo} className="px-4 py-2 bg-gray-900 text-white text-[12px] font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>
              {promoApplied && <p className="text-[12px] text-green-600 font-medium">Promo code applied!</p>}
              {promoError && <p className="text-[12px] text-red-500">{promoError}</p>}

              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-500">Subtotal</span>
                <span className="text-[16px] font-semibold">${total.toFixed(2)}</span>
              </div>
              <p className="text-[12px] text-gray-400">Shipping & taxes calculated at checkout</p>
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white text-[13px] font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={clearCart} className="w-full py-2 text-[12px] text-gray-400 hover:text-gray-600 transition-colors">
                Clear Bag
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

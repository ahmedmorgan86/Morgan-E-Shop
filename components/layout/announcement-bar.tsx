"use client";

import { useState, useEffect } from "react";
import { X, Truck, Tag } from "lucide-react";

const promos = [
  "Free Shipping on Orders Over $100",
  "Summer Sale — Up to 30% Off with code SUMMER",
  "New Arrivals Just Dropped — Shop Now",
];

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-gray-950 text-white relative z-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-center h-9 relative">
        <div className="flex items-center gap-2 text-[12px] tracking-wide">
          {current === 0 ? <Truck className="w-3.5 h-3.5" /> : <Tag className="w-3.5 h-3.5" />}
          <span className="transition-opacity duration-300">{promos[current]}</span>
        </div>
        <button onClick={() => setVisible(false)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

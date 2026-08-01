"use client";

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { useWishlist } from "@/contexts/wishlist-context";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { useState } from "react";

const colorMap: Record<string, string> = {
  "Black": "#1a1a1a", "Brown": "#8B4513", "Navy": "#1a1a3e", "Blue": "#2563eb",
  "Rose Gold": "#b76e79", "Silver": "#c0c0c0", "Matte Black": "#2d2d2d", "Titanium": "#878681",
  "Cognac": "#9a4e1c", "Olive": "#556b2f", "Tan": "#d2b48c", "Gold/Green": "#b8860b",
  "Silver/Blue": "#87ceeb", "Black/Grey": "#4a4a4a", "Tortoise": "#8b6914", "Havana": "#6b4226",
  "Gold/Brown": "#b8860b", "Silver/Green": "#6b8e23", "Gloss Tortoise": "#a0522d", "Crystal": "#e8e8e8",
  "Oxblood": "#4a0000", "Sand": "#c2b280", "Dark Brown": "#5c4033", "Burgundy": "#800020",
  "Camel": "#c19a6b", "Charcoal": "#36454f", "White": "#ffffff", "Sky Blue": "#87ceeb",
  "Oatmeal": "#d3c8a5", "White Gold": "#e8e8e8", "Gold": "#b8860b", "Brushed": "#b0b0b0",
  "Polished": "#d4d4d4", "Mixed": "#7c7c7c", "Black/Brown Reversible": "#3d2b1f",
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const inWishlist = isInWishlist(product.id);

  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {product.tag && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`px-2.5 py-1 text-[10px] font-semibold rounded-full uppercase tracking-[0.08em] shadow-sm ${
              product.tag === "Sale" ? "bg-red-500 text-white" : "bg-white text-gray-900"
            }`}>
              {product.tag}
            </span>
          </div>
        )}

        {product.originalPrice && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 bg-red-500 text-white text-[10px] font-semibold rounded-full">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-200" style={{ opacity: isHovered ? 1 : 0 }} />

        <div className="absolute bottom-3 left-3 right-3 z-20 flex gap-2 transition-all duration-250" style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "translateY(0)" : "translateY(12px)" }}>
          <button onClick={(e) => { e.preventDefault(); addToCart(product); }} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-gray-900 text-[12px] font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
          <Link href={`/product/${product.id}`} className="flex items-center justify-center w-10 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <Eye className="w-3.5 h-3.5" />
          </Link>
          <button onClick={(e) => { e.preventDefault(); toggleWishlist(product); }} className="flex items-center justify-center w-10 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <Heart className={`w-3.5 h-3.5 ${inWishlist ? "fill-red-500 text-red-500" : ""}`} />
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-[11px] text-gray-400 uppercase tracking-[0.08em] font-medium">{product.category}</p>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-[14px] font-medium text-gray-900 hover:text-gray-600 transition-colors leading-snug">{product.name}</h3>
        </Link>

        {product.colors && product.colors.length > 1 && (
          <div className="flex items-center gap-1 pt-1">
            {product.colors.slice(0, 5).map((color) => (
              <div
                key={color}
                className="w-3 h-3 rounded-full border border-gray-200"
                style={{ backgroundColor: colorMap[color] || "#ccc" }}
                title={color}
              />
            ))}
            {product.colors.length > 5 && (
              <span className="text-[10px] text-gray-400 ml-0.5">+{product.colors.length - 5}</span>
            )}
          </div>
        )}

        <div className="flex items-center gap-0.5 pt-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-orange-400 text-orange-400" : "text-gray-200"}`} />
          ))}
          <span className="text-[11px] text-gray-400 ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2 pt-0.5">
          <span className="text-[14px] font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-[13px] text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

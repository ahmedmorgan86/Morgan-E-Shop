"use client";

import { useWishlist } from "@/contexts/wishlist-context";
import { ProductCard } from "@/components/product/product-card";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="min-h-screen">
      <section className="relative h-64 hero-gradient flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-500 mt-4">{items.length} {items.length === 1 ? "item" : "items"} saved</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Wishlist" }]} />
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {items.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-lg font-medium">Your wishlist is empty</p>
              <p className="text-sm text-gray-500 mt-2 mb-6">Save items you love for later</p>
              <Link href="/shop" className="px-6 py-3 bg-gold text-white rounded-xl text-sm font-medium hover:bg-gold-dark transition-colors">
                Browse Products
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

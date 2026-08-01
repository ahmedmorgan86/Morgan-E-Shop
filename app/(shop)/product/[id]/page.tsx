"use client";

import { products, getRelatedProducts, getReviewsByProduct } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { useWishlist } from "@/contexts/wishlist-context";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Star, Heart, ShoppingBag, Minus, Plus, Check, Truck, Shield, RotateCcw, Share2, Clock, Package, Copy, CheckCheck, ThumbsUp, X as XIcon } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

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

export default function ProductPage() {
  const { id } = useParams() as { id: string };
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0]);
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", rating: 5, comment: "" });
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!product) notFound();
  const inWishlist = isInWishlist(product.id);
  const relatedProducts = getRelatedProducts(product);
  const productReviews = getReviewsByProduct(product.id);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const deliveryDateStr = deliveryDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[
          { label: "Shop", href: "/shop" },
          { label: product.category, href: `/shop?category=${product.category.toLowerCase()}` },
          { label: product.name },
        ]} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="animate-fade-in">
            <div
              className="relative aspect-square overflow-hidden rounded-3xl bg-gray-100 mb-4 cursor-zoom-in"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                fill
                className={`object-cover transition-transform duration-200 ${isZooming ? "scale-150" : ""}`}
                style={isZooming ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` } : undefined}
                priority
              />
              {product.tag && (
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 bg-zinc-900 text-white text-xs font-semibold rounded-full uppercase tracking-wider">{product.tag}</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square overflow-hidden rounded-xl bg-gray-100 ${selectedImage === i ? "ring-2 ring-gold ring-offset-2" : "opacity-60 hover:opacity-100"} transition-all`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm text-gold uppercase tracking-widest font-medium mb-2">{product.category}</p>
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl lg:text-4xl font-bold">{product.name}</h1>
              <button onClick={handleShare} className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shrink-0" title="Share">
                {copied ? <CheckCheck className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4 text-gray-500" />}
              </button>
            </div>

            <div className="flex items-center gap-3 mt-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="px-2 py-0.5 bg-red-50 text-red-500 text-[12px] font-semibold rounded-full">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {product.inStock ? (
              <div className="flex items-center gap-2 text-[13px] text-green-600 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                In Stock
              </div>
            ) : (
              <div className="flex items-center gap-2 text-[13px] text-red-500 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                Out of Stock
              </div>
            )}

            <p className="text-gray-500 leading-relaxed mb-8">{product.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">Color: <span className="text-gray-500">{selectedColor}</span></p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => {
                    const bgColor = colorMap[color] || "#ccc";
                    const isLight = bgColor === "#ffffff" || bgColor === "#e8e8e8" || bgColor === "#c0c0c0";
                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === color ? "border-gold ring-2 ring-gold ring-offset-2 scale-110" : "border-gray-200 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: bgColor }}
                        title={color}
                      >
                        {selectedColor === color && <Check className={`w-4 h-4 ${isLight ? "text-gray-800" : "text-white"} drop-shadow`} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Size: <span className="text-gray-500">{selectedSize}</span></p>
                  <Link href="/size-guide" className="text-[12px] text-gold underline hover:text-gold-dark">Size Guide</Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                        selectedSize === size ? "bg-zinc-900 text-white border-zinc-900" : "border-gray-200 hover:border-gray-400 text-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-xl">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50 rounded-l-xl transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 font-medium min-w-[60px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50 rounded-r-xl transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => addToCart(product, quantity, { selectedSize, selectedColor })}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingBag className="w-5 h-5" />
                {product.inStock ? "Add to Bag" : "Out of Stock"}
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 border rounded-xl hover:bg-gray-50 transition-colors ${inWishlist ? "bg-red-50 border-red-200" : ""}`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? "fill-red-500 text-red-500" : ""}`} />
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2">
              <div className="flex items-center gap-3 text-[13px]">
                <Truck className="w-4 h-4 text-gold shrink-0" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Estimated delivery: {deliveryDateStr}</span>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <Package className="w-4 h-4 text-gold shrink-0" />
                <span>30-day hassle-free returns</span>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <Shield className="w-4 h-4 text-gold shrink-0" />
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t pt-12">
          <div className="flex gap-8 border-b mb-8">
            <button onClick={() => setActiveTab("details")} className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === "details" ? "border-gold text-gold" : "border-transparent text-gray-500 hover:text-gray-900"}`}>
              Details & Features
            </button>
            <button onClick={() => setActiveTab("reviews")} className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === "reviews" ? "border-gold text-gold" : "border-transparent text-gray-500 hover:text-gray-900"}`}>
              Reviews ({productReviews.length})
            </button>
          </div>

          {activeTab === "details" && (
            <div className="max-w-2xl animate-fade-in">
              <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-3"><Check className="w-4 h-4 text-gold" />{f}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-8 max-w-2xl animate-fade-in">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{productReviews.length} Reviews</h3>
                <button onClick={() => setShowReviewForm(!showReviewForm)} className="px-4 py-2 border border-gray-200 text-[13px] font-medium rounded-full hover:bg-gray-50 transition-colors">
                  {showReviewForm ? "Cancel" : "Write a Review"}
                </button>
              </div>

              {showReviewForm && (
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-[13px] font-medium text-gray-700 block mb-1">Your Name</label>
                    <input type="text" value={reviewForm.name} onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-gray-400" placeholder="John D." />
                  </div>
                  <div>
                    <label className="text-[13px] font-medium text-gray-700 block mb-1">Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((r) => (
                        <button key={r} onClick={() => setReviewForm({ ...reviewForm, rating: r })}>
                          <Star className={`w-6 h-6 ${r <= reviewForm.rating ? "fill-gold text-gold" : "text-gray-300"}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[13px] font-medium text-gray-700 block mb-1">Your Review</label>
                    <textarea value={reviewForm.comment} onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-gray-400 h-24 resize-none" placeholder="Share your experience..." />
                  </div>
                  <button className="px-6 py-2.5 bg-zinc-900 text-white text-[13px] font-medium rounded-full hover:bg-zinc-800 transition-colors">
                    Submit Review
                  </button>
                </div>
              )}

              {productReviews.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review this product!</p>
              ) : (
                productReviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold">{review.avatar}</div>
                      <div>
                        <p className="font-medium text-sm">{review.author}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{review.comment}</p>
                    <button
                      onClick={() => setHelpfulCounts((prev) => ({ ...prev, [review.id]: (prev[review.id] || 0) + 1 }))}
                      className={`flex items-center gap-1.5 mt-3 text-xs transition-colors ${helpfulCounts[review.id] ? "text-gold font-medium" : "text-gray-500 hover:text-gray-900"}`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      Helpful ({review.helpful + (helpfulCounts[review.id] || 0)})
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <XIcon className="w-6 h-6 text-white" />
          </button>
          <div className="relative w-full max-w-3xl aspect-square">
            <Image src={product.images[selectedImage] || product.image} alt={product.name} fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}

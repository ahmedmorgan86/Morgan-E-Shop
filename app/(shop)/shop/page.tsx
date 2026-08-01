"use client";

import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { useState, useMemo } from "react";
import { SlidersHorizontal, X, Grid3X3, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const ITEMS_PER_PAGE = 12;

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Best Rating", value: "rating" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const allCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const [selectedCategory, setSelectedCategory] = useState(() => {
    if (!initialCategory) return "All";
    const match = allCategories.find((c) => c.toLowerCase() === initialCategory.toLowerCase());
    return match || "All";
  });
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [gridCols, setGridCols] = useState<3 | 4>(3);
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = selectedCategory === "All" ? [...products] : products.filter((p) => p.category === selectedCategory);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "newest": result.sort((a, b) => b.reviewCount - a.reviewCount); break;
      case "featured": result.sort((a, b) => (b.tag ? 1 : 0) - (a.tag ? 1 : 0) || b.reviewCount - a.reviewCount); break;
    }
    return result;
  }, [selectedCategory, sortBy, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const activeFilters: { label: string; onClear: () => void }[] = [];
  if (selectedCategory !== "All") activeFilters.push({ label: selectedCategory, onClear: () => { setSelectedCategory("All"); setPage(1); } });
  if (priceRange[1] < 1500) activeFilters.push({ label: `Under $${priceRange[1]}`, onClear: () => { setPriceRange([0, 1500]); setPage(1); } });

  return (
    <div className="min-h-screen">
      <div className="relative h-64 hero-gradient flex items-center justify-center">
        <div className="relative text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900">Shop</h1>
          <p className="text-gray-500 mt-2">Explore our complete collection</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: "Shop" }]} />

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`lg:w-64 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setPage(1); }}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat ? "bg-zinc-900 text-white font-medium" : "hover:bg-gray-100 text-gray-500"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <input type="range" min={0} max={1500} value={priceRange[1]} onChange={(e) => { setPriceRange([0, Number(e.target.value)]); setPage(1); }} className="w-full accent-gold" />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg text-sm">
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
                <p className="text-sm text-gray-500">{filteredProducts.length} products</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  {[3, 4].map((cols) => (
                    <button key={cols} onClick={() => setGridCols(cols as 3 | 4)} className={`p-2 rounded-md transition-colors ${gridCols === cols ? "bg-white shadow-sm" : ""}`}>
                      {cols === 3 ? <Grid3X3 className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 border rounded-lg text-sm bg-white">
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeFilters.map((f) => (
                  <span key={f.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-[12px] font-medium text-gray-700 rounded-full">
                    {f.label}
                    <button onClick={f.onClear} className="hover:text-gray-900"><X className="w-3 h-3" /></button>
                  </span>
                ))}
                <button onClick={() => { setSelectedCategory("All"); setPriceRange([0, 1500]); setPage(1); }} className="text-[12px] text-gold hover:text-gold-dark font-medium">
                  Clear All
                </button>
              </div>
            )}

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-8`}>
              {paginatedProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg font-medium">No products found</p>
                <p className="text-sm text-gray-500 mt-2">Try adjusting your filters</p>
                <button onClick={() => { setSelectedCategory("All"); setPriceRange([0, 1500]); setPage(1); }} className="mt-4 px-6 py-2 bg-zinc-900 text-white text-sm rounded-lg">
                  Reset Filters
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="p-2 border rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button key={p} onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${page === p ? "bg-zinc-900 text-white" : "border hover:bg-gray-50"}`}>
                    {p}
                  </button>
                ))}
                <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="p-2 border rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>}>
      <ShopContent />
    </Suspense>
  );
}

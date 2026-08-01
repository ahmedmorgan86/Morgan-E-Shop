"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { searchProducts } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { FadeIn } from "@/components/ui/fade-in";

function SearchResults() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(initialQuery ? searchProducts(initialQuery) : []);

  useEffect(() => {
    setResults(query ? searchProducts(query) : []);
  }, [query]);

  return (
    <>
      <FadeIn>
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Search Products</h1>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for watches, bags, sunglasses..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-0 transition-colors text-[15px]"
              autoFocus
            />
          </div>
        </div>
      </FadeIn>

      {query && (
        <p className="text-sm text-gray-500 mb-6">
          {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
        </p>
      )}

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {results.map((product, i) => (
            <FadeIn key={product.id} delay={i * 50}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      ) : query ? (
        <FadeIn>
          <div className="text-center py-20">
            <SearchIcon className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">No results found</h2>
            <p className="text-gray-500 mb-6">Try a different search term or browse our categories.</p>
            <Link href="/shop" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
              Browse All Products
            </Link>
          </div>
        </FadeIn>
      ) : (
        <FadeIn>
          <div className="text-center py-20">
            <SearchIcon className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Start typing to search</h2>
            <p className="text-gray-500">Search across all our categories and products.</p>
          </div>
        </FadeIn>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Suspense fallback={
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto" />
          </div>
        }>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}

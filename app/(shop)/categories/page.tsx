"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-64 hero-gradient flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-500 mt-4">Browse our curated collections</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Categories" }]} />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 100}>
                <Link href={`/shop?category=${cat.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{cat.count} Products</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-3 transition-all">
                      Explore Collection <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

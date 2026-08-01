import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Quote, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import { categories, testimonials, getFeaturedProducts, getBestSellers } from "@/data/products";
import { FadeIn } from "@/components/ui/fade-in";

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] hero-gradient overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-300/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-orange-200 mb-8">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-[12px] text-orange-700 font-medium tracking-wide">Summer Collection 2026</span>
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-gray-900 leading-[1.05] tracking-[-0.02em]">
            Brighten Your
            <span className="block text-gradient mt-1">Style.</span>
          </h1>

          <p className="mt-6 text-[16px] text-gray-600 max-w-lg leading-relaxed">
            Discover our curated collection of premium accessories crafted for the modern connoisseur.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold text-white text-[13px] font-semibold rounded-full hover:bg-gold-dark transition-colors shadow-lg shadow-orange-200"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-gray-300 text-gray-700 text-[13px] font-medium rounded-full hover:bg-white/60 transition-colors"
            >
              View Categories
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-10">
            <div>
              <p className="text-3xl font-bold text-gray-900">250+</p>
              <p className="text-[12px] text-gray-500 mt-1">Premium Products</p>
            </div>
            <div className="w-px h-10 bg-gray-300" />
            <div>
              <p className="text-3xl font-bold text-gray-900">50K+</p>
              <p className="text-[12px] text-gray-500 mt-1">Happy Customers</p>
            </div>
            <div className="w-px h-10 bg-gray-300" />
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9</p>
              <p className="text-[12px] text-gray-500 mt-1">Average Rating</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-200/50">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop"
                alt="Premium Watch"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900">Rated #1</p>
                  <p className="text-[11px] text-gray-500">Premium Watches</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-5 shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
              <p className="text-[20px] font-bold text-gray-900">$499</p>
              <p className="text-[11px] text-gray-500">Starting from</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-[12px] uppercase tracking-[0.15em] text-gold font-medium mb-2">Browse By</p>
          <h2 className="text-[32px] font-bold text-gray-900 tracking-[-0.02em]">Shop Categories</h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <FadeIn key={cat.id} delay={i * 80}>
              <Link
                href={`/shop?category=${cat.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-[18px] font-semibold text-white">{cat.name}</h3>
                  <p className="text-[12px] text-white/60 mt-0.5">{cat.count} Products</p>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.15em] text-gold font-medium mb-2">Curated For You</p>
            <h2 className="text-[32px] font-bold text-gray-900 tracking-[-0.02em]">Featured Products</h2>
          </div>
          <Link href="/shop" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-900 hover:text-gray-500 transition-colors">
            View All
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellersSection() {
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.15em] text-gold font-medium mb-2">Most Loved</p>
            <h2 className="text-[32px] font-bold text-gray-900 tracking-[-0.02em]">Best Sellers</h2>
          </div>
          <Link href="/shop" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-900 hover:text-gray-500 transition-colors">
            View All
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn className="relative overflow-hidden rounded-[1.5rem] hero-gradient p-10 md:p-16 border border-orange-100">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-300/20 rounded-full blur-[80px]" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-gray-900 leading-tight tracking-[-0.02em]">
                Summer Sale
                <span className="block text-gradient mt-1">Up to 50% Off</span>
              </h2>
              <p className="mt-4 text-gray-600 text-[15px] max-w-md leading-relaxed">
                Don&apos;t miss our biggest sale of the season. Premium products at unbeatable prices.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 bg-gold text-white text-[13px] font-semibold rounded-full hover:bg-gold-dark transition-colors shadow-lg shadow-orange-200"
              >
                Shop the Sale
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative hidden md:block">
              <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl shadow-orange-200/50">
                <Image
                  src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&auto=format&fit=crop"
                  alt="Sale"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-[12px] uppercase tracking-[0.15em] text-gold font-medium mb-2">Testimonials</p>
          <h2 className="text-[32px] font-bold text-gray-900 tracking-[-0.02em]">What Our Customers Say</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <FadeIn key={t.id} delay={i * 80}>
              <div className="bg-white rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                <Quote className="w-8 h-8 text-orange-200 mb-4" />
                <p className="text-[14px] text-gray-600 leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="w-9 h-9 rounded-full bg-gold text-white flex items-center justify-center text-[11px] font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900">{t.name}</p>
                    <p className="text-[11px] text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn className="relative overflow-hidden rounded-[1.5rem] bg-gold p-10 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
          <div className="relative">
            <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-3 tracking-[-0.02em]">Stay in the Loop</h2>
            <p className="text-white/80 max-w-md mx-auto mb-8 text-[14px]">
              Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/20 border border-white/30 rounded-full text-white text-[14px] placeholder:text-white/60 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button className="px-7 py-3 bg-white text-gold-dark text-[13px] font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function BrandsSection() {
  const brands = [
    { name: "Swiss Made", sub: "Certified" },
    { name: "Italian Leather", sub: "Handcrafted" },
    { name: "Grade 5", sub: "Titanium" },
    { name: "18K Gold", sub: "Plated" },
    { name: "Sapphire", sub: "Crystal" },
    { name: "Organic", sub: "Cotton" },
  ];
  return (
    <section className="py-14 border-t border-gray-100">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="text-center text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-8">Crafted with Premium Materials</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {brands.map((b) => (
            <div key={b.name} className="text-center opacity-40 hover:opacity-70 transition-opacity">
              <p className="text-[15px] font-bold tracking-[0.1em] text-gray-900">{b.name}</p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const posts = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&q=80&auto=format&fit=crop",
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-[12px] uppercase tracking-[0.15em] text-gold font-medium mb-2">@MorganStore</p>
          <h2 className="text-[32px] font-bold text-gray-900 tracking-[-0.02em]">Follow Us on Instagram</h2>
        </FadeIn>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {posts.map((img, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 group cursor-pointer">
                <Image src={img} alt="Instagram post" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-bold">+</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandsSection />
      <CategoriesSection />
      <FeaturedSection />
      <PromoBanner />
      <BestSellersSection />
      <TestimonialsSection />
      <InstagramSection />
      <NewsletterSection />
    </main>
  );
}

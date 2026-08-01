"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const values = [
  { icon: Target, title: "Our Mission", text: "To provide premium quality products that combine timeless design with modern functionality." },
  { icon: Eye, title: "Our Vision", text: "To become the world&apos;s most trusted destination for curated luxury accessories." },
  { icon: Award, title: "Quality First", text: "Every product undergoes rigorous quality testing before reaching our customers." },
];

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", avatar: "AM", bio: "15+ years in luxury retail and product design." },
  { name: "Sarah Chen", role: "Head of Design", avatar: "SC", bio: "Award-winning designer with a passion for minimalism." },
  { name: "James Wilson", role: "Head of Operations", avatar: "JW", bio: "Ensuring seamless delivery to 50+ countries worldwide." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-80 hero-gradient flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop" alt="About" fill className="object-cover opacity-20" />
        </div>
        <div className="relative text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900">About Morgan Store</h1>
          <p className="text-gray-500 mt-4">Crafting excellence since 2018</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3">Our Story</p>
              <h2 className="text-4xl font-bold mb-6">The Art of Fine Living</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>Morgan Store was born from a simple belief: that exceptional products should be accessible to everyone who appreciates quality craftsmanship.</p>
                <p>Founded in 2018, we began as a small boutique in New York City with a carefully curated selection of watches, bags, and accessories. Our founder, Alex Morgan, spent years traveling the world to source the finest materials and partner with master artisans.</p>
                <p>Today, Morgan Store serves over 50,000 customers in 50+ countries, yet we remain committed to the same principles that guided us from the start: quality, authenticity, and exceptional customer experience.</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop" alt="Our Story" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 shadow-2xl">
                  <p className="text-4xl font-bold text-gold">8+</p>
                  <p className="text-sm text-gray-500 mt-1">Years of Excellence</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3">Our Values</p>
            <h2 className="text-4xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-500">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <v.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: v.text }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3">Our Team</p>
            <h2 className="text-4xl font-bold">Meet the People Behind the Brand</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 100}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-3xl font-bold">{member.avatar}</div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gold mt-1 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Elevate Your Style?</h2>
          <p className="text-white/80 mb-8">Discover our curated collection and experience the difference quality makes.</p>
          <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gold-dark font-semibold rounded-xl hover:bg-white/90 transition-colors">
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-900">
        <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop" alt="Register" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-center px-16">
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-4">Join Morgan Store</p>
          <h1 className="text-5xl font-bold text-white leading-tight">Start Your Premium Experience</h1>
          <p className="text-zinc-400 mt-6 max-w-md">Create an account to enjoy exclusive offers, track orders, and build your wishlist.</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-500 mb-8">Fill in the details below to get started</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Alex Johnson"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="email" placeholder="hello@example.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type={showPassword ? "text" : "password"} placeholder="Create a password"
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300 mt-0.5" />
              <span className="text-gray-500">I agree to the <a href="#" className="text-gold hover:underline">Terms of Service</a> and <a href="#" className="text-gold hover:underline">Privacy Policy</a></span>
            </label>

            <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors">
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-gold font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

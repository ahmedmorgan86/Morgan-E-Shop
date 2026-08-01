"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-900">
        <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop" alt="Login" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-center px-16">
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-4">Welcome Back</p>
          <h1 className="text-5xl font-bold text-white leading-tight">Continue Your Journey With Us</h1>
          <p className="text-zinc-400 mt-6 max-w-md">Access your orders, wishlist, and exclusive member benefits.</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-2">Sign In</h2>
          <p className="text-gray-500 mb-8">Enter your credentials to access your account</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
                <input type={showPassword ? "text" : "password"} placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-500">Remember me</span>
              </label>
              <a href="#" className="text-sm text-gold hover:underline">Forgot password?</a>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors">
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 border rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Google</button>
            <button className="py-3 border rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Apple</button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-gold font-medium hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Package, Heart, Settings, LogOut, CreditCard, MapPin, Bell } from "lucide-react";
import { useCart } from "@/contexts/cart-context";

const menuItems: { icon: typeof Package; label: string; href?: string; description?: string; disabled?: boolean }[] = [
  { icon: Package, label: "My Orders", href: "/orders" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: CreditCard, label: "Payment Methods", description: "Manage your cards", disabled: true },
  { icon: MapPin, label: "Addresses", description: "Manage your addresses", disabled: true },
  { icon: Bell, label: "Notifications", description: "Manage notifications", disabled: true },
  { icon: Settings, label: "Settings", description: "Account settings", disabled: true },
];

export default function AccountPage() {
  const router = useRouter();
  const { clearCart } = useCart();

  return (
    <div className="min-h-screen">
      <section className="relative h-64 hero-gradient flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900">My Account</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold text-white flex items-center justify-center text-2xl font-bold">AJ</div>
              <h2 className="font-bold text-lg">Alex Johnson</h2>
              <p className="text-sm text-gray-500">alex@example.com</p>
              <p className="text-xs text-gold mt-2 font-medium">Premium Member</p>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-500">Member since</p>
                <p className="font-medium">January 2024</p>
              </div>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.map((item, i) => (
                item.disabled ? (
                  <div key={item.label} className="animate-fade-in-up flex items-center gap-4 p-6 bg-white rounded-2xl opacity-60 cursor-not-allowed" style={{ animationDelay: `${i * 50}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-500">{item.label}</h3>
                      <p className="text-xs text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ) : (
                  <Link key={item.label} href={item.href!} className="animate-fade-in-up flex items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 group" style={{ animationDelay: `${i * 50}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <item.icon className="w-5 h-5 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{item.label}</h3>
                      <p className="text-xs text-gray-500">Manage your {item.label.toLowerCase()}</p>
                    </div>
                  </Link>
                )
              ))}
              <button
                onClick={() => { clearCart(); router.push("/"); }}
                className="animate-fade-in-up flex items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 text-red-500 group"
                style={{ animationDelay: "350ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <LogOut className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm">Log Out</h3>
                  <p className="text-xs text-gray-500">Sign out of your account</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

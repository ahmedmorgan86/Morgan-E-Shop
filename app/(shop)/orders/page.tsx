"use client";

import { Package, ExternalLink } from "lucide-react";
import { orders } from "@/data/products";
import Image from "next/image";

const statusColors: Record<string, string> = {
  "Delivered": "bg-green-100 text-green-700",
  "In Transit": "bg-blue-100 text-blue-700",
  "Processing": "bg-yellow-100 text-yellow-700",
  "Cancelled": "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-64 hero-gradient flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-500 mt-4">Track and manage your orders</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          {orders.map((order, i) => (
            <div key={order.id} className="animate-fade-in-up bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-bold">{order.id}</h3>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>{order.status}</span>
                  <span className="font-bold">${order.total.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {order.items.map((item) => (
                  <div key={item.name} className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 relative">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="56px" />
                  </div>
                ))}
                <span className="text-sm text-gray-500 ml-2">{order.items.length} item(s)</span>
                {order.trackingNumber && (
                  <a
                    href={`https://www.ups.com/track?tracknum=${order.trackingNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 ml-auto flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Track
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

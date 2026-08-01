import { FadeIn } from "@/components/ui/fade-in";
import { Truck, Clock, Globe, Package } from "lucide-react";

const shippingMethods = [
  { name: "Standard Shipping", time: "3-5 business days", price: "Free over $100 / $8", icon: Truck },
  { name: "Express Shipping", time: "1-2 business days", price: "$15", icon: Clock },
  { name: "International", time: "7-14 business days", price: "Calculated at checkout", icon: Globe },
  { name: "Gift Wrapping", time: "Added to any order", price: "Free", icon: Package },
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Shipping & Returns</h1>
            <p className="text-gray-500 text-[15px]">Fast, reliable shipping with hassle-free returns</p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          <FadeIn delay={100}>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Options</h2>
              <div className="grid gap-3">
                {shippingMethods.map((m) => (
                  <div key={m.name} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                      <m.icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-[15px]">{m.name}</h3>
                      <p className="text-sm text-gray-500">{m.time}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{m.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Order Tracking</h2>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Once your order ships, you&apos;ll receive an email with a tracking number and a link to track your package in real-time. You can also view tracking information from your{" "}
                <a href="/orders" className="text-gray-900 underline">My Orders</a> page.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Return Policy</h2>
              <div className="text-gray-600 text-[14px] leading-relaxed space-y-3">
                <p>We want you to love your purchase. If you&apos;re not completely satisfied, we offer a <strong className="text-gray-900">30-day hassle-free return policy</strong>.</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Items must be in original condition with tags attached</li>
                  <li>Free prepaid return label provided for all domestic returns</li>
                  <li>Refunds processed within 5-7 business days of receiving the return</li>
                  <li>Exchanges available for different sizes or colors</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">International Orders</h2>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                We ship to over 50 countries worldwide. International shipping rates are calculated at checkout based on destination and weight. Please note that customs duties, taxes, and import fees may apply depending on your country&apos;s regulations. These fees are the responsibility of the customer.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

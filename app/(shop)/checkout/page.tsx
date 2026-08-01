"use client";

import { useCart } from "@/contexts/cart-context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CreditCard, Lock, CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const initialData: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  address: "", city: "", state: "", zip: "",
  cardNumber: "", expiry: "", cvv: "",
};

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const shipping = total > 100 ? 0 : 15;
  const tax = total * 0.08;
  const grandTotal = total + shipping + tax;

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateShipping = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.firstName.trim()) e.firstName = "Required";
    if (!data.lastName.trim()) e.lastName = "Required";
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) e.email = "Valid email required";
    if (!data.phone.trim()) e.phone = "Required";
    if (!data.address.trim()) e.address = "Required";
    if (!data.city.trim()) e.city = "Required";
    if (!data.state.trim()) e.state = "Required";
    if (!data.zip.trim()) e.zip = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.cardNumber.trim() || data.cardNumber.replace(/\s/g, "").length < 16) e.cardNumber = "Valid card number required";
    if (!data.expiry.trim() || !/^\d{2}\/\d{2}$/.test(data.expiry)) e.expiry = "MM/YY required";
    if (!data.cvv.trim() || data.cvv.length < 3) e.cvv = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-500 mb-2">Thank you for your purchase.</p>
          <p className="text-sm text-gray-400 mb-8">Order #ORD-{Date.now().toString().slice(-6)}</p>
          <Link href="/shop" className="px-8 py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium mb-4">Your bag is empty</p>
          <Link href="/shop" className="px-6 py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 outline-none text-sm ${errors[field] ? "border-red-400" : ""}`;

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4 mb-8">
              {["Shipping", "Payment", "Review"].map((label, i) => (
                <button key={label} onClick={() => {
                  if (i + 1 < step) setStep(i + 1);
                }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${step === i + 1 ? "bg-zinc-900 text-white" : i + 1 < step ? "bg-green-100 text-green-700" : "bg-white border text-gray-500"}`}>
                  <span className="w-6 h-6 rounded-full bg-current/10 flex items-center justify-center text-xs">{i + 1}</span>
                  {label}
                </button>
              ))}
            </div>

            {step === 1 && (
              <div className="bg-white rounded-2xl p-8 space-y-6 animate-fade-in">
                <h2 className="text-xl font-bold">Shipping Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First Name *</label>
                    <input type="text" value={data.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass("firstName")} />
                    {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last Name *</label>
                    <input type="text" value={data.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass("lastName")} />
                    {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className={inputClass("email")} />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone *</label>
                    <input type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass("phone")} />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1.5">Address *</label>
                    <input type="text" value={data.address} onChange={(e) => update("address", e.target.value)} className={inputClass("address")} />
                    {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">City *</label>
                    <input type="text" value={data.city} onChange={(e) => update("city", e.target.value)} className={inputClass("city")} />
                    {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">State *</label>
                    <input type="text" value={data.state} onChange={(e) => update("state", e.target.value)} className={inputClass("state")} />
                    {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Zip Code *</label>
                    <input type="text" value={data.zip} onChange={(e) => update("zip", e.target.value)} className={inputClass("zip")} />
                    {errors.zip && <p className="text-xs text-red-500 mt-1">{errors.zip}</p>}
                  </div>
                </div>
                <button onClick={() => { if (validateShipping()) setStep(2); }} className="px-8 py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">Continue to Payment</button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-2xl p-8 space-y-6 animate-fade-in">
                <h2 className="text-xl font-bold flex items-center gap-2"><CreditCard className="w-5 h-5" /> Payment Method</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1.5">Card Number *</label>
                    <input type="text" placeholder="1234 5678 9012 3456" value={data.cardNumber} onChange={(e) => update("cardNumber", e.target.value)} className={inputClass("cardNumber")} maxLength={19} />
                    {errors.cardNumber && <p className="text-xs text-red-500 mt-1">{errors.cardNumber}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Expiry Date *</label>
                    <input type="text" placeholder="MM/YY" value={data.expiry} onChange={(e) => update("expiry", e.target.value)} className={inputClass("expiry")} maxLength={5} />
                    {errors.expiry && <p className="text-xs text-red-500 mt-1">{errors.expiry}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">CVV *</label>
                    <input type="text" placeholder="123" value={data.cvv} onChange={(e) => update("cvv", e.target.value)} className={inputClass("cvv")} maxLength={4} />
                    {errors.cvv && <p className="text-xs text-red-500 mt-1">{errors.cvv}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Lock className="w-4 h-4" />
                  <span>Your payment information is encrypted and secure</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="px-6 py-3 border rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Back</button>
                  <button onClick={() => { if (validatePayment()) setStep(3); }} className="px-8 py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">Review Order</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-2xl p-8 space-y-6 animate-fade-in">
                <h2 className="text-xl font-bold">Review Your Order</h2>
                <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-1">
                  <p className="font-medium">Ship to: {data.firstName} {data.lastName}</p>
                  <p className="text-gray-500">{data.address}, {data.city}, {data.state} {data.zip}</p>
                  <p className="text-gray-500">{data.email} | {data.phone}</p>
                </div>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-gray-50">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        {item.selectedSize && <p className="text-xs text-gray-400">Size: {item.selectedSize}</p>}
                        {item.selectedColor && <p className="text-xs text-gray-400">Color: {item.selectedColor}</p>}
                      </div>
                      <p className="font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="px-6 py-3 border rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Back</button>
                  <button onClick={() => { clearCart(); setOrderPlaced(true); }}
                    className="flex-1 py-3.5 bg-gold text-white rounded-xl font-semibold hover:bg-gold-dark transition-colors">
                    Place Order - ${grandTotal.toFixed(2)}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-8 h-fit sticky top-28">
            <h3 className="font-bold mb-6">Order Summary</h3>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-500 truncate pr-4">{item.name} x{item.quantity}</span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span>${total.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span>${grandTotal.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

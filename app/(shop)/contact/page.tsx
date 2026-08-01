"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", details: ["123 Fifth Avenue, Suite 200", "New York, NY 10160"] },
  { icon: Phone, title: "Call Us", details: ["+1 (555) 123-4567", "+1 (555) 987-6543"] },
  { icon: Mail, title: "Email Us", details: ["hello@morganstore.com", "support@morganstore.com"] },
  { icon: Clock, title: "Working Hours", details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"] },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="min-h-screen">
      <section className="relative h-64 hero-gradient flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-500 mt-4">We&apos;d love to hear from you</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="animate-fade-in-up">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={6}
                      className="w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none" placeholder="Tell us more..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={info.title} className="animate-fade-in-up flex gap-4 p-5 rounded-2xl border hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${300 + i * 100}ms` }}>
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.details.map((d) => (
                      <p key={d} className="text-sm text-gray-500">{d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-gray-100 relative overflow-hidden">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-73.99%2C40.74%2C-73.97%2C40.76&layer=mapnik&marker=40.7484%2C-73.9857"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Morgan Store Location"
        />
        <div className="absolute inset-0 pointer-events-none border-y border-gray-200" />
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { faqs } from "@/data/products";
import { FadeIn } from "@/components/ui/fade-in";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-medium text-gray-900 text-[15px] pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 text-[14px] leading-relaxed border-t border-gray-50 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h1>
            <p className="text-gray-500 text-[15px]">Everything you need to know about Morgan Store</p>
          </div>
        </FadeIn>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.id} delay={i * 30}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h2>
            <p className="text-gray-500 text-[14px] mb-6">Our support team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Contact Us
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors">
                <Phone className="w-4 h-4" />
                Call Support
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

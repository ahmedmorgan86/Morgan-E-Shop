import Link from "next/link";
import { Truck, Shield, RotateCcw, CreditCard } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "/shop" },
    { label: "Best Sellers", href: "/shop" },
    { label: "Sale", href: "/sale" },
    { label: "All Products", href: "/shop" },
  ],
  help: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Size Guide", href: "/size-guide" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Sitemap", href: "/sitemap-page" },
  ],
};

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
  { icon: Shield, title: "Secure Payment", desc: "100% protected" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
  { icon: CreditCard, title: "Flexible Payment", desc: "Multiple options" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function PaymentIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    Visa: (
      <svg viewBox="0 0 48 32" className="w-8 h-5">
        <rect width="48" height="32" rx="4" fill="#1a1f71" />
        <text x="24" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">VISA</text>
      </svg>
    ),
    Mastercard: (
      <svg viewBox="0 0 48 32" className="w-8 h-5">
        <rect width="48" height="32" rx="4" fill="#2d2d2d" />
        <circle cx="19" cy="16" r="8" fill="#eb001b" opacity="0.9" />
        <circle cx="29" cy="16" r="8" fill="#f79e1b" opacity="0.9" />
      </svg>
    ),
    PayPal: (
      <svg viewBox="0 0 48 32" className="w-8 h-5">
        <rect width="48" height="32" rx="4" fill="#253b80" />
        <text x="24" y="19" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">PayPal</text>
      </svg>
    ),
    "Apple Pay": (
      <svg viewBox="0 0 48 32" className="w-8 h-5">
        <rect width="48" height="32" rx="4" fill="#1a1a1a" />
        <text x="24" y="20" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">Pay</text>
      </svg>
    ),
  };
  return icons[type] || null;
}

export function Footer() {
  return (
    <>
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center">
                  <f.icon className="w-[18px] h-[18px] text-gray-700" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[13px] text-gray-900">{f.title}</h3>
                  <p className="text-[12px] text-gray-500 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-white">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Link href="/" className="text-xl font-bold tracking-[0.2em] uppercase">
                Morgan
              </Link>
              <p className="mt-4 text-gray-400 text-[14px] leading-relaxed max-w-sm">
                Curating the finest collection of premium accessories and lifestyle products for the modern connoisseur.
              </p>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[13px] uppercase tracking-[0.1em] mb-5 text-white">Shop</h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[14px] text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[13px] uppercase tracking-[0.1em] mb-5 text-white">Help</h3>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[14px] text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[13px] uppercase tracking-[0.1em] mb-5 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[14px] text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-gray-500">&copy; 2026 Morgan. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((card) => (
                <PaymentIcon key={card} type={card} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

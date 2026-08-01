import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Home, ShoppingBag, Tag, Grid3X3, Info, Phone, HelpCircle, Truck, Ruler, FileText, Shield, User, Heart, ClipboardList, LogIn } from "lucide-react";

const sections = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/", icon: Home },
      { label: "Shop All", href: "/shop", icon: ShoppingBag },
      { label: "Sale", href: "/sale", icon: Tag },
      { label: "Categories", href: "/categories", icon: Grid3X3 },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Watches", href: "/shop?category=watches", icon: "⌚" },
      { label: "Bags", href: "/shop?category=bags", icon: "👜" },
      { label: "Sunglasses", href: "/shop?category=sunglasses", icon: "🕶" },
      { label: "Footwear", href: "/shop?category=footwear", icon: "👞" },
      { label: "Jewelry", href: "/shop?category=jewelry", icon: "💎" },
      { label: "Apparel", href: "/shop?category=apparel", icon: "👔" },
      { label: "Accessories", href: "/shop?category=accessories", icon: "⌚" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "My Account", href: "/account", icon: User },
      { label: "My Orders", href: "/orders", icon: ClipboardList },
      { label: "Wishlist", href: "/wishlist", icon: Heart },
      { label: "Login", href: "/login", icon: LogIn },
      { label: "Register", href: "/register", icon: User },
    ],
  },
  {
    title: "Help & Info",
    links: [
      { label: "About Us", href: "/about", icon: Info },
      { label: "Contact Us", href: "/contact", icon: Phone },
      { label: "FAQ", href: "/faq", icon: HelpCircle },
      { label: "Shipping & Returns", href: "/shipping", icon: Truck },
      { label: "Size Guide", href: "/size-guide", icon: Ruler },
      { label: "Terms of Service", href: "/terms", icon: FileText },
      { label: "Privacy Policy", href: "/privacy", icon: Shield },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <FadeIn>
          <Breadcrumbs items={[{ label: "Sitemap" }]} />
          <div className="text-center mb-14">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Site Map</h1>
            <p className="text-gray-500 text-[15px]">Find everything Morgan Store has to offer</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {sections.map((section, si) => (
            <FadeIn key={section.title} delay={si * 80}>
              <div>
                <h2 className="text-[12px] uppercase tracking-[0.15em] text-gold font-semibold mb-4">{section.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      {typeof link.icon === "string" ? (
                        <span className="text-base leading-none">{link.icon}</span>
                      ) : (
                        <link.icon className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors" />
                      )}
                      <span className="text-[14px] text-gray-700 group-hover:text-gray-900 transition-colors">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

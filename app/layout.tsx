import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CartProvider } from "@/contexts/cart-context";
import { WishlistProvider } from "@/contexts/wishlist-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "MORGAN. | Premium Accessories & Lifestyle",
  description: "Discover our curated collection of premium accessories crafted for the modern connoisseur. Timeless design meets exceptional quality.",
  keywords: ["premium", "accessories", "luxury", "watches", "bags", "fashion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
            <ScrollToTop />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

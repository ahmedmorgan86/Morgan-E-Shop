import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Terms of Service | Morgan Store",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8">
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Terms of Service</h1>
            <p className="text-sm text-gray-400">Last updated: July 2026</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="prose prose-gray max-w-none text-[14px] text-gray-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Morgan Store website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Products & Pricing</h2>
              <p>We strive to display accurate product information including prices, descriptions, and images. However, we reserve the right to correct any errors and to change or update information at any time without prior notice. All prices are in USD and applicable taxes are calculated at checkout.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Orders & Payment</h2>
              <p>Placing an order constitutes an offer to purchase. We reserve the right to accept or decline any order. Payment must be received in full before processing. We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Shipping</h2>
              <p>Shipping times are estimates and not guaranteed. We are not responsible for delays caused by carriers, customs, or circumstances beyond our control. Risk of loss transfers to you upon delivery to the carrier.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Returns & Refunds</h2>
              <p>Items may be returned within 30 days of delivery in their original condition. Refunds are processed to the original payment method within 5-7 business days of receiving the return. Certain items may be marked as final sale.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Warranty</h2>
              <p>All products carry a 2-year warranty against manufacturing defects. Premium and Limited Edition items carry a lifetime warranty. Warranty does not cover normal wear, misuse, or unauthorized modifications.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Intellectual Property</h2>
              <p>All content on this website, including images, text, logos, and designs, is the property of Morgan Store and protected by intellectual property laws. Unauthorized use is prohibited.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
              <p>Morgan Store shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the purchase price of the product.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Governing Law</h2>
              <p>These terms are governed by the laws of the United States. Any disputes shall be resolved in the courts of New York, NY.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Contact</h2>
              <p>For questions about these terms, contact us at <a href="mailto:legal@morganstore.com" className="text-gray-900 underline">legal@morganstore.com</a>.</p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

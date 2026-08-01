import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Privacy Policy | Morgan Store",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8">
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: July 2026</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="prose prose-gray max-w-none text-[14px] text-gray-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly: name, email, shipping address, payment information, and any communications you send us. We also automatically collect usage data including IP address, browser type, and browsing activity on our site.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Detect and prevent fraud</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Information Sharing</h2>
              <p>We do not sell your personal information. We share data only with service providers who assist in operations (payment processing, shipping, analytics) and as required by law. All third parties are contractually obligated to protect your data.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Cookies & Tracking</h2>
              <p>We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings. Essential cookies required for site functionality cannot be disabled.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Data Security</h2>
              <p>We implement industry-standard security measures including SSL encryption, secure payment processing (PCI-DSS compliant), and regular security audits. However, no method of transmission is 100% secure.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. You can also opt out of marketing communications at any time. To exercise these rights, contact us at <a href="mailto:privacy@morganstore.com" className="text-gray-900 underline">privacy@morganstore.com</a>.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Data Retention</h2>
              <p>We retain your information for as long as your account is active or as needed to provide services. Order data is retained for 7 years for tax and legal compliance.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Children&apos;s Privacy</h2>
              <p>Our services are not directed to individuals under 18. We do not knowingly collect information from children. If you believe we have collected such information, please contact us immediately.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
              <p>We may update this policy from time to time. We will notify you of material changes via email or a notice on our website.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Contact Us</h2>
              <p>For privacy-related inquiries, contact our Data Protection Officer at <a href="mailto:privacy@morganstore.com" className="text-gray-900 underline">privacy@morganstore.com</a>.</p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

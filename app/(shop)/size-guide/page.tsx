import { FadeIn } from "@/components/ui/fade-in";
import { Ruler, Shirt, Footprints } from "lucide-react";

const footwearSizes = [
  { eu: "40", us: "7", uk: "6.5", cm: "25" },
  { eu: "41", us: "8", uk: "7.5", cm: "26" },
  { eu: "42", us: "9", uk: "8.5", cm: "27" },
  { eu: "43", us: "10", uk: "9.5", cm: "28" },
  { eu: "44", us: "11", uk: "10.5", cm: "29" },
  { eu: "45", us: "12", uk: "11.5", cm: "30" },
];

const apparelSizes = [
  { size: "S", chest: "36-38", waist: "30-32", length: "28" },
  { size: "M", chest: "38-40", waist: "32-34", length: "29" },
  { size: "L", chest: "40-42", waist: "34-36", length: "30" },
  { size: "XL", chest: "42-44", waist: "36-38", length: "31" },
];

const accessorySizes = [
  { size: "S", wrist: "6.5-7", neck: "14-15", belt: "28-30" },
  { size: "M", wrist: "7-7.5", neck: "15-16", belt: "32-34" },
  { size: "L", wrist: "7.5-8", neck: "16-17", belt: "36-38" },
  { size: "XL", wrist: "8-8.5", neck: "17-18", belt: "40-42" },
];

function SizeTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            {headers.map((h) => (
              <th key={h} className="text-left py-3 px-4 font-medium text-gray-500 text-[13px] uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4 text-gray-900">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Size Guide</h1>
            <p className="text-gray-500 text-[15px]">Find your perfect fit with our comprehensive size charts</p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          <FadeIn delay={100}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <Footprints className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Footwear</h2>
              </div>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <SizeTable headers={["EU", "US", "UK", "CM"]} rows={footwearSizes.map((s) => [s.eu, s.us, s.uk, s.cm])} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <Shirt className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Apparel</h2>
              </div>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <SizeTable headers={["Size", "Chest (in)", "Waist (in)", "Length (in)"]} rows={apparelSizes.map((s) => [s.size, s.chest, s.waist, s.length])} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <Ruler className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Accessories</h2>
              </div>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <SizeTable headers={["Size", "Wrist (in)", "Neck (in)", "Belt (in)"]} rows={accessorySizes.map((s) => [s.size, s.wrist, s.neck, s.belt])} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                If you&apos;re between sizes or unsure about fit, our team is happy to help. Contact us at{" "}
                <a href="/contact" className="text-gray-900 underline">support@morganstore.com</a> or call{" "}
                <a href="tel:+1234567890" className="text-gray-900 underline">+1 (234) 567-890</a> for personalized sizing advice.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

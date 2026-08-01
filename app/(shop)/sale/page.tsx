import { getSaleProducts } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { FadeIn } from "@/components/ui/fade-in";
import { Percent } from "lucide-react";

export const metadata = {
  title: "Sale | Morgan Store",
  description: "Shop our exclusive sale collection with premium discounts on luxury accessories.",
};

export default function SalePage() {
  const saleProducts = getSaleProducts();

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-4">
              <Percent className="w-4 h-4" />
              Up to 30% Off
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Sale</h1>
            <p className="text-gray-500 text-[15px]">Premium products at exceptional prices</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {saleProducts.map((product, i) => (
            <FadeIn key={product.id} delay={i * 50}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="text-[120px] font-bold text-gray-100 leading-none">404</p>
        <h1 className="text-2xl font-bold text-gray-900 -mt-4 mb-3">Page Not Found</h1>
        <p className="text-gray-500 text-[15px] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3 bg-gray-900 text-white text-[13px] font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-gray-200 text-gray-900 text-[13px] font-medium rounded-full hover:bg-gray-50 transition-colors"
          >
            <Search className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}

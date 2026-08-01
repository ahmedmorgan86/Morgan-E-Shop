import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/account", "/orders", "/wishlist", "/checkout"],
      },
    ],
    sitemap: "https://morganstore.com/sitemap.xml",
  };
}

import { Product, Review, Category, Order, Testimonial, FAQ } from "@/types";

export const categories: Category[] = [
  { id: "1", name: "Watches", slug: "watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80&auto=format&fit=crop", description: "Precision timepieces for the discerning collector", count: 6 },
  { id: "2", name: "Bags", slug: "bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80&auto=format&fit=crop", description: "Handcrafted leather bags and accessories", count: 6 },
  { id: "3", name: "Sunglasses", slug: "sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80&auto=format&fit=crop", description: "Designer frames with premium UV protection", count: 6 },
  { id: "4", name: "Footwear", slug: "footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop", description: "Handmade shoes crafted from the finest materials", count: 6 },
  { id: "5", name: "Jewelry", slug: "jewelry", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop", description: "Elegant pieces to complete your look", count: 6 },
  { id: "6", name: "Apparel", slug: "apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80&auto=format&fit=crop", description: "Premium clothing for every occasion", count: 6 },
  { id: "7", name: "Accessories", slug: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80&auto=format&fit=crop", description: "Essential accessories for the modern gentleman", count: 6 },
];

export const products: Product[] = [
  // ── WATCHES ──
  {
    id: "1", name: "Royal Chronograph", slug: "royal-chronograph", price: 499, originalPrice: 699,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526045478516-99145907023c?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Watches", tag: "Best Seller", rating: 4.9, reviewCount: 128,
    description: "Crafted with precision and elegance, this chronograph features a Swiss-made movement, sapphire crystal glass, and genuine leather strap. Perfect for the modern gentleman who appreciates timeless design.",
    features: ["Swiss Movement", "Sapphire Crystal", "Water Resistant 50m", "Genuine Leather", "Luminous Hands", "Date Display"],
    inStock: true, colors: ["Black", "Brown", "Navy"], sizes: [],
  },
  {
    id: "2", name: "Automatic Diver Pro", slug: "automatic-diver-pro", price: 389, originalPrice: 520,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Watches", tag: "Popular", rating: 4.7, reviewCount: 156,
    description: "Professional dive watch with 200m water resistance. Features a unidirectional bezel and luminous markers for underwater visibility. Built to withstand extreme conditions.",
    features: ["200m Water Resistant", "Automatic Movement", "Unidirectional Bezel", "Luminous Markers", "Titanium Case", "Ceramic Bezel"],
    inStock: true, colors: ["Black", "Blue"], sizes: [],
  },
  {
    id: "3", name: "Minimalist Dress Watch", slug: "minimalist-dress-watch", price: 275,
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Watches", tag: "Classic", rating: 4.6, reviewCount: 89,
    description: "Clean dial design with Japanese quartz movement. Ultra-thin profile at just 7mm. The perfect everyday watch that transitions seamlessly from office to evening.",
    features: ["Japanese Quartz", "Ultra-Thin 7mm", "Sapphire Crystal", "Italian Leather Strap", "5ATM Water Resistant"],
    inStock: true, colors: ["Rose Gold", "Silver", "Black"], sizes: [],
  },
  {
    id: "4", name: "Titanium Pilot Watch", slug: "titanium-pilot-watch", price: 650, originalPrice: 850,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Watches", tag: "Premium", rating: 4.8, reviewCount: 67,
    description: "Inspired by aviation heritage. Grade 5 titanium case with anti-magnetic shield. Large crown for easy operation with gloves. A pilot's essential.",
    features: ["Grade 5 Titanium", "Anti-Magnetic", "COSC Certified", "Super-LumiNova", "72h Power Reserve"],
    inStock: true, colors: ["Matte Black", "Titanium"], sizes: [],
  },
  {
    id: "39", name: "Smart Casual Hybrid", slug: "smart-casual-hybrid", price: 345,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Watches", tag: "New Arrival", rating: 4.5, reviewCount: 34,
    description: "The perfect blend of traditional watchmaking and smart features. Heart rate monitor, notifications, and 14-day battery life in a classic design.",
    features: ["Hybrid Smart", "Heart Rate Monitor", "14-Day Battery", "Notifications", "5ATM Water Resistant"],
    inStock: true, colors: ["Black", "Navy", "Brown"], sizes: [],
  },
  {
    id: "40", name: "Moonphase Heritage", slug: "moonphase-heritage", price: 895, originalPrice: 1150,
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526045478516-99145907023c?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Watches", tag: "Limited Edition", rating: 4.9, reviewCount: 18,
    description: "Hand-assembled moonphase complication with exhibition caseback. Limited to 500 pieces worldwide. Each watch is individually numbered.",
    features: ["Moonphase Complication", "Exhibition Caseback", "Limited 500pcs", "Hand-Assembled", "Sapphire Crystal"],
    inStock: true, colors: ["Silver"], sizes: [],
  },
  // ── BAGS ──
  {
    id: "5", name: "Executive Leather Briefcase", slug: "executive-leather-briefcase", price: 289, originalPrice: 399,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Bags", tag: "New Arrival", rating: 4.8, reviewCount: 89,
    description: "Handcrafted from premium full-grain leather. Multiple compartments and padded laptop sleeve. Built for the modern professional.",
    features: ["Full-Grain Leather", "Padded Laptop Sleeve", "YKK Zippers", "Lifetime Warranty", "RFID Blocking Pocket"],
    inStock: true, colors: ["Cognac", "Black"], sizes: [],
  },
  {
    id: "6", name: "Canvas Weekender Duffle", slug: "canvas-weekender-duffle", price: 165,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Bags", tag: "Travel Essential", rating: 4.6, reviewCount: 92,
    description: "Heavy-duty waxed canvas with leather accents. Spacious interior with dedicated shoe compartment. Perfect for weekend getaways.",
    features: ["Waxed Canvas", "Leather Accents", "Shoe Compartment", "Detachable Strap", "Water-Resistant"],
    inStock: true, colors: ["Olive", "Navy", "Tan"], sizes: [],
  },
  {
    id: "7", name: "Leather Backpack Elite", slug: "leather-backpack-elite", price: 425, originalPrice: 550,
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Bags", tag: "Premium", rating: 4.9, reviewCount: 72,
    description: "Full-grain vegetable-tanned leather backpack. Handcrafted with brass hardware and padded laptop compartment.",
    features: ["Vegetable-Tanned Leather", "Brass Hardware", "Padded Laptop Compartment", "Handmade", "Ergonomic Straps"],
    inStock: true, colors: ["Brown", "Black"], sizes: [],
  },
  {
    id: "8", name: "Travel Crossbody Sling", slug: "travel-crossbody-sling", price: 95,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Bags", tag: "Trending", rating: 4.5, reviewCount: 134,
    description: "Compact and lightweight sling bag perfect for daily essentials. Water-resistant nylon with anti-theft design.",
    features: ["Water-Resistant Nylon", "Anti-Theft Design", "RFID Pocket", "Adjustable Strap", "Quick Access"],
    inStock: true, colors: ["Black", "Grey", "Olive"], sizes: [],
  },
  {
    id: "41", name: "Leather Messenger Bag", slug: "leather-messenger-bag", price: 235,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Bags", tag: "Best Seller", rating: 4.7, reviewCount: 108,
    description: "Classic messenger silhouette in premium leather. Adjustable shoulder strap with padding. Fits up to 15-inch laptop.",
    features: ["Premium Leather", "15-inch Laptop Fit", "Padded Strap", "Multiple Pockets", "Brass Buckles"],
    inStock: true, colors: ["Black", "Cognac", "Brown"], sizes: [],
  },
  {
    id: "42", name: "Minimalist Card Holder", slug: "minimalist-card-holder", price: 55,
    image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Bags", tag: "Best Value", rating: 4.6, reviewCount: 203,
    description: "Ultra-slim card holder in genuine leather. Holds 6 cards plus folded cash. RFID blocking lining included.",
    features: ["Genuine Leather", "6 Card Slots", "RFID Blocking", "Slim 8mm Profile", "Gift Boxed"],
    inStock: true, colors: ["Black", "Brown", "Navy"], sizes: [],
  },
  // ── SUNGLASSES ──
  {
    id: "9", name: "Aviator Titanium Classic", slug: "aviator-titanium-classic", price: 189,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Sunglasses", tag: "Popular", rating: 4.7, reviewCount: 64,
    description: "Ultra-lightweight titanium frame with polarized lenses providing 100% UV protection. Classic aviator design meets modern technology.",
    features: ["Titanium Frame", "Polarized Lenses", "100% UV Protection", "Anti-Scratch Coating", "Lightweight 12g"],
    inStock: true, colors: ["Gold/Green", "Silver/Blue", "Black/Grey"], sizes: [],
  },
  {
    id: "10", name: "Navigator Titanium", slug: "navigator-titanium", price: 245,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Sunglasses", tag: "Trending", rating: 4.5, reviewCount: 78,
    description: "Bold navigator frame with gradient lenses. Acetate construction with spring hinges for all-day comfort.",
    features: ["Acetate Frame", "Gradient Lenses", "Spring Hinges", "UV400 Protection", "Hand-Polished"],
    inStock: true, colors: ["Tortoise", "Black", "Havana"], sizes: [],
  },
  {
    id: "11", name: "Pilot Gold Edition", slug: "pilot-gold-edition", price: 175, originalPrice: 230,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Sunglasses", tag: "Sale", rating: 4.6, reviewCount: 88,
    description: "Classic pilot shape with premium metal frame. Crystal clear optics with anti-reflective coating.",
    features: ["Metal Frame", "Anti-Reflective", "CR-39 Lenses", "Adjustable Nose Pads", "Gold Accents"],
    inStock: true, colors: ["Gold/Brown", "Silver/Green"], sizes: [],
  },
  {
    id: "12", name: "Wayfarer Premium Acetate", slug: "wayfarer-premium-acetate", price: 210,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Sunglasses", tag: "Classic", rating: 4.4, reviewCount: 56,
    description: "Handmade Italian acetate frame. Polarized CR-39 lenses with anti-reflective coating. Iconic shape, premium execution.",
    features: ["Italian Acetate", "Polarized CR-39", "Anti-Reflective", "Handmade", "Hard Case Included"],
    inStock: true, colors: ["Matte Black", "Gloss Tortoise", "Crystal"], sizes: [],
  },
  {
    id: "43", name: "Sport Wraparound Pro", slug: "sport-wraparound-pro", price: 145,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Sunglasses", tag: "New Arrival", rating: 4.4, reviewCount: 42,
    description: "High-performance sport sunglasses with aerodynamic wraparound design. Shatterproof polycarbonate lenses with venting system.",
    features: ["Polycarbonate Lenses", "Shatterproof", "Non-Slip Grip", "Venting System", "UV400"],
    inStock: true, colors: ["Black", "White/Blue", "Red/Black"], sizes: [],
  },
  {
    id: "44", name: "Retro Round Crystal", slug: "retro-round-crystal", price: 165,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Sunglasses", tag: "Classic", rating: 4.3, reviewCount: 37,
    description: "Vintage-inspired round frames with crystal-clear acetate. Perfect for the retro enthusiast. Includes premium leather case.",
    features: ["Acetate Frame", "CR-39 Lenses", "Vintage Design", "Leather Case", "Cleaning Cloth"],
    inStock: true, colors: ["Crystal", "Black", "Tortoise"], sizes: [],
  },
  // ── FOOTWEAR ──
  {
    id: "13", name: "Heritage Oxford Brogue", slug: "heritage-oxford-brogue", price: 345, originalPrice: 450,
    image: "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Footwear", tag: "Limited Edition", rating: 4.9, reviewCount: 45,
    description: "Handmade Italian leather Oxford shoes with Goodyear welt construction. Each pair is individually crafted by master shoemakers.",
    features: ["Italian Leather", "Goodyear Welt", "Handmade", "Leather Sole", "Cedar Shoe Trees Included"],
    inStock: true, colors: ["Cognac", "Black", "Oxblood"], sizes: ["40", "41", "42", "43", "44", "45"],
  },
  {
    id: "14", name: "Minimalist Suede Sneakers", slug: "minimalist-suede-sneakers", price: 220,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Footwear", tag: "Trending", rating: 4.4, reviewCount: 210,
    description: "Clean, minimalist design with premium suede and leather upper. Memory foam insole for superior comfort.",
    features: ["Suede & Leather", "Memory Foam Insole", "Rubber Outsole", "Minimalist Design", "Breathable Lining"],
    inStock: true, colors: ["White", "Grey", "Black"], sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: "15", name: "Chelsea Suede Boots", slug: "chelsea-suede-boots", price: 295,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Footwear", tag: "New Arrival", rating: 4.7, reviewCount: 78,
    description: "Premium Italian suede Chelsea boots with elastic side panels. Blake stitched for flexibility and easy resoling.",
    features: ["Italian Suede", "Blake Stitch", "Leather Lining", "Elastic Side Panels", "Pull Tab"],
    inStock: true, colors: ["Sand", "Dark Brown", "Black"], sizes: ["40", "41", "42", "43", "44", "45"],
  },
  {
    id: "16", name: "Italian Loafer Tassel", slug: "italian-loafer-tassel", price: 265, originalPrice: 340,
    image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Footwear", tag: "Classic", rating: 4.6, reviewCount: 52,
    description: "Classic tassel loafer in polished calfskin leather. Hand-stitched details with cushioned insole for all-day comfort.",
    features: ["Polished Calfskin", "Hand-Stitched", "Cushioned Insole", "Leather Sole", "Made in Italy"],
    inStock: true, colors: ["Burgundy", "Navy", "Black"], sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: "45", name: "Desert Suede Boots", slug: "desert-suede-boots", price: 235,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Footwear", tag: "Best Seller", rating: 4.8, reviewCount: 167,
    description: "Classic desert boot in premium suede with crepe sole. A timeless wardrobe essential that pairs with everything.",
    features: ["Premium Suede", "Crepe Sole", "Goodyear Welt", "Leather Lining", "Made in England"],
    inStock: true, colors: ["Sand", "Beeswax", "Black"], sizes: ["40", "41", "42", "43", "44", "45"],
  },
  {
    id: "46", name: "Running Performance Elite", slug: "running-performance-elite", price: 175,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Footwear", tag: "New Arrival", rating: 4.5, reviewCount: 89,
    description: "Engineered mesh upper with responsive ZoomX foam. Carbon fiber plate for explosive energy return.",
    features: ["Engineered Mesh", "ZoomX Foam", "Carbon Fiber Plate", "Reflective Details", "6mm Drop"],
    inStock: true, colors: ["Black/White", "Blue/Orange", "Grey/Green"], sizes: ["40", "41", "42", "43", "44", "45"],
  },
  // ── JEWELRY ──
  {
    id: "17", name: "Diamond Tennis Bracelet", slug: "diamond-tennis-bracelet", price: 1299,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Jewelry", tag: "Premium", rating: 5.0, reviewCount: 31,
    description: "Exquisite tennis bracelet featuring brilliant-cut diamonds set in 18K white gold. A timeless piece for special occasions.",
    features: ["18K White Gold", "VS1 Clarity Diamonds", "Adjustable Clasp", "Certificate Included", "Gift Box"],
    inStock: true, colors: ["White Gold"], sizes: ["6.5\"", "7\"", "7.5\"", "8\""],
  },
  {
    id: "18", name: "Gold Cuban Link Chain", slug: "gold-cuban-link-chain", price: 399,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Jewelry", tag: "Best Seller", rating: 4.8, reviewCount: 67,
    description: "18K gold-plated Cuban link chain. Hypoallergenic and tarnish-resistant. A statement piece that elevates any outfit.",
    features: ["18K Gold Plated", "Hypoallergenic", "Tarnish Resistant", "Adjustable Length", "Lobster Clasp"],
    inStock: true, colors: ["Gold", "Silver", "Rose Gold"], sizes: ["18\"", "20\"", "22\"", "24\""],
  },
  {
    id: "19", name: "Signet Ring Sterling Silver", slug: "signet-ring-sterling-silver", price: 145,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Jewelry", tag: "New Arrival", rating: 4.5, reviewCount: 43,
    description: "Classic signet ring in 925 sterling silver. Polished finish with matte option. Can be engraved for personalization.",
    features: ["925 Sterling Silver", "Polished Finish", "Engravable", "Rhodium Plated", "Comfort Fit"],
    inStock: true, colors: ["Silver"], sizes: ["8", "9", "10", "11", "12"],
  },
  {
    id: "20", name: "Leather Bracelet Set", slug: "leather-bracelet-set", price: 65,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Jewelry", tag: "Best Value", rating: 4.3, reviewCount: 98,
    description: "Set of 3 premium leather bracelets with stainless steel hardware. Braided, woven, and smooth textures.",
    features: ["Genuine Leather", "Stainless Steel", "Set of 3", "Adjustable", "Gift Packaging"],
    inStock: true, colors: ["Black", "Brown", "Mixed"], sizes: [],
  },
  {
    id: "47", name: "Sapphire Pendant Necklace", slug: "sapphire-pendant-necklace", price: 575,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Jewelry", tag: "Premium", rating: 4.9, reviewCount: 24,
    description: "Genuine blue sapphire pendant set in 18K white gold with diamond accents. Chain adjustable from 16 to 18 inches.",
    features: ["Genuine Sapphire", "18K White Gold", "Diamond Accents", "Adjustable Chain", "Gift Box"],
    inStock: true, colors: ["White Gold"], sizes: ["16\"", "18\""],
  },
  {
    id: "48", name: "Titanium Wedding Band", slug: "titanium-wedding-band", price: 189,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Jewelry", tag: "Best Seller", rating: 4.7, reviewCount: 156,
    description: "Brushed titanium wedding band with polished beveled edges. Lightweight, hypoallergenic, and scratch-resistant.",
    features: ["Grade 5 Titanium", "Brushed Finish", "Beveled Edges", "Hypoallergenic", "Comfort Fit"],
    inStock: true, colors: ["Brushed", "Polished", "Black"], sizes: ["8", "9", "10", "11", "12", "13"],
  },
  // ── APPAREL ──
  {
    id: "21", name: "Cashmere Overcoat", slug: "cashmere-overcoat", price: 599, originalPrice: 799,
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Apparel", tag: "Premium", rating: 4.8, reviewCount: 56,
    description: "Luxuriously soft 100% cashmere overcoat. Tailored fit with silk-lined interior. The ultimate cold-weather statement piece.",
    features: ["100% Cashmere", "Silk Lined", "Tailored Fit", "Made in Italy", "Horn Buttons"],
    inStock: true, colors: ["Camel", "Charcoal", "Navy"], sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "22", name: "Merino Wool Scarf", slug: "merino-wool-scarf", price: 89,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a93?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Apparel", tag: "Winter Essential", rating: 4.5, reviewCount: 134,
    description: "Ultra-soft 100% Merino wool scarf. Lightweight warmth with a luxurious feel. Available in classic neutral tones.",
    features: ["100% Merino Wool", "Lightweight", "Hypoallergenic", "Classic Design", "Frayed Edges"],
    inStock: true, colors: ["Grey", "Camel", "Navy", "Burgundy"], sizes: [],
  },
  {
    id: "23", name: "Italian Linen Shirt", slug: "italian-linen-shirt", price: 135,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a93?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Apparel", tag: "Summer Pick", rating: 4.6, reviewCount: 76,
    description: "Premium Italian linen shirt. Relaxed fit perfect for warm weather. Mother-of-pearl buttons and spread collar.",
    features: ["Italian Linen", "Relaxed Fit", "Mother-of-Pearl Buttons", "Spread Collar", "French Seams"],
    inStock: true, colors: ["White", "Sky Blue", "Sand"], sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "24", name: "Merino Crew Neck Sweater", slug: "merino-crew-neck-sweater", price: 155, originalPrice: 210,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a93?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a93?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Apparel", tag: "Sale", rating: 4.4, reviewCount: 91,
    description: "Lightweight merino wool crew neck. Perfect layering piece. Ribbed cuffs and hem. Pre-shrunk for lasting fit.",
    features: ["Merino Wool", "Pre-Shrunk", "Ribbed Cuffs", "Flat-Knit Seam", "Machine Washable"],
    inStock: true, colors: ["Black", "Grey", "Navy", "Oatmeal"], sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "49", name: "Tailored Chino Pants", slug: "tailored-chino-pants", price: 115,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a93?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Apparel", tag: "Best Seller", rating: 4.6, reviewCount: 143,
    description: "Premium stretch cotton chinos with a modern tapered fit. Wrinkle-resistant finish for all-day polish.",
    features: ["Stretch Cotton", "Tapered Fit", "Wrinkle-Resistant", "Side Pockets", "Machine Washable"],
    inStock: true, colors: ["Khaki", "Navy", "Olive", "Black"], sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "50", name: "Cashmere V-Neck Pullover", slug: "cashmere-vneck-pullover", price: 245,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a93?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Apparel", tag: "Premium", rating: 4.8, reviewCount: 67,
    description: "Pure Mongolian cashmere V-neck pullover. Incredibly soft with a relaxed fit. Perfect for layering.",
    features: ["100% Cashmere", "Relaxed Fit", "Ribbed Trim", "Hand Wash", "Mongolian Cashmere"],
    inStock: true, colors: ["Camel", "Charcoal", "Cream", "Navy"], sizes: ["S", "M", "L", "XL"],
  },
  // ── ACCESSORIES ──
  {
    id: "25", name: "Slim RFID Wallet", slug: "slim-rfid-wallet", price: 79, originalPrice: 120,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Accessories", tag: "Best Value", rating: 4.6, reviewCount: 203,
    description: "Minimalist design with RFID blocking technology. Holds up to 8 cards and features a hidden cash compartment.",
    features: ["RFID Blocking", "8 Card Slots", "Hidden Cash Compartment", "Genuine Leather", "Slim Profile"],
    inStock: true, colors: ["Black", "Brown", "Navy"], sizes: [],
  },
  {
    id: "26", name: "Titanium Watch Band", slug: "titanium-watch-band", price: 125,
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526045478516-99145907023c?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Accessories", tag: "New Arrival", rating: 4.3, reviewCount: 45,
    description: "Brushed titanium link bracelet with butterfly clasp. Compatible with most 40-44mm watches.",
    features: ["Brushed Titanium", "Butterfly Clasp", "Quick Release", "Adjustable Links", "Tool Included"],
    inStock: true, colors: ["Brushed", "Polished"], sizes: ["40mm", "42mm", "44mm"],
  },
  {
    id: "27", name: "Cashmere Beanie", slug: "cashmere-beanie", price: 75,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Accessories", tag: "Winter Essential", rating: 4.7, reviewCount: 112,
    description: "Pure cashmere beanie. Ribbed knit design with folded brim. Incredibly soft and warm for cold weather.",
    features: ["100% Cashmere", "Ribbed Knit", "Folded Brim", "Unisex Design", "Gift Boxed"],
    inStock: true, colors: ["Black", "Grey", "Camel", "Navy"], sizes: ["One Size"],
  },
  {
    id: "28", name: "Leather Belt Classic", slug: "leather-belt-classic", price: 110,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Accessories", tag: "Classic", rating: 4.5, reviewCount: 167,
    description: "Full-grain leather belt with brushed nickel buckle. Hand-stitched edges. Reversible design for two looks in one.",
    features: ["Full-Grain Leather", "Reversible", "Brushed Nickel Buckle", "Hand-Stitched", "Gift Boxed"],
    inStock: true, colors: ["Black/Brown Reversible"], sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "51", name: "Silk Pocket Square Set", slug: "silk-pocket-square-set", price: 65,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Accessories", tag: "Best Value", rating: 4.4, reviewCount: 87,
    description: "Set of 4 premium silk pocket squares in complementary patterns. Hand-rolled edges for a luxurious finish.",
    features: ["100% Silk", "Set of 4", "Hand-Rolled Edges", "Multiple Patterns", "Gift Boxed"],
    inStock: true, colors: ["Classic Set", "Bold Set", "Neutral Set"], sizes: [],
  },
  {
    id: "52", name: "Leather Passport Cover", slug: "leather-passport-cover", price: 85,
    image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Accessories", tag: "New Arrival", rating: 4.7, reviewCount: 56,
    description: "Premium leather passport cover with card slots and boarding pass pocket. RFID blocking for security.",
    features: ["Genuine Leather", "RFID Blocking", "Card Slots", "Boarding Pass Pocket", "Personalizable"],
    inStock: true, colors: ["Black", "Brown", "Navy"], sizes: [],
  },
];

export const reviews: Review[] = [
  { id: "1", productId: "1", author: "Michael S.", avatar: "MS", rating: 5, date: "2 days ago", comment: "Absolutely stunning quality. The craftsmanship is evident in every detail. Exceeded my expectations.", helpful: 24 },
  { id: "2", productId: "1", author: "Emily R.", avatar: "ER", rating: 5, date: "1 week ago", comment: "Beautiful product with fast shipping. The packaging was also very premium. Highly recommend!", helpful: 18 },
  { id: "3", productId: "1", author: "David K.", avatar: "DK", rating: 4, date: "2 weeks ago", comment: "Great product overall. The materials feel premium and it looks even better in person.", helpful: 12 },
  { id: "4", productId: "1", author: "Sarah M.", avatar: "SM", rating: 5, date: "3 weeks ago", comment: "Bought this as a gift for my husband and he absolutely loves it. Worth every penny.", helpful: 9 },
  { id: "5", productId: "2", author: "James L.", avatar: "JL", rating: 5, date: "3 days ago", comment: "The diver watch is incredible. I've taken it diving multiple times and it performs flawlessly.", helpful: 31 },
  { id: "6", productId: "2", author: "Anna P.", avatar: "AP", rating: 4, date: "1 week ago", comment: "Excellent build quality. The bezel action is smooth and satisfying.", helpful: 15 },
  { id: "7", productId: "3", author: "Tom B.", avatar: "TB", rating: 5, date: "5 days ago", comment: "Incredibly thin and elegant. Perfect for wearing with a suit. Gets compliments constantly.", helpful: 11 },
  { id: "8", productId: "3", author: "Nina K.", avatar: "NK", rating: 4, date: "2 weeks ago", comment: "Beautiful minimalist design. The rose gold color is gorgeous. Only wish it had luminous hands.", helpful: 7 },
  { id: "9", productId: "5", author: "Robert T.", avatar: "RT", rating: 5, date: "5 days ago", comment: "This briefcase is the definition of luxury. The leather smell alone is worth it.", helpful: 22 },
  { id: "10", productId: "5", author: "Lisa W.", avatar: "LW", rating: 5, date: "2 weeks ago", comment: "Bought this for my husband and he carries it every day. Fits his laptop perfectly.", helpful: 17 },
  { id: "11", productId: "6", author: "Mark D.", avatar: "MD", rating: 5, date: "1 week ago", comment: "Perfect size for weekend trips. The shoe compartment is a game changer.", helpful: 14 },
  { id: "12", productId: "7", author: "Jessica H.", avatar: "JH", rating: 5, date: "4 days ago", comment: "The leather quality is outstanding. It's getting better with age. Worth every dollar.", helpful: 20 },
  { id: "13", productId: "8", author: "Carlos M.", avatar: "CM", rating: 4, date: "3 days ago", comment: "Great for travel. Fits passport, phone, and wallet. Very secure.", helpful: 16 },
  { id: "14", productId: "9", author: "Chris B.", avatar: "CB", rating: 5, date: "1 day ago", comment: "Lightest sunglasses I've ever worn. The titanium frame makes a huge difference.", helpful: 28 },
  { id: "15", productId: "10", author: "Diana L.", avatar: "DL", rating: 5, date: "6 days ago", comment: "Bold and stylish. The gradient lenses are beautiful. Very comfortable fit.", helpful: 13 },
  { id: "16", productId: "11", author: "Kevin W.", avatar: "KW", rating: 4, date: "2 weeks ago", comment: "Great value for the price. The gold accents look premium. Solid build quality.", helpful: 9 },
  { id: "17", productId: "12", author: "Amanda R.", avatar: "AR", rating: 5, date: "3 days ago", comment: "The Italian acetate feels incredible. Perfect fit and the polarized lenses are crystal clear.", helpful: 11 },
  { id: "18", productId: "13", author: "Thomas H.", avatar: "TH", rating: 5, date: "4 days ago", comment: "These are the most comfortable dress shoes I own. The Goodyear welt construction is superb.", helpful: 19 },
  { id: "19", productId: "14", author: "Rachel S.", avatar: "RS", rating: 4, date: "1 week ago", comment: "Super comfortable sneakers. The memory foam insole is amazing. True to size.", helpful: 25 },
  { id: "20", productId: "15", author: "Peter J.", avatar: "PJ", rating: 5, date: "5 days ago", comment: "Beautiful Chelsea boots. The suede is incredibly soft. Gets compliments every time.", helpful: 14 },
  { id: "21", productId: "17", author: "Victoria G.", avatar: "VG", rating: 5, date: "1 week ago", comment: "Absolutely breathtaking bracelet. The diamonds sparkle beautifully in any light.", helpful: 14 },
  { id: "22", productId: "18", author: "Derek F.", avatar: "DF", rating: 5, date: "3 days ago", comment: "This chain is heavy and feels premium. The gold plating is holding up perfectly.", helpful: 18 },
  { id: "23", productId: "19", author: "Sophie T.", avatar: "ST", rating: 4, date: "2 weeks ago", comment: "Classic ring with a modern touch. The sterling silver has a beautiful shine.", helpful: 8 },
  { id: "24", productId: "20", author: "Jason M.", avatar: "JM", rating: 5, date: "4 days ago", comment: "Great set of bracelets. The braided one is my favorite. Very comfortable daily wear.", helpful: 12 },
  { id: "25", productId: "21", author: "Andrew N.", avatar: "AN", rating: 5, date: "3 days ago", comment: "This cashmere coat is incredibly warm and lightweight. Perfect for New York winters.", helpful: 21 },
  { id: "26", productId: "23", author: "Maria L.", avatar: "ML", rating: 5, date: "1 week ago", comment: "The linen quality is exceptional. Perfect for summer. Gets softer with each wash.", helpful: 15 },
  { id: "27", productId: "25", author: "Brian K.", avatar: "BK", rating: 5, date: "2 days ago", comment: "Slim yet holds everything I need. The RFID blocking gives peace of mind.", helpful: 19 },
  { id: "28", productId: "27", author: "Emma W.", avatar: "EW", rating: 5, date: "5 days ago", comment: "The softest beanie I've ever owned. The cashmere is worth every penny.", helpful: 13 },
  { id: "29", productId: "28", author: "Daniel R.", avatar: "DR", rating: 4, date: "1 week ago", comment: "Reversible belt is very practical. The leather quality is excellent. Good value.", helpful: 16 },
  { id: "30", productId: "4", author: "Alexander P.", avatar: "AP", rating: 5, date: "2 days ago", comment: "The titanium feels incredibly premium on the wrist. The anti-magnetic feature is a huge plus.", helpful: 11 },
  { id: "31", productId: "39", author: "Olivia M.", avatar: "OM", rating: 4, date: "1 week ago", comment: "Love the hybrid concept. Gets my notifications without being glued to my phone.", helpful: 8 },
  { id: "32", productId: "40", author: "William H.", avatar: "WH", rating: 5, date: "3 days ago", comment: "The moonphase complication is mesmerizing. A true collector's piece.", helpful: 14 },
  { id: "33", productId: "41", author: "Charlotte B.", avatar: "CB", rating: 5, date: "2 days ago", comment: "Perfect size for work. The leather patina is developing beautifully.", helpful: 9 },
  { id: "34", productId: "42", author: "Benjamin L.", avatar: "BL", rating: 4, date: "5 days ago", comment: "Incredibly slim. Fits perfectly in my front pocket. Great everyday carry.", helpful: 12 },
  { id: "35", productId: "45", author: "Grace T.", avatar: "GT", rating: 5, date: "1 week ago", comment: "The crepe sole is so comfortable. These boots go with everything in my wardrobe.", helpful: 17 },
  { id: "36", productId: "46", author: "Ryan K.", avatar: "RK", rating: 4, date: "4 days ago", comment: "Great running shoes. The carbon plate gives amazing energy return.", helpful: 22 },
  { id: "37", productId: "47", author: "Isabella V.", avatar: "IV", rating: 5, date: "2 days ago", comment: "The sapphire is stunning. My wife was speechless when she opened the box.", helpful: 15 },
  { id: "38", productId: "48", author: "Nathan C.", avatar: "NC", rating: 5, date: "1 week ago", comment: "Lightweight and comfortable for everyday wear. No scratching after 6 months.", helpful: 31 },
  { id: "39", productId: "49", author: "Hannah S.", avatar: "HS", rating: 5, date: "3 days ago", comment: "The perfect chinos. Stretchy, comfortable, and look dressy enough for the office.", helpful: 18 },
  { id: "40", productId: "50", author: "Lucas W.", avatar: "LW", rating: 4, date: "5 days ago", comment: "So soft it feels like wearing a cloud. Worth the cashmere price tag.", helpful: 14 },
  { id: "41", productId: "51", author: "Mia D.", avatar: "MD", rating: 5, date: "1 week ago", comment: "Beautiful patterns and the silk quality is outstanding. Great gift idea.", helpful: 9 },
  { id: "42", productId: "52", author: "Ethan J.", avatar: "EJ", rating: 5, date: "4 days ago", comment: "Perfect for travel. The RFID blocking and card slots make it very practical.", helpful: 11 },
  { id: "43", productId: "6", author: "Sophia A.", avatar: "SA", rating: 4, date: "2 weeks ago", comment: "Love the waxed canvas. It looks even better with use. Very durable.", helpful: 10 },
  { id: "44", productId: "16", author: "Daniel F.", avatar: "DF", rating: 5, date: "3 days ago", comment: "These loafers are incredibly comfortable right out of the box. No break-in needed.", helpful: 13 },
  { id: "45", productId: "22", author: "Ava R.", avatar: "AR", rating: 4, date: "1 week ago", comment: "Soft and warm without being bulky. The burgundy color is beautiful.", helpful: 7 },
];

export const orders: Order[] = [
  {
    id: "ORD-2026-001", date: "July 20, 2026", status: "Delivered", total: 578, shippingCost: 0,
    trackingNumber: "1Z999AA10123456784",
    items: [
      { name: "Royal Chronograph", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80&auto=format&fit=crop", price: 499, quantity: 1 },
      { name: "Slim RFID Wallet", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&q=80&auto=format&fit=crop", price: 79, quantity: 1 },
    ],
  },
  {
    id: "ORD-2026-002", date: "July 15, 2026", status: "In Transit", total: 478, shippingCost: 0,
    trackingNumber: "1Z999AA10123456785",
    items: [
      { name: "Executive Leather Briefcase", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=200&q=80&auto=format&fit=crop", price: 289, quantity: 1 },
      { name: "Aviator Titanium Classic", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&q=80&auto=format&fit=crop", price: 189, quantity: 1 },
    ],
  },
  {
    id: "ORD-2026-003", date: "July 8, 2026", status: "Delivered", total: 345, shippingCost: 0,
    items: [
      { name: "Heritage Oxford Brogue", image: "https://images.unsplash.com/photo-1614252369298-4f4559f40d42?w=200&q=80&auto=format&fit=crop", price: 345, quantity: 1 },
    ],
  },
  {
    id: "ORD-2026-004", date: "June 30, 2026", status: "Delivered", total: 763, shippingCost: 0,
    items: [
      { name: "Cashmere Overcoat", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=200&q=80&auto=format&fit=crop", price: 599, quantity: 1 },
      { name: "Merino Wool Scarf", image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=200&q=80&auto=format&fit=crop", price: 89, quantity: 1 },
      { name: "Cashmere Beanie", image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=200&q=80&auto=format&fit=crop", price: 75, quantity: 1 },
    ],
  },
  {
    id: "ORD-2026-005", date: "June 22, 2026", status: "Processing", total: 1299, shippingCost: 0,
    items: [
      { name: "Diamond Tennis Bracelet", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&q=80&auto=format&fit=crop", price: 1299, quantity: 1 },
    ],
  },
  {
    id: "ORD-2026-006", date: "June 15, 2026", status: "Delivered", total: 355, shippingCost: 0,
    items: [
      { name: "Navigator Titanium", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=200&q=80&auto=format&fit=crop", price: 245, quantity: 1 },
      { name: "Leather Belt Classic", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=200&q=80&auto=format&fit=crop", price: 110, quantity: 1 },
    ],
  },
  {
    id: "ORD-2026-007", date: "July 22, 2026", status: "In Transit", total: 410, shippingCost: 0,
    trackingNumber: "1Z999AA10123456786",
    items: [
      { name: "Gold Cuban Link Chain", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&q=80&auto=format&fit=crop", price: 399, quantity: 1 },
    ],
  },
  {
    id: "ORD-2026-008", date: "July 18, 2026", status: "Processing", total: 555, shippingCost: 0,
    items: [
      { name: "Leather Backpack Elite", image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=200&q=80&auto=format&fit=crop", price: 425, quantity: 1 },
      { name: "Cashmere Beanie", image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=200&q=80&auto=format&fit=crop", price: 75, quantity: 1 },
      { name: "Silk Pocket Square Set", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&q=80&auto=format&fit=crop", price: 55, quantity: 1 },
    ],
  },
];

export const testimonials: Testimonial[] = [
  { id: "1", name: "James Mitchell", role: "Entrepreneur", avatar: "JM", rating: 5, text: "Exceptional quality and craftsmanship. The attention to detail in every product is remarkable. Morgan Store has become my go-to for premium accessories." },
  { id: "2", name: "Sarah Chen", role: "Fashion Designer", avatar: "SC", rating: 5, text: "The minimalist aesthetic combined with premium materials is exactly what I was looking for. The leather bag I purchased exceeds all expectations." },
  { id: "3", name: "David Park", role: "Photographer", avatar: "DP", rating: 5, text: "Fast shipping, beautiful packaging, and products that speak for themselves. I've recommended Morgan Store to all my colleagues." },
  { id: "4", name: "Emily Rodriguez", role: "Architect", avatar: "ER", rating: 5, text: "Every piece I've purchased has been outstanding. The quality-to-price ratio is unbeatable in the luxury market." },
  { id: "5", name: "Michael Thompson", role: "Creative Director", avatar: "MT", rating: 5, text: "The attention to design and quality is what sets Morgan Store apart. Their products are conversation starters." },
  { id: "6", name: "Olivia Bennett", role: "Lawyer", avatar: "OB", rating: 5, text: "I bought the Royal Chronograph for my husband's birthday and he hasn't taken it off since. The quality is phenomenal." },
  { id: "7", name: "Daniel Foster", role: "Tech CEO", avatar: "DF", rating: 5, text: "Minimalist design, maximum impact. The Leather Backpack Elite is the perfect companion for business travel." },
  { id: "8", name: "Amara Hassan", role: "Interior Designer", avatar: "AH", rating: 5, text: "The eye for detail at Morgan Store is unmatched. Every product feels curated and intentional. Love the summer collection." },
];

export const faqs: FAQ[] = [
  { id: "1", question: "What is your shipping policy?", answer: "We offer free standard shipping on all orders over $100. Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for $15. International shipping is available to 50+ countries." },
  { id: "2", question: "What is your return policy?", answer: "We offer a 30-day hassle-free return policy. Items must be in their original condition with tags attached. We provide a prepaid return label for all domestic returns." },
  { id: "3", question: "Do your products come with a warranty?", answer: "Yes! All Morgan Store products come with a 2-year warranty against manufacturing defects. Premium and Limited Edition items come with a lifetime warranty." },
  { id: "4", question: "How do I care for my leather products?", answer: "Store leather items in a cool, dry place. Use a leather conditioner every 3-6 months. Avoid exposure to direct sunlight and water. For cleaning, use a damp cloth and let air dry." },
  { id: "5", question: "Do you offer gift wrapping?", answer: "Yes, we offer complimentary gift wrapping on all orders. Simply select the gift wrapping option at checkout and add a personalized message." },
  { id: "6", question: "Are your products authentic?", answer: "Absolutely. All Morgan Store products are designed in-house and crafted by our network of certified artisan workshops. We guarantee 100% authenticity." },
  { id: "7", question: "How can I track my order?", answer: "Once your order ships, you'll receive an email with a tracking number. You can also track your orders from the My Orders page in your account." },
  { id: "8", question: "Do you have a loyalty program?", answer: "Yes! Our Morgan Premium membership offers early access to sales, exclusive products, free express shipping, and birthday rewards. Sign up for free at checkout." },
  { id: "9", question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and Klarna for buy-now-pay-later options." },
  { id: "10", question: "Can I modify or cancel my order?", answer: "Orders can be modified or cancelled within 2 hours of placement. After that, we begin processing for shipment. Contact our support team immediately if you need changes." },
  { id: "11", question: "Do you ship internationally?", answer: "Yes, we ship to over 50 countries worldwide. International shipping rates are calculated at checkout. Customs duties and taxes may apply depending on your country." },
  { id: "12", question: "How do I find my size?", answer: "Each product page includes a detailed size guide. Our footwear uses EU sizing, and our apparel follows standard US sizing. If you're between sizes, we recommend sizing up." },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}

export function getReviewsByProduct(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.tag).slice(0, 8);
}

export function getBestSellers(): Product[] {
  return [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8);
}

export function getSaleProducts(): Product[] {
  return products.filter((p) => p.originalPrice);
}

export function searchProducts(query: string): Product[] {
  const lower = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.tag?.toLowerCase().includes(lower) ||
      p.features.some((f) => f.toLowerCase().includes(lower))
  );
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.tag === "New Arrival");
}

export function getTrendingProducts(): Product[] {
  return products.filter((p) => p.tag === "Trending");
}

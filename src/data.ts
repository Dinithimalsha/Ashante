import { Product } from './types';

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Midnight Elegance Maxi",
    price: 8500,
    formattedPrice: "LKR 8,500",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800&auto=format&fit=crop",
    category: "Dresses",
    isNew: true,
    description: "A stunning midnight blue maxi dress perfect for evening galas. Features a flattering V-neckline and a flowing silhouette.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Rose Blush Midi Dress",
    price: 6200,
    formattedPrice: "LKR 6,200",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    category: "Frocks",
    isNew: true,
    description: "Soft rose blush midi dress with delicate floral patterns. Ideal for daytime events and garden parties.",
    sizes: ["S", "M", "L"]
  },
  {
    id: 3,
    name: "Ivory Lace Frock",
    price: 7900,
    formattedPrice: "LKR 7,900",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?q=80&w=800&auto=format&fit=crop",
    category: "Frocks",
    isNew: true,
    description: "Classic ivory lace frock with intricate detailing. A timeless piece for any special occasion.",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 4,
    name: "Emerald Silk Slip",
    price: 5500,
    formattedPrice: "LKR 5,500",
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=800&auto=format&fit=crop",
    category: "Party Wear",
    isNew: false,
    description: "Luxurious emerald green silk slip dress. Simple, elegant, and effortlessly chic.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Golden Hour Wrap Dress",
    price: 6800,
    formattedPrice: "LKR 6,800",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
    category: "Dresses",
    isNew: false,
    description: "Wrap dress in a warm golden hue. Flattering on all body types, perfect for sunset gatherings.",
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    name: "Classic Noir Shift",
    price: 4900,
    formattedPrice: "LKR 4,900",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=800&auto=format&fit=crop",
    category: "Dresses",
    isNew: false,
    description: "The essential little black dress. A versatile shift dress that transitions seamlessly from day to night.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Crimson Ruffle Gown",
    price: 9500,
    formattedPrice: "LKR 9,500",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
    category: "Party Wear",
    isNew: true,
    description: "Make a statement in this bold crimson gown featuring cascading ruffles and a fitted bodice.",
    sizes: ["S", "M", "L"]
  },
  {
    id: 8,
    name: "Sapphire Pleated Midi",
    price: 7200,
    formattedPrice: "LKR 7,200",
    image: "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=800&auto=format&fit=crop",
    category: "Frocks",
    isNew: false,
    description: "Elegant sapphire blue midi dress with fine pleats. A sophisticated choice for office wear or dinners.",
    sizes: ["XS", "S", "M"]
  }
];

export const CATEGORIES = [
  { name: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop" },
  { name: "Frocks", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Party Wear", image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=800&auto=format&fit=crop" },
  { name: "New Arrivals", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop" }
];

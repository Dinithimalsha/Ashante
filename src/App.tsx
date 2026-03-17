/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingBag, Menu, Search, Star, MessageCircle, MapPin, Clock, Truck, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { useAppContext } from './AppContext';
import { ShopView } from './components/ShopView';
import { ProductView } from './components/ProductView';
import { CartSidebar } from './components/CartSidebar';
import { CheckoutView } from './components/CheckoutView';

const NEW_ARRIVALS = [
  {
    id: 1,
    name: "Midnight Elegance Maxi",
    price: "LKR 8,500",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    name: "Rose Blush Midi Dress",
    price: "LKR 6,200",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 3,
    name: "Ivory Lace Frock",
    price: "LKR 7,900",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 4,
    name: "Emerald Silk Slip",
    price: "LKR 5,500",
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=800&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 5,
    name: "Golden Hour Wrap Dress",
    price: "LKR 6,800",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 6,
    name: "Classic Noir Shift",
    price: "LKR 4,900",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=800&auto=format&fit=crop",
    isNew: false,
  }
];

const CATEGORIES = [
  { name: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop" },
  { name: "Frocks", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Party Wear", image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=800&auto=format&fit=crop" },
  { name: "New Arrivals", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop" }
];

const REVIEWS = [
  {
    id: 1,
    name: "Dinithi M.",
    rating: 5,
    text: "Absolutely love the dress! The material is so soft and it fits perfectly. Fast delivery to Kandy too.",
  },
  {
    id: 2,
    name: "Sarah F.",
    rating: 5,
    text: "Ordered via WhatsApp and the customer service was amazing. The frock looks exactly like the picture.",
  },
  {
    id: 3,
    name: "Kavindi P.",
    rating: 5,
    text: "My go-to place for party wear now. The quality is unmatched for the price. Highly recommend!",
  }
];

const INSTA_IMAGES = [
  "https://images.unsplash.com/photo-1515347619145-8b389bf44743?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434389678232-04ce6c50a807?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484328256245-34b71758c30b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=400&auto=format&fit=crop"
];

const orderViaWhatsApp = (productName: string) => {
  const message = `Hi! I'd like to order ${productName} in size [Size].`;
  window.open(`https://wa.me/94722282417?text=${encodeURIComponent(message)}`, '_blank');
};

const generalWhatsApp = () => {
  const message = `Hi Ashante! I'd like to order...`;
  window.open(`https://wa.me/94722282417?text=${encodeURIComponent(message)}`, '_blank');
};

const Navbar = () => {
  const { setCurrentView, setIsCartOpen, cart, setSelectedCategory } = useAppContext();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-[#f9f5f0]/90 backdrop-blur-md border-b border-[#b8965a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button className="p-2 -ml-2 mr-2 md:hidden text-[#1a1411]">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setCurrentView('shop')} className="text-[#1a1411] hover:text-[#b8965a] transition-colors text-sm uppercase tracking-widest font-medium">Shop</button>
              <button onClick={() => { setSelectedCategory('New Arrivals'); setCurrentView('shop'); }} className="text-[#1a1411] hover:text-[#b8965a] transition-colors text-sm uppercase tracking-widest font-medium">New Arrivals</button>
              <button onClick={() => setCurrentView('home')} className="text-[#1a1411] hover:text-[#b8965a] transition-colors text-sm uppercase tracking-widest font-medium">Lookbook</button>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-center">
            <button onClick={() => setCurrentView('home')} className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1a1411]">
              Ashante
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => setCurrentView('shop')} className="p-2 text-[#1a1411] hover:text-[#b8965a] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsCartOpen(true)} className="p-2 text-[#1a1411] hover:text-[#b8965a] transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#b8965a] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { setCurrentView, setSelectedCategory } = useAppContext();
  
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full bg-[#1a1411] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
        alt="Elegant woman in dress" 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1411]/80 via-transparent to-transparent"></div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-[#f9f5f0] mb-6"
        >
          Stay Classy.<br />Shop Ashante.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#f9f5f0]/90 mb-10 max-w-2xl font-light"
        >
          New arrivals every week &middot; Fast delivery across Sri Lanka.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button onClick={() => setCurrentView('shop')} className="px-8 py-4 bg-[#b8965a] text-[#f9f5f0] hover:bg-[#b8965a]/90 transition-colors uppercase tracking-widest text-sm font-semibold">
            Shop Now
          </button>
          <button onClick={() => { setSelectedCategory('New Arrivals'); setCurrentView('shop'); }} className="px-8 py-4 bg-transparent border border-[#f9f5f0] text-[#f9f5f0] hover:bg-[#f9f5f0] hover:text-[#1a1411] transition-colors uppercase tracking-widest text-sm font-semibold">
            View New Arrivals
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const SocialProofBar = () => (
  <div className="bg-[#f5e6d0] py-4 border-y border-[#b8965a]/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#b8965a]/20">
        <div className="flex flex-col items-center justify-center px-2">
          <div className="flex items-center text-[#b8965a] mb-1">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-[#1a1411]">96% Recommended</span>
        </div>
        <div className="flex flex-col items-center justify-center px-2">
          <CheckCircle className="w-5 h-5 text-[#b8965a] mb-1" />
          <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-[#1a1411]">281+ Happy Customers</span>
        </div>
        <div className="flex flex-col items-center justify-center px-2">
          <Truck className="w-5 h-5 text-[#b8965a] mb-1" />
          <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-[#1a1411]">Fast Delivery (LK)</span>
        </div>
        <div className="flex flex-col items-center justify-center px-2">
          <Clock className="w-5 h-5 text-[#b8965a] mb-1" />
          <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-[#1a1411]">Always Open Online</span>
        </div>
      </div>
    </div>
  </div>
);

const CategoryStrip = () => {
  const { setCurrentView, setSelectedCategory } = useAppContext();
  
  return (
    <section className="py-16 md:py-24 bg-[#f9f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => { setSelectedCategory(cat.name); setCurrentView('shop'); }}
              className="group relative aspect-[3/4] overflow-hidden block w-full text-left"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#1a1411]/20 group-hover:bg-[#b8965a]/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-[#f9f5f0] text-2xl md:text-3xl font-medium tracking-wide drop-shadow-md">
                  {cat.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewArrivals = () => {
  const { setCurrentView, setSelectedProduct } = useAppContext();
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#1a1411] mb-4">Just In</h2>
          <p className="text-[#1a1411]/70 max-w-2xl mx-auto">Discover our latest collection of elegant dresses and frocks, designed for the modern Sri Lankan woman.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {NEW_ARRIVALS.map((product) => (
            <div key={product.id} className="group flex flex-col cursor-pointer" onClick={() => { setSelectedProduct(product as any); setCurrentView('product'); }}>
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#f9f5f0]">
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10 bg-[#1a1411] text-[#f9f5f0] text-xs font-bold uppercase tracking-wider py-1 px-3">
                    New Arrival
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#1a1411]/80 to-transparent flex justify-center">
                  <button 
                    onClick={(e) => { e.stopPropagation(); orderViaWhatsApp(product.name); }}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 flex items-center justify-center gap-2 font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order via WhatsApp
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-medium text-[#1a1411] mb-1">{product.name}</h3>
                <p className="text-[#b8965a] font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button onClick={() => setCurrentView('shop')} className="px-8 py-4 border border-[#1a1411] text-[#1a1411] hover:bg-[#1a1411] hover:text-[#f9f5f0] transition-colors uppercase tracking-widest text-sm font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

const Lookbook = () => (
  <section className="py-16 md:py-24 bg-[#e8c4c4]/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl text-[#1a1411] mb-4">The Lookbook</h2>
          <p className="text-[#1a1411]/70 max-w-xl">Curated styles for weddings, Poya, and office wear. Find your perfect occasion outfit.</p>
        </div>
        <button className="px-6 py-3 border-b border-[#1a1411] text-[#1a1411] hover:text-[#b8965a] hover:border-[#b8965a] transition-colors uppercase tracking-widest text-sm font-semibold">
          Explore Lookbook
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="aspect-[4/5] relative group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop" alt="Look 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[#1a1411]/10 group-hover:bg-[#1a1411]/30 transition-colors duration-300"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-white/90 backdrop-blur text-[#1a1411] text-xs font-bold uppercase tracking-wider py-1 px-3 mb-3 inline-block">Evening Wear</span>
            <h3 className="text-white text-2xl font-medium drop-shadow-md">The Gala Edit</h3>
          </div>
        </div>
        <div className="aspect-[4/5] relative group overflow-hidden md:mt-12">
          <img src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop" alt="Look 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[#1a1411]/10 group-hover:bg-[#1a1411]/30 transition-colors duration-300"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-white/90 backdrop-blur text-[#1a1411] text-xs font-bold uppercase tracking-wider py-1 px-3 mb-3 inline-block">Office Chic</span>
            <h3 className="text-white text-2xl font-medium drop-shadow-md">Power Dressing</h3>
          </div>
        </div>
        <div className="aspect-[4/5] relative group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1485230895905-ef08ba37e517?q=80&w=800&auto=format&fit=crop" alt="Look 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[#1a1411]/10 group-hover:bg-[#1a1411]/30 transition-colors duration-300"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-white/90 backdrop-blur text-[#1a1411] text-xs font-bold uppercase tracking-wider py-1 px-3 mb-3 inline-block">Weekend</span>
            <h3 className="text-white text-2xl font-medium drop-shadow-md">Sunday Brunch</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section className="py-16 md:py-24 bg-[#1a1411] text-[#f9f5f0]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Loved by 281+ Customers</h2>
        <div className="flex items-center justify-center gap-2 text-[#b8965a]">
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
        </div>
        <p className="mt-4 text-[#f9f5f0]/70">96% Recommendation Rate on Facebook</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <div key={review.id} className="bg-white/5 p-8 border border-white/10 flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-[#b8965a] mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-lg font-serif italic mb-6 flex-grow">"{review.text}"</p>
            <p className="text-sm font-bold uppercase tracking-wider text-[#b8965a]">{review.name}</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-[#f9f5f0]/50">
              <CheckCircle className="w-3 h-3" />
              Verified Buyer
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InstagramFeed = () => (
  <section className="py-16 bg-[#f9f5f0]">
    <div className="text-center mb-10">
      <a href="https://instagram.com/ashantesl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1a1411] hover:text-[#b8965a] transition-colors">
        <Instagram className="w-6 h-6" />
        <h2 className="text-2xl md:text-3xl font-medium tracking-wide">@ashantesl</h2>
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
      {INSTA_IMAGES.map((img, idx) => (
        <a key={idx} href="https://instagram.com/ashantesl" target="_blank" rel="noopener noreferrer" className="relative aspect-square group overflow-hidden block">
          <img src={img} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[#1a1411]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Instagram className="w-8 h-8 text-white" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

const Footer = () => {
  const { setCurrentView, setSelectedCategory } = useAppContext();
  
  return (
    <footer className="bg-[#1a1411] text-[#f9f5f0] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">Ashante</h3>
            <p className="text-[#f9f5f0]/70 mb-6 max-w-xs">
              High-quality women's clothing, dresses, and frocks. Stay Classy with our curated collections.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/ashantelifestyle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b8965a] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ashantesl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b8965a] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#b8965a]">Shop</h4>
            <ul className="space-y-4 text-[#f9f5f0]/70">
              <li><button onClick={() => setCurrentView('shop')} className="hover:text-[#b8965a] transition-colors">All Products</button></li>
              <li><button onClick={() => { setSelectedCategory('New Arrivals'); setCurrentView('shop'); }} className="hover:text-[#b8965a] transition-colors">New Arrivals</button></li>
              <li><button onClick={() => { setSelectedCategory('Dresses'); setCurrentView('shop'); }} className="hover:text-[#b8965a] transition-colors">Dresses</button></li>
              <li><button onClick={() => { setSelectedCategory('Frocks'); setCurrentView('shop'); }} className="hover:text-[#b8965a] transition-colors">Frocks</button></li>
              <li><button onClick={() => { setSelectedCategory('Party Wear'); setCurrentView('shop'); }} className="hover:text-[#b8965a] transition-colors">Party Wear</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#b8965a]">Help</h4>
            <ul className="space-y-4 text-[#f9f5f0]/70">
              <li><button onClick={() => generalWhatsApp()} className="hover:text-[#b8965a] transition-colors">Order via WhatsApp</button></li>
              <li><a href="#" className="hover:text-[#b8965a] transition-colors">Delivery Information</a></li>
              <li><a href="#" className="hover:text-[#b8965a] transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-[#b8965a] transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-[#b8965a] transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#b8965a]">Visit Us</h4>
            <ul className="space-y-4 text-[#f9f5f0]/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b8965a] shrink-0 mt-0.5" />
                <span>292, Prison Road,<br />Kadawatha, Colombo,<br />Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#b8965a] shrink-0" />
                <span>+94 72 228 2417</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f9f5f0]/50">
          <p>&copy; {new Date().getFullYear()} Ashante Lifestyle. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#f9f5f0] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#f9f5f0] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => (
  <button 
    onClick={generalWhatsApp}
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    aria-label="Order via WhatsApp"
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-white text-[#1a1411] text-sm font-medium py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
      Order via WhatsApp
    </span>
  </button>
);

export default function App() {
  const { currentView } = useAppContext();

  return (
    <div className="min-h-screen bg-[#f9f5f0] font-sans text-[#1a1411] selection:bg-[#b8965a]/30">
      <Navbar />
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <SocialProofBar />
            <CategoryStrip />
            <NewArrivals />
            <Lookbook />
            <Reviews />
            <InstagramFeed />
          </>
        )}
        {currentView === 'shop' && <ShopView />}
        {currentView === 'product' && <ProductView />}
        {currentView === 'checkout' && <CheckoutView />}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CartSidebar />
    </div>
  );
}

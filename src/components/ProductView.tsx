import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

export const ProductView = () => {
  const { selectedProduct, setCurrentView, addToCart } = useAppContext();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) {
    setCurrentView('shop');
    return null;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(selectedProduct, selectedSize, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <button 
        onClick={() => setCurrentView('shop')}
        className="flex items-center text-gray-500 hover:text-[#1a1411] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Shop
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-[3/4] bg-[#f9f5f0] overflow-hidden">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-col">
          {selectedProduct.isNew && (
            <span className="text-[#b8965a] text-sm font-bold uppercase tracking-wider mb-2">New Arrival</span>
          )}
          <h1 className="text-4xl font-serif text-[#1a1411] mb-2">{selectedProduct.name}</h1>
          <p className="text-2xl text-[#b8965a] mb-6">{selectedProduct.formattedPrice}</p>
          
          <div className="prose prose-sm text-gray-600 mb-8">
            <p>{selectedProduct.description}</p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1411]">Size</h3>
              <button className="text-sm text-gray-500 underline">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {selectedProduct.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border transition-colors ${
                    selectedSize === size 
                      ? 'border-[#1a1411] bg-[#1a1411] text-white' 
                      : 'border-gray-300 text-[#1a1411] hover:border-[#1a1411]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1411] mb-4">Quantity</h3>
            <div className="flex items-center border border-gray-300 w-32">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#1a1411]"
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#1a1411]"
              >
                +
              </button>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#1a1411] text-white py-4 flex items-center justify-center gap-2 hover:bg-[#1a1411]/90 transition-colors uppercase tracking-widest text-sm font-semibold mb-8"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center text-center">
              <Truck className="w-6 h-6 text-[#b8965a] mb-2" />
              <span className="text-xs font-medium text-gray-600">Island-wide Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <RefreshCw className="w-6 h-6 text-[#b8965a] mb-2" />
              <span className="text-xs font-medium text-gray-600">7-Day Returns</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-6 h-6 text-[#b8965a] mb-2" />
              <span className="text-xs font-medium text-gray-600">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

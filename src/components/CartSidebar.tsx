import React from 'react';
import { useAppContext } from '../AppContext';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, setCurrentView } = useAppContext();

  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-serif text-[#1a1411] flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-[#1a1411] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-gray-500">Your cart is currently empty.</p>
              <button 
                onClick={() => {
                  setIsCartOpen(false);
                  setCurrentView('shop');
                }}
                className="px-6 py-3 bg-[#1a1411] text-white hover:bg-[#1a1411]/90 uppercase tracking-widest text-sm font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.product.id}-${item.size}-${index}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-gray-100 shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#1a1411]">{item.product.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex justify-between items-end">
                      <div className="flex items-center border border-gray-200">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1a1411]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1a1411]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-semibold text-[#b8965a]">LKR {(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-xl font-bold text-[#1a1411]">LKR {cartTotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
            <button 
              onClick={() => {
                setIsCartOpen(false);
                setCurrentView('checkout');
              }}
              className="w-full bg-[#1a1411] text-white py-4 flex items-center justify-center gap-2 hover:bg-[#1a1411]/90 transition-colors uppercase tracking-widest text-sm font-semibold"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

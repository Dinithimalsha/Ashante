import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import { CheckCircle, ArrowLeft, ShieldCheck } from 'lucide-react';

export const CheckoutView = () => {
  const { cart, clearCart, setCurrentView } = useAppContext();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = 450;
  const finalTotal = cartTotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center min-h-screen flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-4xl font-serif text-[#1a1411] mb-4">Order Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your order number is #{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}.
          We'll send you an email confirmation shortly.
        </p>
        <button 
          onClick={() => setCurrentView('home')}
          className="px-8 py-4 bg-[#1a1411] text-white hover:bg-[#1a1411]/90 uppercase tracking-widest text-sm font-semibold"
        >
          Return to Home
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    setCurrentView('shop');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <button 
        onClick={() => setCurrentView('shop')}
        className="flex items-center text-gray-500 hover:text-[#1a1411] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Shop
      </button>

      <h1 className="text-4xl font-serif text-[#1a1411] mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-xl font-medium text-[#1a1411] mb-4 pb-2 border-b border-gray-200">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#b8965a]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#b8965a]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#b8965a]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#b8965a]" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1411] mb-4 pb-2 border-b border-gray-200">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#b8965a]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#b8965a]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input required type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#b8965a]" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1411] mb-4 pb-2 border-b border-gray-200">Payment Method</h2>
              <div className="bg-gray-50 p-4 border border-gray-200 rounded flex items-center gap-3">
                <input type="radio" id="cod" name="payment" defaultChecked className="w-4 h-4 text-[#b8965a] focus:ring-[#b8965a]" />
                <label htmlFor="cod" className="font-medium text-gray-700">Cash on Delivery (COD)</label>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-gray-50 p-6 border border-gray-200 sticky top-24">
            <h2 className="text-xl font-medium text-[#1a1411] mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-16 h-20 bg-gray-200 shrink-0 relative">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#1a1411]">{item.product.name}</h4>
                    <p className="text-xs text-gray-500">Size: {item.size}</p>
                    <p className="text-sm font-medium text-[#b8965a] mt-1">LKR {(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-200 mb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>LKR {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>LKR {shipping.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200 mb-8">
              <span className="text-lg font-medium text-[#1a1411]">Total</span>
              <span className="text-2xl font-bold text-[#1a1411]">LKR {finalTotal.toLocaleString()}</span>
            </div>

            <button 
              type="submit"
              form="checkout-form"
              className="w-full bg-[#1a1411] text-white py-4 flex items-center justify-center gap-2 hover:bg-[#1a1411]/90 transition-colors uppercase tracking-widest text-sm font-semibold"
            >
              <ShieldCheck className="w-5 h-5" />
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

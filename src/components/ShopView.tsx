import React from 'react';
import { useAppContext } from '../AppContext';
import { ALL_PRODUCTS, CATEGORIES } from '../data';
import { Search, X } from 'lucide-react';

export const ShopView = () => {
  const { 
    searchQuery, setSearchQuery, 
    selectedCategory, setSelectedCategory, 
    setSelectedProduct, setCurrentView 
  } = useAppContext();

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-serif text-[#1a1411]">Shop Collection</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#b8965a]/30 focus:outline-none focus:border-[#b8965a] bg-white"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5">
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 whitespace-nowrap border ${!selectedCategory ? 'bg-[#1a1411] text-white border-[#1a1411]' : 'border-[#b8965a]/30 text-[#1a1411] hover:border-[#b8965a]'}`}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 whitespace-nowrap border ${selectedCategory === cat.name ? 'bg-[#1a1411] text-white border-[#1a1411]' : 'border-[#b8965a]/30 text-[#1a1411] hover:border-[#b8965a]'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No products found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
            className="mt-4 px-6 py-2 bg-[#b8965a] text-white hover:bg-[#b8965a]/90"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col" onClick={() => handleProductClick(product)}>
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#f9f5f0]">
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10 bg-[#1a1411] text-[#f9f5f0] text-xs font-bold uppercase tracking-wider py-1 px-3">
                    New
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#1a1411]/80 to-transparent flex justify-center">
                  <button className="w-full bg-white text-[#1a1411] py-3 px-4 font-medium hover:bg-[#f9f5f0] transition-colors">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-medium text-[#1a1411] mb-1">{product.name}</h3>
                <p className="text-[#b8965a] font-semibold">{product.formattedPrice}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

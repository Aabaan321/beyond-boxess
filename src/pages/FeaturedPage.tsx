import React from 'react';
import ProductCard from '../components/ui/ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Product } from '../types';

const FeaturedPage: React.FC = () => {
  const featuredProducts: Product[] = getFeaturedProducts();

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-600 text-white py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Featured Collections</h1>
          <p className="max-w-2xl mx-auto text-amber-100">
            Our handpicked selection of the finest gift hampers, chosen for their exceptional quality and popularity.
          </p>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container mx-auto px-4">
        {featuredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No featured products available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPage;
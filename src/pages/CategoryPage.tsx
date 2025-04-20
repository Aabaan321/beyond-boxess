import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { getProductsByCategory } from '../data/products';
import categories from '../data/categories';
import { Product, Category } from '../types';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Find the category
      const foundCategory = categories.find(c => c.id === id);
      setCategory(foundCategory || null);
      
      // Get products for this category
      const categoryProducts = getProductsByCategory(id);
      setProducts(categoryProducts);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
      </div>
    );
  }
  
  if (!category) {
    return (
      <div className="min-h-screen pt-24 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
        <p className="text-gray-600">The category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Category Header */}
      <div className="relative py-16 bg-amber-800 text-white mb-8">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={category.imageUrl} 
            alt={category.name} 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/80"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="max-w-2xl mx-auto text-amber-100">
            {category.description}
          </p>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-amber-900">
            {products.length} Products Available
          </h2>
        </div>
        
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No products available in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
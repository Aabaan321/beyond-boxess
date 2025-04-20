import React from 'react';
import CategoryCard from '../components/ui/CategoryCard';
import categories from '../data/categories';

const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-amber-900 text-white py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Categories</h1>
          <p className="max-w-2xl mx-auto text-amber-100">
            Explore our wide range of gift hampers designed for every occasion. 
            From birthdays to corporate events, we have the perfect gift for everyone.
          </p>
        </div>
      </div>
      
      {/* Categories Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
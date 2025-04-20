import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.id}`} 
      className="group relative overflow-hidden rounded-lg shadow-md h-64"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-amber-900/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{category.name}</h3>
        <p className="text-amber-100 text-sm mb-3 line-clamp-2">{category.description}</p>
        
        {/* View Button */}
        <div className="flex items-center text-amber-200 group-hover:text-white transition-colors">
          <span className="mr-2 font-medium">View Collection</span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
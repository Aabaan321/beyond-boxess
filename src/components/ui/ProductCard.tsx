import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the product detail page
    addToCart(product, 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-amber-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-amber-700"
          aria-label="Add to cart"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-amber-700 font-bold">
            {formatPrice(product.price)}
          </span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
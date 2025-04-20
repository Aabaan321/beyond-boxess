import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { formatPrice } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
      
      if (foundProduct) {
        // Get related products from the same category
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setIsLoading(false);
    }
  }, [id]);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        <Link to="/" className="text-amber-700 hover:text-amber-800 mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link 
          to={`/category/${product.category}`} 
          className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Hampers</span>
        </Link>
        
        {/* Product detail */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            {/* Product image */}
            <div className="md:w-1/2">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product info */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              
              <p className="text-2xl font-bold text-amber-700 mb-4">
                {formatPrice(product.price)}
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Quantity selector */}
              <div className="flex items-center mb-6">
                <span className="text-gray-700 mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button 
                    onClick={handleDecrement}
                    className="px-3 py-1 text-gray-600 hover:text-amber-700 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-1 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button 
                    onClick={handleIncrement}
                    className="px-3 py-1 text-gray-600 hover:text-amber-700 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Add to cart button */}
              <Button 
                variant="primary" 
                size="lg" 
                className="flex items-center justify-center space-x-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </Button>
              
              {/* Additional info */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <p>Category: <span className="text-amber-700">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span></p>
                  <p>Item ID: <span className="text-gray-500">{product.id}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
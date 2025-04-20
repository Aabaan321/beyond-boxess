import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  return (
    <div className="flex py-4 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Product Details */}
      <div className="ml-4 flex-grow">
        <h4 className="text-sm font-medium text-gray-800">{product.name}</h4>
        <p className="text-sm text-gray-500 mt-1">
          {formatPrice(product.price)} each
        </p>
        
        {/* Quantity Controls */}
        <div className="flex items-center mt-2">
          <button 
            onClick={handleDecrement}
            className="p-1 text-gray-500 hover:text-amber-600 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="mx-2 w-8 text-center text-sm">{quantity}</span>
          <button 
            onClick={handleIncrement}
            className="p-1 text-gray-500 hover:text-amber-600 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
          
          <span className="ml-auto font-medium">
            {formatPrice(product.price * quantity)}
          </span>
          
          <button 
            onClick={handleRemove}
            className="ml-3 p-1 text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
import React from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import Button from '../ui/Button';
import { formatPrice } from '../../utils/formatters';
import { createWhatsAppOrderLink } from '../../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, clearCart } = useCart();

  if (!isOpen) return null;

  const handlePlaceOrder = () => {
    const whatsappLink = createWhatsAppOrderLink(items, subtotal);
    window.open(whatsappLink, '_blank');
    onClose();
    // Option to clear cart after order is placed
    // clearCart();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
              <Button 
                variant="outline" 
                size="md" 
                className="mt-4"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {items.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with Totals and Checkout */}
        {items.length > 0 && (
          <div className="p-4 border-t mt-auto">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth 
              className="mt-4"
              onClick={handlePlaceOrder}
            >
              Place Order via WhatsApp
            </Button>
            
            <button 
              className="w-full text-center text-sm text-gray-500 mt-3 hover:text-gray-700"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default CartDrawer;
import { formatCartForWhatsApp } from './formatters';
import { CartItem } from '../types';

// Create WhatsApp order link with formatted cart data
export const createWhatsAppOrderLink = (items: CartItem[], subtotal: number): string => {
  // Replace with your actual WhatsApp business number
  const phoneNumber = '1234567890';
  
  // Format cart items for the WhatsApp message
  const message = formatCartForWhatsApp(items, subtotal);
  
  // Generate WhatsApp API URL
  return `https://wa.me/${phoneNumber}?text=${message}`;
};
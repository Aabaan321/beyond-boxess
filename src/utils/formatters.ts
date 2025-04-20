// Format price to currency string
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
};

// Format cart items for WhatsApp message
export const formatCartForWhatsApp = (
  items: { product: { name: string; price: number }; quantity: number }[],
  subtotal: number
): string => {
  let message = 'Hello! I would like to order the following items:\n\n';
  
  items.forEach(item => {
    const itemTotal = item.product.price * item.quantity;
    message += `${item.quantity}x ${item.product.name} - ${formatPrice(item.product.price)} each = ${formatPrice(itemTotal)}\n`;
  });
  
  message += `\nSubtotal: ${formatPrice(subtotal)}`;
  message += '\n\nPlease confirm availability and payment details. Thank you!';
  
  return encodeURIComponent(message);
};
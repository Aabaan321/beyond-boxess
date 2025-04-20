import { Product } from '../types';

// Helper function to generate products for each category
const generateProductsForCategory = (categoryId: string, categoryName: string): Product[] => {
  const products: Product[] = [];
  
  // Base image URLs for each category
  const imageUrls: Record<string, string[]> = {
    birthday: [
      'https://images.pexels.com/photos/5693016/pexels-photo-5693016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6205529/pexels-photo-6205529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6204058/pexels-photo-6204058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    anniversary: [
      'https://images.pexels.com/photos/4041232/pexels-photo-4041232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5695908/pexels-photo-5695908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6208099/pexels-photo-6208099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    corporate: [
      'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4065622/pexels-photo-4065622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5416567/pexels-photo-5416567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    wellness: [
      'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6461198/pexels-photo-6461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7525140/pexels-photo-7525140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    baby: [
      'https://images.pexels.com/photos/36463/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3933260/pexels-photo-3933260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/90343/pexels-photo-90343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    festive: [
      'https://images.pexels.com/photos/6399235/pexels-photo-6399235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5699511/pexels-photo-5699511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5699537/pexels-photo-5699537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    custom: [
      'https://images.pexels.com/photos/6044757/pexels-photo-6044757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6231583/pexels-photo-6231583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6231585/pexels-photo-6231585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  };
  
  const descriptions: Record<string, string[]> = {
    birthday: [
      'A delightful assortment of gourmet treats to make their special day unforgettable.',
      'Luxury chocolates, fine wine, and personalized gifts for a birthday celebration.',
      'Sweet and savory delights perfect for surprising the birthday person.'
    ],
    anniversary: [
      'Romantic collection with champagne and delectable treats for celebrating love.',
      'Luxury gift set with keepsake items to commemorate your special milestone.',
      'Elegant arrangement of premium items for a memorable anniversary celebration.'
    ],
    corporate: [
      'Professional gift collection with branded items and premium treats.',
      'Executive gift set with high-quality business accessories and gourmet items.',
      'Impressive arrangement of luxury items perfect for client appreciation.'
    ],
    wellness: [
      'Relaxing spa essentials with natural products for the perfect self-care day.',
      'Organic tea selection with wellness accessories for rejuvenation.',
      'Calming aromatherapy set with premium self-care items.'
    ],
    baby: [
      'Adorable essentials for the new arrival with soft toys and practical items.',
      'Luxury baby clothing and keepsake gifts for the precious little one.',
      'Practical and cute collection of baby care items and soft toys.'
    ],
    festive: [
      'Seasonal delights with traditional treats and festive decorations.',
      'Holiday-themed collection with premium foods and celebration accessories.',
      'Festive arrangement with limited edition items for the holiday season.'
    ],
    custom: [
      'Personalized gift collection tailored to your specific preferences.',
      'Create your own perfect hamper with hand-selected premium items.',
      'Bespoke gift arrangement designed just for your recipient.'
    ]
  };
  
  // Generate 15 products for each category
  for (let i = 1; i <= 15; i++) {
    const imageIndex = i % 3;
    const descriptionIndex = i % 3;
    const basePrice = categoryId === 'corporate' || categoryId === 'custom' ? 75 : 45;
    
    products.push({
      id: `${categoryId}-${i}`,
      name: `${categoryName} Collection ${i}`,
      category: categoryId,
      price: basePrice + (i * 5),
      description: descriptions[categoryId][descriptionIndex],
      imageUrl: imageUrls[categoryId][imageIndex],
      featured: i <= 3 // First 3 products in each category are featured
    });
  }
  
  return products;
};

// Generate products for all categories
const generateAllProducts = (): Product[] => {
  const categories = [
    { id: 'birthday', name: 'Birthday' },
    { id: 'anniversary', name: 'Anniversary' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'baby', name: 'Baby' },
    { id: 'festive', name: 'Festive' },
    { id: 'custom', name: 'Custom' }
  ];
  
  let allProducts: Product[] = [];
  
  categories.forEach(category => {
    const categoryProducts = generateProductsForCategory(category.id, category.name);
    allProducts = [...allProducts, ...categoryProducts];
  });
  
  return allProducts;
};

const products = generateAllProducts();

export default products;

// Helper functions to work with products
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
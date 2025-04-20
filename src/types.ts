export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
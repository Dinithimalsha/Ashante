export interface Product {
  id: number;
  name: string;
  price: number;
  formattedPrice: string;
  image: string;
  category: string;
  isNew: boolean;
  description: string;
  sizes: string[];
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}
